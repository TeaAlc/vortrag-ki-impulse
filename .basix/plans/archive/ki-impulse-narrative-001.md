# KI Impulse narrative restoration

Overall goal: Make the HTML presentation follow the source's explanatory progression with clear chapter orientation and fluent spoken delivery. Preserve the source vault, original media, offline operation, existing visual identity, and the unresolved Neffe Thomas discussion question.

Estimated effort: One focused implementation and verification cycle, substantially below 10 million input tokens. No external research or new factual claims required.

## Phase 1: Establish editorial acceptance criteria

**Goal:** A concrete, source-grounded specification ready for implementation.

**Work:**
1. **Task 1:** Use the completed source/HTML comparison; inspect repository status, active ADR index, product/design context, and direct active/archive plan filenames.
2. **Task 2:** Specify chapter labels, transitions, slide splits, restored passages, and protected content below. No dependency beyond Task 1.
3. **Task 3:** Assign isolated HTML/CSS/README implementation ownership after this specification is saved. (Subagent Task: basix_pager)

**QS:** Every finding has a specific correction; Neffe Thomas remains unspoiled; original vault is outside write scope; existing untracked configuration is excluded.

**Learnings:** Phase 1 QS passed. No active ADR index exists. Existing untracked `.agents/` and `.codex/` are unrelated. The product has a committed visual identity and a combined discussion slide that should be preserved. The Impeccable context script's network update check was blocked; existing PRODUCT.md and DESIGN.md supplied local context. Implementation is assigned to `narrative_implementation` with exclusive deck ownership.

### Editorial specification

- Keep chapter hierarchy visible: Einführung; KI und ihre Anwendung with Bildgenerierung, Audiogenerierung, Chatbots, Wissensdatenbanken, KI-Agenten, Halluzinationen & Vertrauen, Prompt Injection; Auswirkungen von KI with Schlagzeilen, Arbeitsmarkt, Politik; Diskussion: Chancen & Risiken; Abschlussfrage; Freier Teil. Use readable, consistent chapter/subchapter labels rather than alternating generic labels or slogans. Synchronize overview titles with slide subjects.
- Preserve the four image examples and their playful tone as one clearly labeled sequence. Remove the unsupported invitation-card ease claim. Separate the live cat-image demo from local-tool requirements and remove the invented prescribed demo sequence. Avoid duplicate empty chapter slides where a content slide introduces the subject adequately.
- Keep TTS and music within Audiogenerierung. Use a neutral GPD speech-examples heading, without asserting identical voices. Preserve the recurring fictional GPD thread, audio controls, lyrics, links and original images. Remove presenter-irrelevant implementation copy from the title slide.
- Restore the chatbot chain explicitly: model and chat surface; Paris dialogue; context (connect the word 'dort' to Paris); training knowledge versus today's newspaper; supplying relevant newspaper excerpts as context; RAG diagram and original enriched dialogue. Define RAG in German alongside its full name. Preserve the existing dedicated RAG layout.
- Explain machine-consumable model responses before tool execution. Show tool examples and the model/backend distinction as visible essential content. Then show the tool-result feedback loop and define multi-step agent behavior with Claude Code/Codex examples. Put the subagent question visibly after the definition. The agent-cycle diagram must follow tool introduction. Keep optional details only for genuinely supplemental material.
- Separate Halluzinationen & Vertrauen and Prompt Injection into two slides. Restore both original audience questions. Preserve source cautions about confidence, sources, permissions, and sensitive information. Do not add unrelated security content.
- Use neutral Schlagzeilen headings and original individual story titles; replace 'Selbsterhalt' and arbitrary paired theses. Preserve all six stories and source links; do not introduce external factual assertions.
- Introduce Arbeitsmarkt with the IAB scenario, retaining conditional interpretation and values. Introduce the 2013 study before its two result slides. Introduce the AI-generated 2026 estimates, author/model, prompt purpose, and distinction between occupational probabilities and work-time estimates BEFORE the estimate tables. Retain all ten rows, values, ranges, caveats and explanations. Label each estimate slide visibly as an AI scenario estimate, not measured job losses. Use neutral table/overview titles covering all listed occupations, including hand sewers. Keep the full prompt and methodological details accessible.
- Keep Politik as a peer of Arbeitsmarkt under Auswirkungen. Preserve the guest-contribution framing and prompt, and show its four-step argument: desk-work support, Consult example, risks, responsibility. Restore the Consult pilot limitation and the final question about whether saved time improves politics. Use concrete headings consistent with these contents.
- Keep the combined discussion slide and all fourteen questions. Restore 'Diskussion: Chancen & Risiken' as the chapter/subject. Neffe Thomas stays an open question: no answer, explanatory bridge, spoiler, voice-cloning hint attached to it, or speaker note resolving it. Preserve closing quotation and domino invitation.
- Preserve existing anchors where practical. Update counts, README and any navigation assumptions for actual slide order. Add only CSS necessary for readability of revised content, stable chapter labels, and screen/print fit. No new network dependencies.

## Phase 2: Implement the narrative corrections

**Goal:** The HTML deck implements the editorial specification and remains portable and readable.

**Work:**
1. **Task 1:** Implement specification in index.html, minimal styles.css adjustments and README. Depends on Phase 1. (Subagent Task: basix_pager)
2. **Task 2:** Inspect the returned diff against the specification, original text, asset preservation and user constraints. Root owns plan, PRODUCT.md synchronization and memory only while the writer is active.
3. **Task 3:** Run proportional structural and browser checks: unique IDs, valid local assets and anchors, actual slide count/overview consistency, essential content outside closed details, desktop/mobile readability, navigation and print behavior. Repair concrete failures before freezing the result.

**QS:** All specified corrections implemented; no original/media edits; no missing stories/table rows/discussion questions; Neffe Thomas unchanged in intent; navigation and revised layouts pass applicable checks.

**Learnings:** Phase 2 QS passed. The result has 37 slides: dedicated demo, agent-cycle and Oxford introduction replace redundant chapter-only interruptions. All 18 external URLs, 21 media references, 30 table rows and 14 discussion questions are preserved. Essential agent explanations are visible; original risk questions and political caveats are restored. Root corrected the RAG translation, retained intro audio placement and clarified estimate caveats. Chromium checks pass at 1920x1080, 1366x768, 1024x768 and 390x844, including file access, overview, navigation and no-JavaScript reading. Existing temporary tests were updated from the obsolete 36-slide count. Firefox could not launch in the available environment, so browser acceptance relies on Chromium and this limitation will be disclosed.

## Phase 3: Verify and deliver

**Goal:** Independently checked presentation and a committed, reviewable handoff.

**Work:**
1. **Task 1:** Freeze implementation after the writer finishes. Assign read-only verification of final HTML/CSS/README against this specification; no overlapping writes during verification. (Subagent Task: basix_verifier)
2. **Task 2:** Resolve any material findings, then repeat verification on a fresh frozen target if changes were required. Depends on Task 1.
3. **Task 3:** Synchronize product documentation, update phase outcomes and qualifying memory, archive this exact plan basename, run final diff checks, and commit only task files with a Conventional Commits message after all checks have succeeded.
4. **Task 4:** Provide concise German handoff linking the deck and archived plan, with actual verification evidence and any limitations.

**QS:** Independent verification complete; no running/failed checks; plan archived; task-only commit created; user receives the finished deck and plan.

**Learnings:** Final independent verification passed. The only review finding was corrected and `overview_title_recheck` confirmed the complete title in both DOM and rendered overview, preserving the slide ID and 37-slide inventory. All required checks are finished; the completed plan is archived with the task changes. Useful durable knowledge is retained in memory, including the explicit instruction to leave Neffe Thomas unresolved.

### Verification evidence

- `narrative_final_verification` independently passed all 12 narrative/content/visual criteria. It inspected original text and screenshots of the six hardest revised slides at 1440x900 and 390x844. Root corrected its single low-severity overview-title finding; `overview_title_recheck` passed on the corrected frozen HTML.
- Root's aggregate Chromium checks passed HTTP at 1920x1080, 1366x768, 1024x768, and 390x844 plus direct file access at 1366x768. No missing images, document/slide overflow, external runtime loads, script errors, or navigation/count failures.
- Axe WCAG checks returned zero violations; skip link, keyboard focus, history, dialog Escape and mobile no-JavaScript reading passed. Audio playback coordination and stopping passed.
- Print export produced exactly 37 PDF pages. Source vault and original media/font files have no diff. JavaScript syntax, diff whitespace and memory TOML validation passed.
- Existing temporary verification scripts had stale 36-slide assertions; these were corrected to 37 and both full scripts passed. Firefox could not launch in this environment and is explicitly excluded from the browser compatibility claim. External factual claims and linked websites were not re-researched.
