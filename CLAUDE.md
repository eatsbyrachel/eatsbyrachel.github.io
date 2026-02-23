# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EatsbyRachel is a Jekyll-based recipe blog for a social media content creator. It features a recipe collection, contact form, and link-in-bio page, optimized for mobile and SEO.

## Development Commands

### Install Dependencies
```bash
bundle install
```

### Build and Serve
```bash
bundle exec jekyll serve
```
Starts a local development server at http://localhost:4000 with auto-regeneration.

**Important**: Changes to `_config.yml` require a server restart.

## Site Architecture

### Configuration
- `_config.yml`: Site metadata, recipe collection config, default front matter, plugins
- `Gemfile`: Jekyll 4.4.1, Minima theme, jekyll-feed, jekyll-seo-tag, jekyll-sitemap

### Pages
- `/` — Homepage (hero + latest recipes grid) — `index.html` using `home` layout
- `/recipes/` — Recipe list with category filtering — `pages/recipes.html` using `recipes` layout
- `/recipes/:slug/` — Individual recipe detail — `_recipes/*.md` using `recipe` layout
- `/contact-me/` — Contact form (Formspree) — `pages/contact.html` using `page` layout
- `/links/` — Linktree-style social links — `pages/links.html` using `links` layout

### Collections
- `_recipes/`: Recipe markdown files with structured front matter (ingredients, instructions as arrays). Each file generates a page at `/recipes/:slug/`.

### Layouts (`_layouts/`)
- `default.html` — Base HTML shell with head, header, footer
- `home.html` — Homepage with hero and recipe grid
- `recipe.html` — Recipe detail with Schema.org JSON-LD, meta bar, ingredients, instructions
- `recipes.html` — Recipe archive with category filter
- `page.html` — Generic page
- `links.html` — Linktree-style layout

### Includes (`_includes/`)
- `head.html` — Meta tags, Google Fonts, SEO tag, feed meta
- `header.html` — Site logo, mobile hamburger nav
- `footer.html` — Social icons, copyright
- `recipe-card.html` — Reusable recipe card component
- `recipe-schema.html` — Schema.org/Recipe JSON-LD
- `recipe-meta.html` — Prep/cook/servings bar
- `social-icons.html` — SVG icons for TikTok, Instagram, YouTube, email
- `category-filter.html` — Category filter pills

### Styles (`_sass/`)
Overrides Minima theme entirely with mobile-first SCSS:
- `_sass/minima.scss` — Entry point importing all partials
- `_sass/eatsbyrachel/_variables.scss` — Brand colors (#fac7d7, #cd7893), fonts, breakpoints
- Other partials: `_base`, `_layout`, `_components`, `_recipe`, `_home`, `_links`, `_utilities`

### Data (`_data/`)
- `navigation.yml` — Header nav menu items
- `social.yml` — Social media links (TikTok, Instagram, YouTube)

### Adding a New Recipe
1. Copy `_templates/recipe-template.md` to `_recipes/your-recipe-slug.md`
2. Fill in the front matter (title, description, ingredients array, instructions array, etc.)
3. Add recipe images to `assets/images/recipes/`
4. Write optional narrative content in the markdown body

### Brand Colors
- Light pink: `#fac7d7`
- Dark pink: `#cd7893`
- Fonts: Playfair Display (headings), Lato (body)

### Contact Form
Uses Formspree. Replace `YOUR_FORM_ID` in `pages/contact.html` with actual Formspree endpoint after signing up at formspree.io.
