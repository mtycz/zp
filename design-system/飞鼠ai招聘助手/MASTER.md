# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** 飞鼠AI招聘助手
**Generated:** 2026-03-25 15:11:20
**Category:** SaaS (General)

---

## Global Rules

### Color Palette

> **IMPORTANT:** When writing CSS variables to `index.css`, use the `oklch()` values below, NOT Hex.

| Role | Hex | oklch | CSS Variable |
|------|-----|-------|--------------|
| Primary | `#2563EB` | `oklch(0.546 0.231 265.627)` | `--primary` |
| Secondary | `#3B82F6` | `oklch(0.623 0.201 262.852)` | `--secondary` |
| CTA/Accent | `#F97316` | `oklch(0.705 0.191 50.915)` | `--accent` |
| Background | `#F8FAFC` | `oklch(0.984 0.004 251.92)` | `--background` |
| Text | `#1E293B` | `oklch(0.279 0.04 263.37)` | `--foreground` |

**Color Notes:** Trust blue + orange CTA contrast

### Typography

- **Heading Font:** Plus Jakarta Sans
- **Body Font:** Plus Jakarta Sans
- **Mood:** friendly, modern, saas, clean, approachable, professional
- **Google Fonts:** [Plus Jakarta Sans + Plus Jakarta Sans](https://fonts.google.com/share?selection.family=Plus+Jakarta+Sans:wght@300;400;500;600;700)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
```

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px` / `0.25rem` | Tight gaps |
| `--space-sm` | `8px` / `0.5rem` | Icon gaps, inline spacing |
| `--space-md` | `16px` / `1rem` | Standard padding |
| `--space-lg` | `24px` / `1.5rem` | Section padding |
| `--space-xl` | `32px` / `2rem` | Large gaps |
| `--space-2xl` | `48px` / `3rem` | Section margins |
| `--space-3xl` | `64px` / `4rem` | Hero padding |

### Shadow Depths

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 2px 8px rgba(0,0,0,0.05)` | Subtle glass edge |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.08)` | Glass cards |
| `--shadow-lg` | `0 8px 32px rgba(0,0,0,0.1)` | Glass modals |
| `--shadow-xl` | `0 16px 48px rgba(0,0,0,0.12)` | Hero glass panels |

### Style-Specific Design Tokens

> **Style:** Glassmorphism — these tokens define the unique visual identity of this style.

```css
:root {
  --blur-amount: 15px;
  --glass-opacity: 0.15;
  --border-color: rgba(255,255,255,0.2);
  --background: vibrant color;
  --text-color: light/dark based on BG;
}
```

### CSS Implementation Keywords

> Key CSS properties and techniques for this style:

`backdrop-filter: blur(15px), background: rgba(255, 255, 255, 0.15), border: 1px solid rgba(255,255,255,0.2), -webkit-backdrop-filter: blur(15px), z-index layering for depth`

---

## Component Specs

### Buttons

```css
/* Primary Button */
.btn-primary {
  background: oklch(0.705 0.191 50.915);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 700;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: oklch(0.546 0.231 265.627);
  border: 2px solid oklch(0.546 0.231 265.627);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 700;
  transition: all 200ms ease;
  cursor: pointer;
}
```

### Cards

```css
.card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  transition: all 200ms ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  transform: translateY(-2px);
}
```

### Inputs

```css
.input {
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: oklch(0.546 0.231 265.627);
  outline: none;
  box-shadow: 0 0 0 3px oklch(0.546 0.231 265.627);
}
```

### Modals

```css
.modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
}

.modal {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 16px 48px rgba(0,0,0,0.12);
  max-width: 500px;
  width: 90%;
}
```

### Page Transitions

> **Type:** `blur-fade` — **Mode:** `scale` — **Duration:** `300ms` — **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)`

Page transitions use **framer-motion** (`AnimatePresence` + `motion.div`). Use the `transition` prop on `<PageTransition>` to set the mode, and update `:root` token variables to match this style:

```css
:root {
  --duration-normal: 300ms;
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Use in App.tsx:**
```tsx
<AnimatedRoutes>
  <Route path="/" element={<PageTransition transition="scale"><Index /></PageTransition>} />
  <Route path="*" element={<PageTransition transition="fade"><NotFound /></PageTransition>} />
</AnimatedRoutes>
```

> **Available modes:** `fade` | `slide-up` | `slide-fade` | `scale`

> **Implementation Notes:**
> - Frosted glass effect during transition — blur in/out
> - Blur amount matches style's backdrop-filter: blur(15px)
> - Layer transitions to maintain glass depth effect

### Implementation Checklist

- ☐ Backdrop-filter blur 10-20px
- ☐ Translucent white 15-30% opacity
- ☐ Subtle border 1px light
- ☐ Vibrant background verified
- ☐ Text contrast 4.5:1 checked

---

## Style Guidelines

**Style:** Glassmorphism

**Keywords:** Frosted glass, transparent, blurred background, layered, vibrant background, light source, depth, multi-layer

**Best For:** Modern SaaS, financial dashboards, high-end corporate, lifestyle apps, modal overlays, navigation

**Key Effects:** Backdrop blur (10-20px), subtle border (1px solid rgba white 0.2), light reflection, Z-depth

### Page Pattern

**Pattern Name:** Enterprise Gateway

- **Conversion Strategy:**  logo carousel,  tab switching for industries, Path selection (I am a...). Mega menu navigation. Trust signals prominent.
- **CTA Placement:** Contact Sales (Primary) + Login (Secondary)
- **Section Order:** 1. Hero (Video/Mission), 2. Solutions by Industry, 3. Solutions by Role, 4. Client Logos, 5. Contact Sales

---

## Anti-Patterns (Do NOT Use)

- ❌ Excessive animation
- ❌ Dark mode by default

### Additional Forbidden Patterns

- ❌ **Emojis as icons** — Use SVG icons (Heroicons, Lucide, Simple Icons)
- ❌ **Missing cursor:pointer** — All clickable elements must have cursor:pointer
- ❌ **Layout-shifting hovers** — Avoid scale transforms that shift layout
- ❌ **Low contrast text** — Maintain 4.5:1 minimum contrast ratio
- ❌ **Instant state changes** — Always use transitions (150-300ms)
- ❌ **Invisible focus states** — Focus states must be visible for a11y

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] No emojis used as icons (use SVG instead)
- [ ] All icons from consistent icon set (Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] No content hidden behind fixed navbars
- [ ] No horizontal scroll on mobile
