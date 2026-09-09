# Design System

## Direction

Eine dunkle, ruhige 16:9-Ausstellungsfläche: Near-Black und Anthrazit tragen silberweiße Typografie; ein gedämpftes Violett führt durch die Präsentation. Ein gezielt eingesetztes, olivfarbenes Signal markiert Live- und Quellenmomente. Keine vom GPD-Motiv entlehnten Symbole außerhalb des Originalbilds.

## Color

- Background: `oklch(0.095 0 0)`
- Surface: `oklch(0.155 0.012 295)`
- Ink: `oklch(0.94 0.008 285)`
- Muted: `oklch(0.73 0.018 285)`
- Primary violet: `oklch(0.63 0.14 300)`
- Bright violet: `oklch(0.78 0.12 300)`
- Signal olive: `oklch(0.75 0.09 110)`

## Typography

Cinzel is the local display face for titles and Source Sans 3 is the local reading face. Display text stays solid, balanced and no larger than 96px; body copy is capped near 70 characters and gains extra leading on dark surfaces.

## Layout

Desktop uses one 16:9 composition per viewport with asymmetric text/image axes and generous outer space. Mobile removes fixed ratios and turns slides into natural-height reading sections. Tables scroll horizontally on narrow screens; print outputs one landscape slide per page.

## Components

Slides use six semantic compositions: title/chapter, text-image, full-bleed medium, diagram, table and discussion/quote. Controls are compact and persistent, with a native-dialog overview, progress bar, native details and native audio players.

## Motion

Only the active slide receives a short entrance movement. Navigation uses native smooth scrolling and becomes instant under `prefers-reduced-motion`.
