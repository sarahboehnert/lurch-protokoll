
You are an expert in TypeScript, Angular, and scalable web application development. You write functional, maintainable, performant, and accessible code following Angular and TypeScript best practices.

## TypeScript Best Practices

- Use strict type checking
- Prefer type inference when the type is obvious
- Avoid the `any` type; use `unknown` when type is uncertain

## Class Members

- Properties and methods must be `private readonly` by default.
- Widen to `protected readonly` only when the template needs access to them.
- Never use `public`, unless strictly necessary.
- Order members as follows: injections first, then signals, then everything else. Within each of these groups, sort from `public` to `private`.
- Add an explicit type annotation (`: Type`) to a property only when the type is not already unambiguous from its initializer. For example, omit the annotation for `inject(SomeService)` or `input<T>(...)` / `input.required<T>()`, since the type is already stated there. Always annotate method return types explicitly.
- Interfaces used only within a single class stay private to that file. If an interface is also needed elsewhere, move it into its own file.

## Angular Best Practices

- Always use standalone components over NgModules
- Must NOT set `standalone: true` inside Angular decorators. It's the default in Angular v20+.
- Do NOT set `changeDetection: ChangeDetectionStrategy.OnPush` explicitly. `OnPush` is the default in Angular v22+.
- Use signals for state management
- Implement lazy loading for feature routes
- Do NOT use the `@HostBinding` and `@HostListener` decorators. Put host bindings inside the `host` object of the `@Component` or `@Directive` decorator instead
- Use `NgOptimizedImage` for all static images.
  - `NgOptimizedImage` does not work for inline base64 images.

## Accessibility Requirements

- It MUST pass all AXE checks.
- It MUST follow all WCAG AA minimums, including focus management, color contrast, and ARIA attributes.

### Components

- Keep components small and focused on a single responsibility
- Use `input()` and `output()` functions instead of decorators
- Use `computed()` for derived state
- Prefer Signal Forms (`@angular/forms/signals`) for new forms. They are stable in Angular v22+ and provide signal-based state, type-safe field access, and schema-based validation
- When not using Signal Forms, prefer Reactive forms instead of Template-driven ones
- Do NOT use `ngClass`, use `class` bindings instead
- Do NOT use `ngStyle`, use `style` bindings instead
- When using external templates/styles, use paths relative to the component TS file.

## State Management

- Use signals for local component state
- Use `computed()` for derived state
- Keep state transformations pure and predictable
- Do NOT use `mutate` on signals, use `update` or `set` instead

## Templates

- Keep templates simple and avoid complex logic
- Use native control flow (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`, `*ngSwitch`
- Use the async pipe to handle observables
- Do not assume globals like (`new Date()`) are available.
- Order element attributes as:
  1. `id`
  2. Standalone, valueless attributes (e.g. `mat-tab-link`, `disableRipple`)
  3. Plain string attributes: `class` first, then `aria-*` attributes alphabetically, then any other plain attributes
  4. Property/attribute bindings in square brackets (`[...]`), following the same sub-order as (3) where it applies (`[class...]` first, then `[attr.aria-*]` alphabetically, then the rest)
  5. Event bindings in parentheses (`(...)`) last

## Styling

- Use responsive, relative sizing units (`rem`) instead of fixed `px` values for CSS sizing.
- Write CSS mobile-first: author the base (unprefixed) styles for the smallest viewport, then layer on larger breakpoints with `min-width` media queries to progressively enhance.
- Prefer the project's existing utility classes (`src/styles/utilities`) over inventing custom component classes; apply them directly in the template . Only write custom, component-scoped CSS for what those utilities genuinely cannot express (e.g. a third-party component library's CSS custom-property/token overrides, or a one-off dimension with no matching utility).

## Services

- Design services around a single responsibility
- Use the `providedIn: 'root'` option for singleton services
- Prefer the `@Service` decorator over `@Injectable({providedIn: 'root'})` for new singleton services (Angular v22+)
- Use the `inject()` function instead of constructor injection
