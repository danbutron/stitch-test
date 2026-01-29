# React Conversion Plan

This document outlines the plan for converting the existing Astro/Preact components to React components.

---

## 📋 Project Overview

**Current Stack:**
- Astro 5.x (Static Site Generator)
- Preact (for interactive components)
- Tailwind CSS 3.x
- TypeScript

**Target Stack:**
- React 18.x (or Next.js/Vite + React)
- Tailwind CSS 3.x
- TypeScript

---

## 📁 Current File Structure

```
src/
├── assets/
│   ├── astro.svg
│   └── background.svg
├── components/
│   ├── Header.astro      → Header.tsx
│   ├── Welcome.astro     → Welcome.tsx (may be removed/replaced)
│   ├── Footer.astro      → Footer.tsx
│   ├── Hero.astro        → Hero.tsx
│   ├── Inventory.astro   → Inventory.tsx
│   ├── Lore.astro        → Lore.tsx
│   └── Marquee.jsx       → Marquee.tsx
├── layouts/
│   └── Layout.astro      → Layout.tsx (or App.tsx)
├── pages/
│   └── index.astro       → App.tsx / pages/index.tsx
└── styles/
    └── global.css        → Keep as is (Tailwind)
```

---

## 🔄 Component Conversion Details

### 1. Header.astro → Header.tsx

| Aspect | Details |
|--------|---------|
| **Complexity** | Low |
| **Props** | None |
| **State** | None |
| **Dependencies** | Material Symbols (Google Fonts) |

**Conversion Notes:**
- Pure presentational component
- Convert `class` to `className`
- Convert `data-alt` attributes to `alt` or keep as data attributes
- Inline styles using `style={{ backgroundImage: '...' }}`

**Code Structure:**
```tsx
const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 ...">
      {/* Navigation content */}
    </header>
  );
};
```

---

### 2. Hero.astro → Hero.tsx

| Aspect | Details |
|--------|---------|
| **Complexity** | Low |
| **Props** | None |
| **State** | None |
| **Dependencies** | None |

**Conversion Notes:**
- Pure presentational component
- Background image via inline style
- Button click handlers can be added later

**Code Structure:**
```tsx
const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] ...">
      {/* Hero content */}
    </section>
  );
};
```

---

### 3. Inventory.astro → Inventory.tsx

| Aspect | Details |
|--------|---------|
| **Complexity** | Medium |
| **Props** | None (could accept items array) |
| **State** | Cart state (future) |
| **Dependencies** | None |

**Conversion Notes:**
- Contains 3 product cards - consider extracting `ProductCard.tsx`
- "Add to Cart" buttons need click handlers
- SVG icon for Cyber-Shake needs proper React handling

**Recommended Refactoring:**
```tsx
// ProductCard.tsx
interface ProductCardProps {
  name: string;
  price: string;
  description: string;
  imageUrl?: string;
  accentColor: 'primary' | 'neon-pink';
  svgIcon?: React.ReactNode;
}

// Inventory.tsx
const Inventory: React.FC = () => {
  const products = [...]; // Product data
  return (
    <section>
      {products.map(product => <ProductCard key={product.id} {...product} />)}
    </section>
  );
};
```

---

### 4. Lore.astro → Lore.tsx

| Aspect | Details |
|--------|---------|
| **Complexity** | Low |
| **Props** | None |
| **State** | None |
| **Dependencies** | Material Symbols (arrow icon) |

**Conversion Notes:**
- Pure presentational component
- Background image via inline style
- Button with icon needs proper React handling

---

### 5. Footer.astro → Footer.tsx

| Aspect | Details |
|--------|---------|
| **Complexity** | Low |
| **Props** | None |
| **State** | None |
| **Dependencies** | Marquee component |

**Conversion Notes:**
- Imports and uses Marquee component
- Simple footer links

---

### 6. Marquee.jsx → Marquee.tsx

| Aspect | Details |
|--------|---------|
| **Complexity** | Medium |
| **Props** | None |
| **State** | Uses useRef, useEffect |
| **Dependencies** | Currently uses Preact |

**Conversion Notes:**
- Already uses hooks (useRef, useEffect)
- Change `import { h } from 'preact'` to React imports
- Change `import { useEffect, useRef } from 'preact/hooks'` to `import { useEffect, useRef } from 'react'`
- Change `class` to `className`
- Add TypeScript types

**Code Structure:**
```tsx
import { useEffect, useRef } from 'react';

const Marquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const content = marquee.innerHTML;
      marquee.innerHTML += content;
    }
  }, []);

  return (
    <div ref={marqueeRef} className="flex animate-marquee ...">
      {/* Marquee content */}
    </div>
  );
};
```

---

### 7. Layout.astro → Layout.tsx

| Aspect | Details |
|--------|---------|
| **Complexity** | Medium |
| **Props** | `title: string` |
| **State** | None |
| **Dependencies** | All other components |

**Conversion Notes:**
- Contains `<head>` elements - handle with React Helmet or framework-specific solution
- Global styles need to be imported
- Scanlines effect and global CSS animations

**Code Structure:**
```tsx
interface LayoutProps {
  title: string;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  // Use React Helmet for head management
  return (
    <div className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Layout content */}
    </div>
  );
};
```

---

### 8. Welcome.astro → Welcome.tsx (Optional)

| Aspect | Details |
|--------|---------|
| **Complexity** | Low |
| **Props** | None |
| **State** | None |
| **Dependencies** | SVG assets |

**Conversion Notes:**
- This appears to be the default Astro welcome component
- May not be needed in the final React app
- If kept, convert scoped styles to CSS modules or styled-components

---

## 🎨 Styling Migration

### Tailwind CSS Configuration

The `tailwind.config.mjs` can be kept mostly as-is:

```js
// tailwind.config.js (rename from .mjs)
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#0d7ff2",
        "neon-pink": "#ff007a",
        "background-light": "#f5f7f8",
        "background-dark": "#050505",
      },
      fontFamily: {
        "display": ["Space Grotesk", "sans-serif"]
      },
      // ... rest of config
    },
  },
  plugins: [],
};
```

### Global Styles

Move global styles from `Layout.astro` to a separate CSS file:

```css
/* src/styles/global.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

.cyber-border {
  clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
}

.glitch-text {
  text-shadow: 2px 0 #ff007a, -2px 0 #0d7ff2;
}

.scanlines {
  background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
              linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
  background-size: 100% 4px, 3px 100%;
  pointer-events: none;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 20s linear infinite;
  display: flex;
  width: fit-content;
}

.neon-shake-glow {
  filter: drop-shadow(0 0 4px #0d7ff2) drop-shadow(0 0 12px #0d7ff2);
}
```

---

## 📦 New Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-helmet-async": "^2.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

---

## ✅ Conversion Checklist

### Phase 1: Project Setup
- [ ] Initialize new React project (Vite + React or Next.js)
- [ ] Configure Tailwind CSS
- [ ] Set up TypeScript
- [ ] Copy assets folder
- [ ] Configure global styles

### Phase 2: Component Conversion
- [ ] Convert `Marquee.jsx` → `Marquee.tsx`
- [ ] Convert `Header.astro` → `Header.tsx`
- [ ] Convert `Hero.astro` → `Hero.tsx`
- [ ] Convert `Inventory.astro` → `Inventory.tsx`
  - [ ] Extract `ProductCard.tsx` (optional)
- [ ] Convert `Lore.astro` → `Lore.tsx`
- [ ] Convert `Footer.astro` → `Footer.tsx`
- [ ] Convert `Layout.astro` → `Layout.tsx`

### Phase 3: Integration
- [ ] Create main `App.tsx`
- [ ] Set up routing (if needed)
- [ ] Configure head/meta tags
- [ ] Import Google Fonts
- [ ] Test all components

### Phase 4: Enhancements (Optional)
- [ ] Add state management (Context/Redux/Zustand)
- [ ] Implement cart functionality
- [ ] Add page transitions
- [ ] Optimize images (lazy loading)
- [ ] Add accessibility improvements

---

## 🔧 Key Syntax Changes Reference

| Astro/Preact | React/TypeScript |
|--------------|------------------|
| `class="..."` | `className="..."` |
| `{Astro.props}` | `props` |
| `<style is:global>` | Import CSS file |
| `client:load` | Not needed (always hydrated) |
| `import { h } from 'preact'` | `import React from 'react'` |
| `preact/hooks` | `react` |
| `.astro` files | `.tsx` files |

---

## 📝 Notes

1. **Images**: Background images use external URLs (Google CDN). Consider downloading and hosting locally for production.

2. **Icons**: Material Symbols are loaded via Google Fonts CDN. Consider using a React icon library like `react-icons` or `@mui/icons-material`.

3. **Animations**: The marquee animation uses CSS keyframes which will work the same in React.

4. **Accessibility**: Add proper `alt` attributes to images and ensure keyboard navigation works.

5. **SEO**: If SEO is important, consider using Next.js for server-side rendering.

---

## 🚀 Recommended Framework Options

### Option A: Vite + React
- Fastest development experience
- Simple setup
- Good for SPAs

### Option B: Next.js
- Built-in routing
- SSR/SSG support
- Better SEO
- Image optimization

### Option C: Create React App (CRA)
- Most familiar setup
- Being deprecated in favor of Vite
- Not recommended for new projects

**Recommendation**: Use **Vite + React** for a simple SPA or **Next.js** if SEO and routing are important.
