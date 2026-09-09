# Original Image Integrity and RAG Layout

Overall goal: Keep every Markdown-referenced original image reliably visible on its correct slide, fix slide 17's dialogue, and correct the slide 25 composition.

## Phase 1 — Recompose and verify

**Goal:** Replace the collapsed detail placeholder, eliminate image loading placeholders, and repair the Arbeitsmarkt layout.

**Work:**

1. **Task 1:** Recompose slide 17 as diagram plus dialogue bubbles.
2. **Task 2:** Add responsive compact-dialogue styling without changing the source image.
3. **Task 3:** Set all 17 Markdown-referenced images to eager local loading.
4. **Task 4:** Verify every source-to-slide mapping, byte hash and rendered natural dimensions.
5. **Task 5:** Recompose slide 25 and verify all target viewports.
6. **Task 6:** Validate accessibility and commit.

**QS:** All 17 byte-identical originals render on their expected slides; slide 17 shows image and dialogue; slide 25 fits visually; mobile has no horizontal overflow.

**Learnings:** All 17 Markdown-referenced images are byte-identical to their portable copies and render at their expected slide positions. Eager loading prevents image placeholders during direct slide navigation; explicit metric rows keep slide 25 readable across projector and mobile viewports.
