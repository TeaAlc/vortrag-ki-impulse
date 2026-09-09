# KI Impulse Slideshow

Overall goal: Deliver a verified, portable 37-slide German presentation in `KI Impulse HTML` that works from `file://` and static web hosting.

## Phase 1 — Content and media

**Goal:** Prepare every referenced source section and local asset without changing claims.

**Work:**

1. **Task 1:** Inventory the Markdown, sources, image embeds and audio embeds.
2. **Task 2:** Copy the 17 referenced images and four audio files under URL-safe names.
3. **Task 3:** Map all source content to exactly 37 slides and add German alternative text.

**QS:** All 21 referenced local assets exist; all Markdown sections and links have a slide or detail location.

**Learnings:**

The source contains exactly 17 referenced images, four referenced audio files and 18 unique external URLs. Four additional Vault images are intentionally not part of the deliverable.

## Phase 2 — Semantic implementation

**Goal:** Build a complete no-JavaScript reading experience.

**Work:**

1. **Task 1:** Create semantic HTML and six reusable slide compositions. Depends on Phase 1.
2. **Task 2:** Add accessible navigation, native details, audio, tables and overview markup.
3. **Task 3:** Add local font files, responsive styles and print rules.

**QS:** `index.html` has 37 stable slide IDs and every asset resolves locally.

**Learnings:**

The content maps cleanly to 37 slides when the two original Oxford rankings and the two 2026 reassessment groups receive separate table slides. Native details preserve the long song and policy prompts.

## Phase 3 — Interaction and visual system

**Goal:** Add robust presentation behavior and the confirmed dark visual direction.

**Work:**

1. **Task 1:** Implement keyboard, touch, hash, history, fullscreen and overview navigation. Depends on Phase 2.
2. **Task 2:** Coordinate manual audio and stop playback on slide changes.
3. **Task 3:** Verify motion reduction and graceful degradation.

**QS:** All interaction paths work without console errors; no audio autoplays.

**Learnings:**

CSS smooth scrolling must not govern long Home/End jumps because observers otherwise select intermediate slides. Adjacent navigation remains smooth; distant jumps are instant.

## Phase 4 — Verification and delivery

**Goal:** Freeze, verify and commit the portable directory.

**Work:**

1. **Task 1:** Run structural, link, asset, accessibility and script checks. Depends on Phase 3.
2. **Task 2:** Render representative desktop, tablet, mobile and print views and fix overflow.
3. **Task 3:** Confirm `file://` and local HTTP behavior, then commit only task files.

**QS:** Every check passes before the Conventional Commit is created.

**Learnings:**

Chromium and Firefox both render without document or slide overflow at the required sizes. Local audio range requests may report aborted subrequests under headless `file://`, while all players still reach ready state 4 and play correctly.
