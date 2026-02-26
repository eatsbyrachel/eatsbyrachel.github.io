# EatsbyRachel — Convert to Next.js

Build a Next.js app (App Router) for "EatsbyRachel," a mobile-first recipe blog for a social media content creator. Replicate the layout, styling, and features described below exactly. Use TypeScript, Tailwind CSS, and Next.js App Router with static generation (SSG) where possible.

---

## Brand & Design Tokens

```
Colors:
  Pink Light:   #fac7d7
  Pink Dark:    #cd7893
  Pink Hover:   #b8637f
  White:        #ffffff
  Off-White:    #fdf6f8
  Gray Light:   #f5f5f5
  Gray:         #e0e0e0
  Text Dark:    #2d2d2d
  Text Muted:   #6b6b6b

Fonts (Google Fonts):
  Headings: "Playfair Display", Georgia, serif (weights 400, 700)
  Body:     "Lato", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif (weights 300, 400, 700)

Base: 16px font size, 1.6 line-height

Breakpoints (mobile-first, min-width):
  sm: 480px
  md: 768px
  lg: 1024px
  xl: 1200px

Spacing scale:
  xs: 0.5rem, sm: 1rem, md: 1.5rem, lg: 2rem, xl: 3rem, xxl: 4rem

Content widths:
  narrow: 680px, medium: 960px, wide: 1200px

Border radius:
  sm: 4px, md: 8px, lg: 12px, pill: 50px

Shadows:
  sm: 0 1px 3px rgba(0,0,0,0.08)
  md: 0 4px 12px rgba(0,0,0,0.1)
  lg: 0 8px 24px rgba(0,0,0,0.12)
```

---

## Site Metadata

```
Title: EatsbyRachel
Description: "Delicious, easy-to-follow recipes by Rachel. From quick weeknight dinners to indulgent desserts, find your next favorite meal."
Author: Rachel (rachel@eatsbyrachel.com)
URL: https://eatsbyrachel.github.io
Logo: /images/logo.jpg (circular, used in header and links page)
Theme color: #cd7893
```

---

## Pages & Routes

### 1. Homepage — `/`

**Layout:**
- Hero section: centered text, gradient background (`linear-gradient(135deg, off-white 0%, rgba(pink-light, 0.4) 100%)`), rounded corners (12px). Contains:
  - `<h1>` "EatsbyRachel" (Playfair Display, 2.2rem mobile / 3rem desktop)
  - `<p>` site description (text-muted, max-width 500px, centered)
  - "Browse Recipes" button (pink-dark bg, white text, pill-shaped)
- "Latest Recipes" section below hero:
  - Header row: "Latest Recipes" `<h2>` on left, "View All →" link on right
  - Recipe grid: display up to 6 most recent recipes, sorted by date descending
  - Grid: 1 column on mobile, 2 columns at 480px+, 3 columns at 1024px+
  - Each item is a RecipeCard component (see below)

### 2. Recipe List — `/recipes`

**Layout:**
- Page header: centered title "Recipes" + subtitle "Browse all of my tried-and-true recipes"
- Category filter bar: horizontal row of pill-shaped buttons, scrollable on mobile (overflow-x auto, hidden scrollbar). "All" button is active by default. Buttons generated dynamically from all unique recipe categories. Active button: pink-dark bg + white text. Inactive: white bg + gray border, hover shows pink border.
- Recipe grid: same responsive grid as homepage, shows ALL recipes sorted by date descending
- Client-side filtering: clicking a category button shows/hides recipe cards based on their categories. Each recipe card has data-categories attribute. Filter checks if card's categories include the selected category.

### 3. Individual Recipe — `/recipes/[slug]`

**Layout (max-width 960px, centered):**
1. **Hero image**: full-width within container, max-height 500px (600px on desktop), object-fit cover, 12px border-radius
2. **Recipe header** (centered):
   - Category badge (uppercase, small, pink-dark text, letter-spacing 0.08em)
   - Title (Playfair Display, 2rem mobile / 2.8rem desktop)
   - Description (text-muted, max-width 600px)
3. **Meta bar** (centered, flex row, wrapped, bordered top and bottom):
   - Items: Prep time, Cook time, Total time, Servings, Difficulty
   - Each item: label (uppercase, tiny, muted) + value (pink-dark, bold, 1.1rem)
4. **"Jump to Recipe" button** (outline style, centered, links to #recipe-box)
5. **Narrative content** (optional): max-width 680px, 1.05rem font, 1.8 line-height. Markdown body content rendered here.
6. **Recipe box** (`#recipe-box`): max-width 680px, off-white background, 12px border-radius, 2px pink-light border, padded:
   - Recipe title (centered, pink-dark, 1.8rem)
   - Meta bar repeated inside the box
   - **Ingredients section**: h3 "Ingredients" with pink-light bottom border. Unordered list with custom bullets — pink circles (8px, pink-light fill with pink-dark 2px border) positioned left of each item. Items separated by subtle bottom borders.
   - **Instructions section**: h3 "Instructions" with pink-light bottom border. Ordered list with custom numbered circles — 28px pink-dark filled circles with white number text, positioned left of each step. Items separated by subtle bottom borders.
   - **Notes** (optional): highlighted box with rgba(pink-light, 0.3) background, 4px pink-dark left border, 8px border-radius.
7. **"More Recipes You'll Love"** section: h2 centered, followed by a recipe grid showing 3 random other recipes.

**SEO:** Each recipe page includes Schema.org JSON-LD (`@type: Recipe`) with: name, author, image, description, prepTime (ISO 8601), cookTime, totalTime, recipeYield, recipeCategory, recipeIngredient array, recipeInstructions array (HowToStep with position), optional nutrition.

**Print styles:** Hide header, footer, jump-to-recipe, more-recipes, and narrative sections. Adjust recipe box border and image height.

### 4. Contact — `/contact-me`

**Layout (max-width 960px):**
- Page header: centered title "Contact Me" + subtitle
- Contact form (max-width 600px, centered):
  - Name (text input, required)
  - Email (email input, required, name="_replyto")
  - Subject (select dropdown: General Question, Collaboration, Recipe Question, Other)
  - Message (textarea, 6 rows, required)
  - Hidden honeypot field (name="_gotcha", display:none)
  - Submit button: "Send Message" (pink-dark, pill-shaped)
  - Form action: `https://formspree.io/f/YOUR_FORM_ID` (POST method)
- Form inputs: 1px gray border, 8px radius, 0.75rem padding. Focus state: pink-dark border + 3px pink-dark shadow at 15% opacity.

### 5. Links — `/links`

**Layout (Linktree-style):**
- Full-viewport centered column layout, max-width 480px, min-height 80vh
- Profile section:
  - Circular avatar (100px, 50% border-radius, 3px pink-light border)
  - Site title "EatsbyRachel" (Playfair Display, 1.6rem)
  - Bio text (site description, text-muted)
- Links list: vertical stack of full-width pill-shaped buttons with 1rem gap:
  - Social links (from data): TikTok, Instagram, YouTube, Email Me
  - Each button: 2px gray border, pill-shaped, 0.9rem padding, flex centered with SVG icon + label
  - Hover: pink-dark border, pink-dark text, translateY(-2px), subtle shadow
  - Final button "Browse All Recipes": primary style (pink-dark bg, white text)
- Social links open in new tab with rel="noopener noreferrer"

### 6. 404 Page — `/not-found`

- Centered layout with 4rem padding
- Large "404" heading (Playfair Display, 5rem, pink-dark color)
- Message: "Oops! This page doesn't exist. Maybe the recipe was too good and disappeared."
- Two buttons: "Back to Home" (primary) + "Browse Recipes" (outline)

---

## Shared Components

### Header (sticky, z-index 100)
- White background, bottom border (1px rgba(pink-light, 0.5))
- Padding: 1rem mobile, 1.5rem desktop
- Left: logo image (40px circle, 48px on desktop) + "EatsbyRachel" text (Playfair Display, 1.3rem / 1.6rem)
- Right: Navigation links (Home, Recipes, Contact, Links)
- **Mobile**: hamburger button (3-line SVG icon, 24px). Nav is hidden by default, toggles open as a dropdown below header (white bg, shadow, full-width). Active state controlled by JS toggle.
- **Desktop (768px+)**: hamburger hidden, nav displayed as horizontal flex row with 1.5rem gap
- Active link: pink-dark text color + pink-light bg on mobile, just pink-dark text on desktop

### Footer
- Off-white background, 1px top border (rgba(pink-light, 0.5))
- Top margin: 4rem. Padding: 3rem vertical.
- Social icons row: circular 40px buttons (pink-light bg, pink-dark icon color). Hover: pink-dark bg, white icon, translateY(-2px). Icons for TikTok, Instagram, YouTube, Email.
- Copyright: "© 2026 EatsbyRachel. Made with love." (0.85rem, text-muted)

### RecipeCard
- White bg, 12px border-radius, shadow-sm
- Hover: translateY(-4px), shadow-md
- Image: aspect-ratio 4/3, object-fit cover, lazy loaded
- Body padding: 1rem horizontal, 1.5rem vertical
- Category badge: uppercase, 0.75rem, pink-dark, letter-spacing 0.05em
- Title: Playfair Display, 1.15rem, bold, line-height 1.3
- Meta: 0.8rem, text-muted, flex row with 1rem gap showing total time + difficulty
- Entire card is a link to the recipe detail page
- Has data-categories attribute for filtering (space-separated category names)

### Social Icons (inline SVGs)
- TikTok: filled solid path icon
- Instagram: outlined rect + circle + dot icon
- YouTube: filled play button in rounded rect
- Email: outlined envelope icon
- All use `currentColor` for fill/stroke so they inherit text color

---

## Recipe Data Model

Recipes are stored as markdown files. In Next.js, use a `/content/recipes/` directory with `.md` files parsed via gray-matter + remark/next-mdx-remote.

**Front matter schema:**
```yaml
title: string (required)
description: string (required, 1-2 sentences for SEO)
date: string (ISO date, required, for sorting)
image: string (path to image, optional)
image_alt: string (alt text, optional)
categories: string[] (e.g., ["dinner", "breakfast", "dessert", "drinks", "snack"])
tags: string[] (optional)
prep_time: number (minutes)
cook_time: number (minutes)
total_time: number (minutes)
servings: number
difficulty: "easy" | "medium" | "hard"
ingredients: string[] (array of ingredient strings)
instructions: string[] (array of instruction step strings)
notes: string (optional tips/storage info)
```

**Markdown body:** Optional narrative content (story, tips) rendered above the structured recipe box.

### Example recipes to include:

**1. Creamy Tuscan Chicken** (dinner, easy, 30 min, 4 servings)
- Pan-seared chicken in sun-dried tomato and spinach cream sauce
- 11 ingredients, 8 instruction steps

**2. Chocolate Lava Cake** (dessert, medium, 29 min, 4 servings)
- Individual chocolate cakes with molten center
- 10 ingredients, 9 instruction steps

**3. The Perfect Avocado Toast** (breakfast, easy, 13 min, 2 servings)
- Avocado toast with jammy soft-boiled egg and everything seasoning
- 8 ingredients, 8 instruction steps

**4. Creamy Matcha Latte** (drinks, easy, 5 min, 1 serving)
- Homemade matcha latte with frothed milk
- 4 ingredients, 6 instruction steps

---

## Social Links Data

```
TikTok:    https://tiktok.com/@eatsbyrachel
Instagram: https://instagram.com/eatsbyrachel
YouTube:   https://youtube.com/@eatsbyrachel
Email:     mailto:rachel@eatsbyrachel.com
```

---

## Navigation

```
Home      → /
Recipes   → /recipes
Contact   → /contact-me
Links     → /links
```

---

## SEO Requirements

- Every page: proper `<title>`, `<meta description>`, Open Graph tags (og:title, og:description, og:image, og:url), Twitter card meta
- Recipe pages: Schema.org JSON-LD (`@type: Recipe`) in `<head>`
- XML sitemap at `/sitemap.xml`
- RSS feed at `/feed.xml`
- Canonical URLs on all pages
- `<meta name="theme-color" content="#cd7893">`

---

## CSS / Styling Rules

- **Mobile-first**: all base styles target mobile, use min-width media queries to enhance for larger screens
- **Headings**: responsive sizing (h1: 2rem → 2.5rem at md, h2: 1.6rem → 2rem, h3: 1.3rem → 1.5rem)
- **Links**: pink-dark color, no underline, 0.2s color transition, hover to pink-hover
- **Buttons**: two variants — primary (pink-dark bg/white text, hover to pink-hover) and outline (transparent bg/pink-dark border, hover fills pink-dark)
- **Images**: max-width 100%, height auto, display block
- **Main content**: min-height 60vh, padding 2rem top/bottom (3rem on desktop)
- **Recipe grid gap**: 1.5rem
- **All transitions**: 0.2s ease
- **Font smoothing**: -webkit-font-smoothing: antialiased, -moz-osx-font-smoothing: grayscale

---

## Key Behaviors

1. **Mobile hamburger nav**: clicking the hamburger toggles the mobile nav dropdown (hidden by default). On desktop 768px+, the hamburger is hidden and nav is always visible as a horizontal row.
2. **Category filtering on /recipes**: client-side JavaScript. Clicking a filter pill shows only matching recipe cards (by checking data-categories). Clicking "All" shows all cards.
3. **Jump to Recipe**: smooth scroll anchor link to `#recipe-box` on recipe detail pages.
4. **Lazy loading**: recipe card images use `loading="lazy"`.
5. **Print styles for recipe pages**: hide header, footer, narrative, jump-to-recipe, more-recipes. Show only the recipe box with minimal styling.

---

## File Structure Suggestion for Next.js

```
app/
  layout.tsx          (root layout with header + footer)
  page.tsx            (homepage)
  recipes/
    page.tsx          (recipe list with filtering)
    [slug]/
      page.tsx        (recipe detail with SSG)
  contact-me/
    page.tsx          (contact form)
  links/
    page.tsx          (linktree page)
  not-found.tsx       (404 page)

components/
  Header.tsx
  Footer.tsx
  RecipeCard.tsx
  RecipeMeta.tsx
  RecipeSchema.tsx
  CategoryFilter.tsx
  SocialIcons.tsx

content/
  recipes/            (markdown files)

lib/
  recipes.ts          (markdown parsing, sorting, filtering)

public/
  images/
    logo.jpg
    recipe-placeholder.jpg
```
