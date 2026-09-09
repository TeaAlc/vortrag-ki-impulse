# Chapter Heading Wrap

Overall goal: Keep the slide 8 heading “Audiogenerierung” on one line whenever the viewport has sufficient space.

## Phase 1 — Fix and verify

**Goal:** Remove the artificial wrap without causing responsive overflow.

**Work:**

1. **Task 1:** Remove the chapter-heading character-width cap.
2. **Task 2:** Render slide 8 at presentation and mobile sizes and check document overflow.
3. **Task 3:** Commit the verified change.

**QS:** The heading is one line at 1366×768 and 1920×1080; 390×844 has no horizontal document overflow.

**Learnings:**

The unwanted desktop wrap came from the chapter title's arbitrary `14ch` cap, not the viewport. Removing that cap keeps the word on one line at both presentation sizes while mobile wraps only to prevent overflow.
