# Conversation Group Slides

A small iPad web app for teaching EnglishConnect conversation group lessons with Apple Pencil:
lesson library, slide viewer, pen, highlighter, eraser, laser pointer, blank board pages, and
section shortcuts (Prayer, Principle, Activities, Evaluate, Act in Faith).

- **No slides are included in this repository.** Each teacher imports their own copies of the
  lesson slide PDFs once; they are stored on the device only.
- Pen marks are stored on the device (IndexedDB). Use "Back up my marks" to save a copy.
- Works offline after the first visit (service worker caches the app).

Open it in Safari on iPad, tap Share → Add to Home Screen, and keep "Open as Web App" on.

Third-party components: [PDF.js](https://mozilla.github.io/pdf.js/) (Apache License 2.0, see
`PDFJS-LICENSE.txt`), Atkinson Hyperlegible and Bricolage Grotesque fonts (SIL Open Font License,
see `fonts/`).
