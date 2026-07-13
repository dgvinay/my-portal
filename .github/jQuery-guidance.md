# jQuery Guidance for my-portal

This project uses Angular and native DOM APIs for component logic. jQuery should not be used for new component development.

## Why not jQuery?
- Angular provides templates, bindings, and lifecycle hooks that are a better fit than jQuery DOM manipulation.
- Mixing jQuery with Angular can cause runtime issues, change detection conflicts, and harder-to-maintain code.
- Native DOM APIs or Angular abstractions (Renderer2, ElementRef, directives) are preferred.

## What to do instead
- Use Angular templates and data binding for UI updates.
- Use `@ViewChild`, `ElementRef`, and lifecycle hooks for DOM access when needed.
- Avoid `$(...)`, `.find(...)`, `.position()`, `.outerHeight()`, and other jQuery-specific APIs in components.

## Existing work
- The `ExperienceCardComponent` has been updated to use native DOM access instead of jQuery.
