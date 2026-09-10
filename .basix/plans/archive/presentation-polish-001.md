# Goal
Repair image enlargement and refine slides 8 and 1 in the portable HTML presentation.

## Phase 1
**Goal:** Enlarged images display reliably.
**Work:**
1. **Task 1:** Inspect and correct the lightbox image lifecycle and layout.
**QS:** Verify image display and repeated opening; check JavaScript syntax.
**Learnings:** All 21 images decode and render in Chromium and Firefox, including reopening. Original failure was not reproduced; source cleanup was removed and original-source fallback added.

## Phase 2
**Goal:** Slide 8 has a balanced violet layout and the requested prompt.
**Work:**
1. **Task 1:** After phase 1, reduce the demo title and add the prompt and attribution on the right.
**QS:** Verify exact requested text and responsive layout.
**Learnings:** The violet two-column layout fits desktop and mobile; the requested prompt and attribution are present verbatim.

## Phase 3
**Goal:** Slide 1 has a single-line title, violet audio card, and gently pulsing avatar lights.
**Work:**
1. **Task 1:** After phase 2, adjust the title and audio styles and animate the violet highlights.
**QS:** Verify transparency, animation, reduced-motion support, and final diff; commit only task changes.
**Learnings:** Embedded WebP preserves avatar transparency in the animated SVG. Desktop screenshots and mobile width checks pass; JavaScript syntax and diff checks pass.
