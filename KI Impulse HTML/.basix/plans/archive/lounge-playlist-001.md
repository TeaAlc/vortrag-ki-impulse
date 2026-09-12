# Goal
Add the approved three-track lounge playlist to the opening slide only while preserving user edits.

Estimated effort: small implementation and focused browser verification; far below 10 million input tokens.

## Phase 1
**Goal:** Working accessible playlist in the existing presentation design.
**Work:**
1. **Task 1:** Implement the title player, sequence/repeat behavior, slide-stop handling and documentation (Subagent Task: basix_pager).
2. **Task 2:** Preserve baseline user edits and prepare focused verification independently.
**QS:** Syntax checks pass; all three local tracks resolve; implementation report received.
**Learnings:** User narrowed scope to title slide only. Syntax, local asset assertions and media-stub checks passed. No browser runtime is installed; independent review will use code and focused stubs.

## Phase 2
**Goal:** Verified and committed task changes.
**Work:**
1. **Task 1:** After Phase 1, independently inspect the frozen implementation and verify playlist behavior (Subagent Task: basix_verifier).
2. **Task 2:** Address any findings, archive this plan and commit only task changes.
**QS:** Verification passes; existing user edits remain uncommitted; task commit recorded.
**Learnings:** Independent review confirmed scope, assets and controls. Corrected stale callback cancellation; focused check passed. Browser testing unavailable. User requests minimal verification and fast delivery.
