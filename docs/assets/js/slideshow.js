(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  if (!slides.length) return;

  var currentOutput = document.querySelector("[data-current]");
  var totalOutput = document.querySelector("[data-total]");
  var progress = document.querySelector("[data-progress]");
  var previousLink = document.querySelector("[data-action='previous']");
  var nextLink = document.querySelector("[data-action='next']");
  var overview = document.getElementById("slide-overview");
  var overviewList = document.querySelector("[data-overview-list]");
  var fullscreenButton = document.querySelector("[data-action='fullscreen']");
  var audios = Array.prototype.slice.call(document.querySelectorAll("audio"));
  var playlistTracks = [
    { src: "assets/audio/ai-lounge.mp3", title: "AI Lounge" },
    { src: "assets/audio/AI%20Lounge%202.mp3", title: "AI Lounge 2" },
    { src: "assets/audio/AI%20Lounge%203.mp3", title: "AI Lounge 3" }
  ];
  var zoomableImages = Array.prototype.slice.call(document.querySelectorAll(".slide img"));
  var lightbox = document.getElementById("image-lightbox");
  var lightboxImage = document.querySelector("[data-lightbox-image]");
  var lightboxCaption = document.querySelector("[data-lightbox-caption]");
  var lightboxCounter = document.querySelector("[data-lightbox-counter]");
  var overviewLinks = [];
  var visibility = new Map();
  var activeIndex = 0;
  var touchStart = null;
  var lightboxTouchStart = null;
  var lightboxIndex = 0;
  var lightboxReturnFocus = null;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  totalOutput.textContent = String(slides.length);

  function validHashIndex() {
    if (!window.location.hash) return -1;
    var id;
    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch (error) {
      return -1;
    }
    var directIndex = slides.findIndex(function (slide) { return slide.id === id; });
    if (directIndex >= 0) return directIndex;
    var aliasTarget = document.getElementById(id);
    var aliasSlide = aliasTarget && aliasTarget.closest(".slide");
    return aliasSlide ? slides.indexOf(aliasSlide) : -1;
  }

  function stopAudio(audio, reset) {
    audio._playbackToken = (audio._playbackToken || 0) + 1;
    audio.pause();
    if (reset) {
      try { audio.currentTime = 0; } catch (error) { /* Metadata may not be ready. */ }
    }
  }

  function isAudioOnActiveSlide(audio) {
    var slide = typeof audio.closest === "function" ? audio.closest(".slide") : null;
    return !slide || slides.indexOf(slide) === activeIndex;
  }

  function playAudio(audio) {
    audios.forEach(function (other) {
      if (other !== audio) stopAudio(other, true);
    });

    var token = (audio._playbackToken || 0) + 1;
    audio._playbackToken = token;
    var playPromise;
    try {
      playPromise = audio.play();
    } catch (error) {
      return;
    }
    if (playPromise && typeof playPromise.then === "function") {
      playPromise.then(function () {
        if (audio._playbackToken !== token) return;
        if (!isAudioOnActiveSlide(audio)) stopAudio(audio, true);
      }, function () {
        if (audio._playbackToken === token) audio._playbackToken += 1;
      });
    }
  }

  function pauseAllAudio() {
    audios.forEach(function (audio) {
      stopAudio(audio, true);
    });
  }

  function updatePlaylist(player) {
    var track = player.tracks[player.index];
    player.titleOutput.textContent = track.title;
    player.positionOutput.textContent = (player.index + 1) + " / " + player.tracks.length;
    player.audio.setAttribute("aria-label", track.title);
    player.previousButton.disabled = player.index === 0;
    player.nextButton.disabled = player.index === player.tracks.length - 1;
  }

  function setPlaylistTrack(player, index, shouldPlay) {
    if (index < 0 || index >= player.tracks.length) return;
    var audio = player.audio;
    var wasPlaying = !audio.paused;
    stopAudio(audio, true);
    player.index = index;
    var track = player.tracks[index];
    if (player.source) player.source.src = track.src;
    else audio.src = track.src;
    if (typeof audio.load === "function") audio.load();
    updatePlaylist(player);
    if (shouldPlay === undefined) shouldPlay = wasPlaying;
    if (shouldPlay) playAudio(audio);
  }

  function initPlaylistPlayer(root) {
    var audio = root.querySelector("audio");
    var titleOutput = root.querySelector("[data-playlist-title]");
    var positionOutput = root.querySelector("[data-playlist-position]");
    var previousButton = root.querySelector("[data-playlist-action='previous']");
    var nextButton = root.querySelector("[data-playlist-action='next']");
    if (!audio || !titleOutput || !positionOutput || !previousButton || !nextButton) return;

    var player = {
      audio: audio,
      source: audio.querySelector("source"),
      tracks: playlistTracks,
      index: 0,
      titleOutput: titleOutput,
      positionOutput: positionOutput,
      previousButton: previousButton,
      nextButton: nextButton,
      repeatInput: root.querySelector("[data-playlist-repeat]")
    };
    root._playlistPlayer = player;
    updatePlaylist(player);
    audio.addEventListener("ended", function () {
      if (!isAudioOnActiveSlide(audio)) {
        stopAudio(audio, true);
        return;
      }
      var nextIndex = player.index + 1;
      if (nextIndex >= player.tracks.length) {
        if (!player.repeatInput || !player.repeatInput.checked) return;
        nextIndex = 0;
      }
      setPlaylistTrack(player, nextIndex, true);
    });
  }

  Array.prototype.forEach.call(document.querySelectorAll("[data-playlist]"), initPlaylistPlayer);

  function updateControls(index) {
    var previousIndex = Math.max(0, index - 1);
    var nextIndex = Math.min(slides.length - 1, index + 1);
    currentOutput.textContent = String(index + 1);
    progress.style.transform = "scaleX(" + ((index + 1) / slides.length) + ")";
    previousLink.href = "#" + slides[previousIndex].id;
    nextLink.href = "#" + slides[nextIndex].id;
    previousLink.setAttribute("aria-disabled", index === 0 ? "true" : "false");
    nextLink.setAttribute("aria-disabled", index === slides.length - 1 ? "true" : "false");
    overviewLinks.forEach(function (link, linkIndex) {
      if (linkIndex === index) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  function setActive(index, updateHash) {
    if (index < 0 || index >= slides.length) return;
    var changed = index !== activeIndex;
    if (changed) pauseAllAudio();
    slides.forEach(function (slide, slideIndex) {
      slide.classList.toggle("is-active", slideIndex === index);
      slide.setAttribute("aria-current", slideIndex === index ? "true" : "false");
    });
    activeIndex = index;
    updateControls(index);

    var firstSlideWithoutHash = index === 0 && !window.location.hash;
    if (updateHash && !firstSlideWithoutHash && window.location.hash !== "#" + slides[index].id) {
      history.replaceState({ slide: index }, "", "#" + slides[index].id);
    }
  }

  function scrollToSlide(index, addHistory) {
    if (index < 0 || index >= slides.length) return;
    pauseAllAudio();
    var isAdjacent = Math.abs(index - activeIndex) <= 1;
    if (addHistory && window.location.hash !== "#" + slides[index].id) {
      history.pushState({ slide: index }, "", "#" + slides[index].id);
    }
    slides[index].scrollIntoView({
      behavior: reducedMotion.matches || !isAdjacent ? "instant" : "smooth",
      block: "start"
    });
    setActive(index, false);
  }

  function nearestVisibleSlide() {
    var bestIndex = activeIndex;
    var bestRatio = -1;
    visibility.forEach(function (ratio, slide) {
      if (ratio > bestRatio) {
        bestRatio = ratio;
        bestIndex = slides.indexOf(slide);
      }
    });
    if (bestRatio >= 0) setActive(bestIndex, true);
  }

  function updateLightbox(index) {
    lightboxIndex = (index + zoomableImages.length) % zoomableImages.length;
    var source = zoomableImages[lightboxIndex];
    var description = source.getAttribute("alt") || "Vergrößertes Präsentationsbild";
    lightboxImage.onerror = function () {
      lightboxImage.onerror = null;
      lightboxImage.src = source.src;
    };
    lightboxImage.src = source.currentSrc || source.src;
    lightboxImage.alt = description;
    lightboxCaption.textContent = description;
    lightboxCounter.textContent = (lightboxIndex + 1) + " / " + zoomableImages.length;
  }

  function openLightbox(index, trigger) {
    lightboxReturnFocus = trigger;
    updateLightbox(index);
    if (typeof lightbox.showModal === "function") lightbox.showModal();
    else lightbox.setAttribute("open", "");
    lightbox.querySelector("[data-action='close-lightbox']").focus();
  }

  function closeLightbox() {
    if (typeof lightbox.close === "function") lightbox.close();
    else {
      lightbox.removeAttribute("open");
      if (lightboxReturnFocus) lightboxReturnFocus.focus();
    }
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        visibility.set(entry.target, entry.isIntersecting ? entry.intersectionRatio : 0);
      });
      nearestVisibleSlide();
    }, { threshold: [0, 0.25, 0.5, 0.75, 1] });
    slides.forEach(function (slide) { observer.observe(slide); });
  } else {
    var scrollTicking = false;
    window.addEventListener("scroll", function () {
      if (scrollTicking) return;
      scrollTicking = true;
      window.requestAnimationFrame(function () {
        var center = window.innerHeight / 2;
        var nearest = 0;
        var distance = Infinity;
        slides.forEach(function (slide, index) {
          var rect = slide.getBoundingClientRect();
          var currentDistance = Math.abs((rect.top + rect.height / 2) - center);
          if (currentDistance < distance) {
            distance = currentDistance;
            nearest = index;
          }
        });
        setActive(nearest, true);
        scrollTicking = false;
      });
    }, { passive: true });
  }

  slides.forEach(function (slide, index) {
    var link = document.createElement("a");
    var number = document.createElement("span");
    number.textContent = String(index + 1).padStart(2, "0");
    link.href = "#" + slide.id;
    link.appendChild(number);
    link.appendChild(document.createTextNode(slide.getAttribute("data-title") || slide.id));
    link.addEventListener("click", function (event) {
      event.preventDefault();
      if (overview.open) overview.close();
      scrollToSlide(index, true);
    });
    overviewList.appendChild(link);
    overviewLinks.push(link);
  });

  zoomableImages.forEach(function (image, index) {
    image.classList.add("zoomable-image");
    image.setAttribute("tabindex", "0");
    image.setAttribute("role", "button");
    image.setAttribute("aria-label", "Bild vergrößern: " + (image.getAttribute("alt") || "Präsentationsbild"));
    image.addEventListener("click", function (event) {
      if (event.button === 0) openLightbox(index, image);
    });
    image.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(index, image);
      }
    });
  });

  document.addEventListener("click", function (event) {
    var playlistActionTarget = event.target.closest("[data-playlist-action]");
    if (playlistActionTarget) {
      event.preventDefault();
      var playlistRoot = playlistActionTarget.closest("[data-playlist]");
      var player = playlistRoot && playlistRoot._playlistPlayer;
      if (player) {
        var action = playlistActionTarget.getAttribute("data-playlist-action");
        var nextIndex = player.index + (action === "next" ? 1 : -1);
        if (action === "previous" || action === "next") setPlaylistTrack(player, nextIndex);
      }
      return;
    }

    var actionTarget = event.target.closest("[data-action]");
    if (!actionTarget) return;
    var action = actionTarget.getAttribute("data-action");

    if (action === "previous" || action === "next") {
      event.preventDefault();
      scrollToSlide(activeIndex + (action === "next" ? 1 : -1), true);
    } else if (action === "overview") {
      if (typeof overview.showModal === "function") overview.showModal();
      else overview.setAttribute("open", "");
      overviewLinks[activeIndex].focus();
    } else if (action === "close-overview") {
      if (typeof overview.close === "function") overview.close();
      else overview.removeAttribute("open");
    } else if (action === "fullscreen") {
      if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(function () {
          fullscreenButton.textContent = "Nicht verfügbar";
          fullscreenButton.title = "Der Browser hat den Vollbildmodus nicht erlaubt.";
        });
      } else if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen();
      } else {
        fullscreenButton.textContent = "Nicht verfügbar";
        fullscreenButton.title = "Dieser Browser unterstützt die Fullscreen API nicht.";
      }
    } else if (action === "close-lightbox") {
      closeLightbox();
    } else if (action === "previous-image") {
      updateLightbox(lightboxIndex - 1);
    } else if (action === "next-image") {
      updateLightbox(lightboxIndex + 1);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;

    if (lightbox.open) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        updateLightbox(lightboxIndex - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        updateLightbox(lightboxIndex + 1);
      }
      return;
    }

    var interactive = event.target.closest("a, button, audio, input, select, textarea, summary, [contenteditable='true']");
    if (interactive) return;

    var nextIndex = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown" || event.key === "PageDown" || event.key === " ") nextIndex = activeIndex + 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp" || event.key === "PageUp") nextIndex = activeIndex - 1;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = slides.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      scrollToSlide(Math.max(0, Math.min(slides.length - 1, nextIndex)), true);
    }
  });

  document.addEventListener("touchstart", function (event) {
    if (lightbox.open || event.touches.length !== 1 || event.target.closest("audio, .audio-playlist, .table-scroll, .details-panel__body")) return;
    touchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  }, { passive: true });

  document.addEventListener("touchend", function (event) {
    if (!touchStart || !event.changedTouches.length) return;
    var deltaX = event.changedTouches[0].clientX - touchStart.x;
    var deltaY = event.changedTouches[0].clientY - touchStart.y;
    touchStart = null;
    if (Math.abs(deltaX) < 55 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return;
    scrollToSlide(activeIndex + (deltaX < 0 ? 1 : -1), true);
  }, { passive: true });

  audios.forEach(function (audio) {
    audio.addEventListener("play", function () {
      if (!isAudioOnActiveSlide(audio)) {
        stopAudio(audio, true);
        return;
      }
      audios.forEach(function (other) {
        if (other !== audio) stopAudio(other, true);
      });
    });
  });

  window.addEventListener("hashchange", function () {
    var index = validHashIndex();
    if (index >= 0) scrollToSlide(index, false);
  });

  document.addEventListener("fullscreenchange", function () {
    fullscreenButton.textContent = document.fullscreenElement ? "Vollbild beenden" : "Vollbild";
    fullscreenButton.setAttribute("aria-label", document.fullscreenElement ? "Vollbild beenden" : "Vollbild umschalten");
  });

  overview.addEventListener("click", function (event) {
    if (event.target === overview) overview.close();
  });

  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox || event.target.classList.contains("lightbox__figure")) closeLightbox();
  });

  lightbox.addEventListener("close", function () {
    if (lightboxReturnFocus) lightboxReturnFocus.focus();
  });

  lightbox.addEventListener("touchstart", function (event) {
    if (event.touches.length !== 1) return;
    lightboxTouchStart = { x: event.touches[0].clientX, y: event.touches[0].clientY };
  }, { passive: true });

  lightbox.addEventListener("touchend", function (event) {
    if (!lightboxTouchStart || !event.changedTouches.length) return;
    var deltaX = event.changedTouches[0].clientX - lightboxTouchStart.x;
    var deltaY = event.changedTouches[0].clientY - lightboxTouchStart.y;
    lightboxTouchStart = null;
    if (Math.abs(deltaX) < 55 || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return;
    updateLightbox(lightboxIndex + (deltaX < 0 ? 1 : -1));
  }, { passive: true });

  var initialIndex = validHashIndex();
  if (initialIndex < 0) initialIndex = 0;
  setActive(initialIndex, !window.location.hash);
  if (validHashIndex() > 0) {
    window.requestAnimationFrame(function () {
      slides[initialIndex].scrollIntoView({ behavior: "instant", block: "start" });
    });
  }
}());
