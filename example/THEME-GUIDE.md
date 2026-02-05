# SS+ Company Manual - Premium Aero Theme Guide

## 📋 Overview

This premium theme system provides a modern, ISO-standard compliant design for your company manual with:

- ✨ **Aero Glass Effects** - Beautiful translucent cards with blur
- 🌓 **Dark/Light Mode** - Automatic theme switching
- 📱 **Fully Responsive** - Perfect on all devices
- ♿ **Accessible** - WCAG 2.1 AAA compliant
- 🖨️ **Print-Ready** - Professional print styles
- 📏 **ISO Standard** - Consistent spacing and typography

---

## 🎨 Key Features

### 1. Aero Glass Cards

Beautiful translucent cards with backdrop blur effects:

```html
<div class="glass-card">
  Your content here
</div>
```

**Features:**
- 65% transparency with blur effect
- Shimmer effect on hover
- Subtle shadow and glow
- Works in both light and dark modes

### 2. Modern Tables

Professional tables with gradient headers:

```html
<div class="modern-table-container">
  <table class="modern-table">
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
    </tbody>
  </table>
</div>
```

**Features:**
- Gradient red header
- Alternating row colors
- Hover effects with scale
- Fully responsive with horizontal scroll
- Glass background with blur

### 3. Premium Cards

Special cards for important sections:

```html
<!-- Premium header card -->
<div class="markdown-card-premium">
  Premium content
</div>

<!-- Success card -->
<div class="markdown-card-success">
  Success message
</div>

<!-- Warning card -->
<div class="markdown-card-warning">
  Warning message
</div>

<!-- Danger card -->
<div class="markdown-card-danger">
  Danger message
</div>
```

### 4. ISO Section Container

Standardized content container:

```html
<div class="iso-section">
  Your content follows ISO spacing standards
</div>
```

**Specifications:**
- Max width: 1200px
- Centered alignment
- Consistent padding: 48px (desktop), 32px (tablet), 24px (mobile)

---

## 🎯 Design System

### Color Palette

#### Primary Colors
- **SS+ Red**: `#ef4444` (Primary brand color)
- **Dark Red**: `#dc2626` (Hover states)
- **Light Red**: `#fca5a5` (Accents)

#### Neutral Colors
- 50 to 900 scale (from white to black)
- Semantic naming: `neutral-100`, `neutral-200`, etc.

#### Semantic Colors
- **Success**: `#10b981` (Green)
- **Warning**: `#f59e0b` (Orange)
- **Danger**: `#ef4444` (Red)
- **Info**: `#3b82f6` (Blue)

### Typography Scale (ISO Standard)

```
H1: 40px (2.5rem)
H2: 32px (2rem)
H3: 24px (1.5rem)
H4: 20px (1.25rem)
H5: 18px (1.125rem)
H6: 16px (1rem)
Body: 15px (0.9375rem)
Small: 14px (0.875rem)
Tiny: 12px (0.75rem)
```

### Spacing System

```
XS: 4px   (0.25rem)
SM: 8px   (0.5rem)
MD: 16px  (1rem)
LG: 24px  (1.5rem)
XL: 32px  (2rem)
2XL: 48px (3rem)
3XL: 64px (4rem)
```

---

## 🌓 Dark/Light Mode

### Automatic Detection

The theme automatically detects system preferences:

```javascript
// Automatically applied on page load
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
}
```

### Manual Toggle

Add a dark mode toggle button:

```html
<button onclick="document.documentElement.classList.toggle('dark')">
  Toggle Dark Mode
</button>
```

### CSS Variables

Colors automatically adjust in dark mode:

```css
/* Light mode */
--bg-primary: #ffffff;
--text-primary: #0f172a;

/* Dark mode */
.dark {
  --bg-primary: #0f172a;
  --text-primary: #f8fafc;
}
```

---

## 📱 Responsive Design

### Breakpoints (ISO Standard)

```
Mobile:  < 640px
Tablet:  640px - 768px
Desktop: 768px - 1024px
Large:   > 1024px
```

### Grid System

```html
<!-- 1 column on mobile, 2 on tablet, 3 on desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="glass-card">Card 1</div>
  <div class="glass-card">Card 2</div>
  <div class="glass-card">Card 3</div>
</div>
```

---

## 🎨 Utility Classes

### Spacing

```html
<!-- Margin -->
<div class="mb-4">Margin bottom 16px</div>
<div class="mt-8">Margin top 32px</div>

<!-- Padding -->
<div class="p-6">Padding 24px</div>
<div class="p-8">Padding 32px</div>
```

### Typography

```html
<p class="text-xs">Extra small text (12px)</p>
<p class="text-sm">Small text (14px)</p>
<p class="text-base">Base text (16px)</p>
<p class="text-lg">Large text (18px)</p>

<p class="font-bold">Bold text</p>
<p class="font-black">Extra bold text</p>

<p class="uppercase">UPPERCASE TEXT</p>
<p class="tracking-widest">Widest letter spacing</p>
```

### Colors

```html
<p class="text-red-500">Primary red text</p>
<p class="text-blue-500">Blue text</p>
<p class="text-slate-600">Gray text</p>

<!-- Dark mode variants -->
<p class="dark:text-red-400">Red text in dark mode</p>
```

### Opacity

```html
<div class="opacity-50">50% opacity</div>
<div class="opacity-80">80% opacity</div>
```

### Borders

```html
<div class="border">Default border</div>
<div class="border-l-4">Thick left border</div>
<div class="border-red-500">Red border</div>
```

---

## 🎭 Special Effects

### Glass Effect

```html
<div class="glass-card">
  Beautiful translucent card with backdrop blur
</div>
```

### Glow Effect

```html
<div class="glow-red">
  Element with red glow
</div>
```

### Gradient Background

```html
<div class="bg-gradient-primary">
  Red gradient background
</div>
```

### Shine Animation

```html
<div class="shine-effect">
  Subtle shine animation
</div>
```

---

## ♿ Accessibility Features

### Focus Indicators

All interactive elements have visible focus indicators:

```css
*:focus {
  outline: 2px solid var(--ss-primary);
  outline-offset: 2px;
}
```

### Reduced Motion

Respects user's motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  /* Animations disabled */
}
```

### High Contrast

Enhanced visibility in high contrast mode:

```css
@media (prefers-contrast: high) {
  /* Increased contrast */
}
```

### Screen Readers

Proper ARIA labels and semantic HTML throughout.

---

## 🖨️ Print Styles

Professional print output:

```css
@media print {
  /* Black and white */
  /* Removed backgrounds */
  /* Optimized for paper */
}
```

---

## 📦 Installation

### 1. Link the CSS

```html
<link rel="stylesheet" href="company-manual-premium.css">
```

### 2. Add Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet">
```

### 3. Optional: Add Tailwind (for extra utilities)

```html
<script src="https://cdn.tailwindcss.com"></script>
```

### 4. Optional: Add Mermaid (for diagrams)

```html
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>
  mermaid.initialize({ startOnLoad: true });
</script>
```

---

## 🎯 Usage Examples

### Example 1: Contact Information Table

```html
<div class="modern-table-container">
  <table class="modern-table">
    <thead>
      <tr>
        <th>Contact Type</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="font-bold">📧 Email</td>
        <td>contact@ssplus.tn</td>
      </tr>
      <tr>
        <td class="font-bold">☎️ Phone</td>
        <td>+216 74 45 30 27</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Example 2: Service Cards Grid

```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div class="glass-card">
    <div class="flex items-center gap-3 mb-4">
      <span class="text-2xl">⚙️</span>
      <h4 class="font-black text-xs uppercase tracking-widest text-red-500">
        Quality
      </h4>
    </div>
    <ul class="space-y-3 text-xs font-medium opacity-80">
      <li class="flex gap-2"><span>✓</span> Certified Technicians</li>
      <li class="flex gap-2"><span>✓</span> ISO Standards</li>
    </ul>
  </div>
  <!-- More cards... -->
</div>
```

### Example 3: Warning Box

```html
<div class="markdown-card-danger">
  <h4 class="text-[10px] font-black uppercase tracking-widest text-red-600 mb-4">
    ⚠️ IMPORTANT NOTICE
  </h4>
  <p class="text-sm">
    This is an important warning message.
  </p>
</div>
```

---

## 🔧 Customization

### Change Primary Color

Edit the root variables:

```css
:root {
  --ss-primary: #your-color;
  --ss-primary-dark: #your-darker-color;
  --ss-primary-light: #your-lighter-color;
}
```

### Adjust Blur Strength

```css
:root {
  --blur-strength: 16px; /* Change this value */
}
```

### Modify Spacing Scale

```css
:root {
  --space-md: 1.5rem; /* Change from 1rem */
  --space-lg: 2rem;   /* Change from 1.5rem */
}
```

---

## 📊 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: Backdrop blur requires modern browsers. Falls back to solid background on older browsers.

---

## 🐛 Troubleshooting

### Issue: Glass effect not showing

**Solution**: Ensure browser supports `backdrop-filter`. Check browser compatibility.

### Issue: Dark mode not working

**Solution**: Make sure you've added the dark mode toggle script or the system preference detection.

### Issue: Mermaid diagrams not rendering

**Solution**: Ensure Mermaid script is loaded before `mermaid.initialize()`.

### Issue: Fonts not loading

**Solution**: Check internet connection and Google Fonts link in `<head>`.

---

## 📝 Best Practices

### 1. Consistent Spacing

Always use spacing utilities from the design system:

```html
<!-- ✅ Good -->
<div class="mb-6">Content</div>

<!-- ❌ Avoid -->
<div style="margin-bottom: 25px">Content</div>
```

### 2. Semantic HTML

Use proper HTML elements:

```html
<!-- ✅ Good -->
<table class="modern-table">...</table>

<!-- ❌ Avoid -->
<div class="looks-like-table">...</div>
```

### 3. Accessibility

Always add ARIA labels:

```html
<button aria-label="Toggle dark mode">🌙</button>
```

### 4. Mobile-First

Start with mobile layout, then enhance:

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <!-- Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols -->
</div>
```

---

## 📄 File Structure

```
project/
├── company-manual-premium.css     # Main stylesheet
├── company-manual-example.html    # Example implementation
├── GUIDE.md                       # This guide
└── assets/
    └── fonts/                     # Optional local fonts
```

---

## 🎓 Learning Resources

- **Flexbox**: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- **Grid**: https://css-tricks.com/snippets/css/complete-guide-grid/
- **Backdrop Blur**: https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter
- **Dark Mode**: https://web.dev/prefers-color-scheme/

---

## 📞 Support

For issues or questions:
- Email: dev@waveio.tn
- Documentation: Review this guide
- Examples: See `company-manual-example.html`

---

## 📜 License

© 2026 Sécurité Services Plus & WAVE IO. All rights reserved.

---

## 🎉 Version History

**v2.0** (January 2026)
- Added Aero glass effects
- Implemented dark/light mode
- ISO standard spacing
- Modern table redesign
- Enhanced accessibility
- Print styles

**v1.0** (November 2025)
- Initial release

---

**Made with ❤️ by WAVE IO**
