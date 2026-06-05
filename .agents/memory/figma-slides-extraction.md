---
name: Figma Slides extraction
description: How to pull a Figma Slides deck design when the usual MCP design tools don't work
---

# Figma Slides files only support getScreenshot

Figma **Slides** files (not regular design files) do NOT respond to `getMetadata`,
`getDesignContext`, or `getVariableDefs` — those return errors. Only `getScreenshot`
works.

**Why:** Slides is a distinct Figma product surface; the MCP design-context endpoints
are built for the design canvas, not the slides canvas.

**How to apply:** To recreate a Slides deck faithfully, render the whole deck via
`getScreenshot` on the root node, download the PNG, then crop per-slide and read
colors/text visually. In practice each slide is 1920×1080 laid out left-to-right in
one row with a fixed gap (e.g. left = 240 + i*2160, top = 240). Crop each slide and
sample brand colors directly from the image — there is no programmatic style data.
