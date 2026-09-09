# Image Lightbox

Overall goal: Make every slideshow image open in an accessible, familiar full-screen lightbox without affecting offline portability or slide navigation.

## Phase 1 — Lightbox implementation

**Goal:** Provide mouse, keyboard and touch image enlargement for all 17 images.

**Work:**

1. **Task 1:** Add semantic dialog markup with close, previous and next controls.
2. **Task 2:** Style a responsive full-viewport image presentation and visible zoom affordance.
3. **Task 3:** Connect every slide image to the dialog, preserve focus, and add keyboard and swipe navigation.

**QS:** Every image opens by left click and keyboard; Escape, backdrop click, arrows and swipe behave predictably.

**Learnings:**

The two full-bleed images needed an adjusted stacking order so their uncovered image area receives pointer clicks while the readable text overlay stays above them. Native dialog behavior provides Escape handling and focus containment.

## Phase 2 — Regression verification

**Goal:** Confirm the lightbox and existing slideshow continue to work locally and responsively.

**Work:**

1. **Task 1:** Validate HTML and JavaScript and run browser interaction tests. Depends on Phase 1.
2. **Task 2:** Check accessibility, image sizing and presentation navigation regressions.
3. **Task 3:** Commit only task changes. Depends on successful checks.

**QS:** Chromium tests pass for desktop, mobile and `file://`; Axe reports no new violations.

**Learnings:**

The lightbox passes mouse, keyboard, focus-return and responsive checks for all 17 source images. Axe reports no WCAG A/AA violations with the modal open.
