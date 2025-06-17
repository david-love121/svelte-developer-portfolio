# David Love - Developer Portfolio

A modern, minimalist developer portfolio built with SvelteKit featuring a terminal-style typing animation, dark mode support, responsive design, and clean architecture.

## 🌐 Live Demo

Visit the live portfolio at: [https://david-love121.github.io/svelte-developer-portfolio/](https://david-love121.github.io/svelte-developer-portfolio/)

## ✨ Features

- **Terminal Animation**: Eye-catching typewriter effect that simulates terminal typing with blinking cursor
- **Dark Mode**: Automatic system preference detection with manual toggle and persistent storage
- **Connect Dropdown**: Animated dropdown menu with social media links and smooth slide transitions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Typography**: Uses Fira Code for terminal sections and Inter for body text
- **Smooth Animations**: CSS animations with staggered delays and polished transitions
- **Mobile Navigation**: Collapsible menu with responsive design
- **Social Integration**: Centralized social links across navigation, footer, and mobile menu
- **Clean Architecture**: DRY principles with reusable components and utility classes
- **Optimized Performance**: Built with SvelteKit for optimal loading and runtime performance

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) 5.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4.0 (bundled with PostCSS)
- **Typography**: Google Fonts (Inter, Fira Code)
- **Deployment**: GitHub Pages with GitHub Actions
- **Language**: TypeScript
- **Build Tools**: Vite, PostCSS, Autoprefixer

## 🎯 Key Components

### Terminal Animation
The homepage features a unique terminal-style animation that:
- Shows a green `>` prompt (adaptive color for dark mode)
- Displays a blinking cursor with realistic timing
- Types out the name character by character with typewriter effect
- Transitions to typing the subtitle smoothly
- Maintains consistent layout without text jumping

### Dark Mode System
- **Auto-detection**: Respects system `prefers-color-scheme` preference
- **Manual Toggle**: Sun/moon icon button for user preference
- **Persistent Storage**: Saves user choice in localStorage
- **Smooth Transitions**: 300ms duration for all color changes
- **Comprehensive Coverage**: All components styled for both themes

### Connect Dropdown
Interactive navigation dropdown featuring:
- Smooth slide-down opening animation (200ms)
- Elegant fade-up closing animation (150ms)
- Consolidated social media links with icons and labels
- Click-outside-to-close functionality
- Consistent styling across desktop and mobile
- Centralized data structure for maintainability

### Code Architecture
- **DRY Principles**: Single `socialLinks` array drives all social media references
- **Utility Classes**: Custom CSS classes for adaptive theming (`text-adaptive`, `bg-adaptive`, etc.)
- **Component Consolidation**: Reusable patterns for social links and navigation
- **Consistent Styling**: Unified approach to dark mode and responsive design

### Responsive Navigation
- Desktop: Horizontal navigation with animated dropdown
- Mobile: Hamburger menu with smooth transitions
- Clean "DL." branding logo

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. The deployment process:

1. **Static Generation**: Uses `@sveltejs/adapter-static` to generate static files
2. **Base Path Configuration**: Properly configured for GitHub Pages subdirectory hosting
3. **Automated Deployment**: GitHub Actions workflow triggers on every push to main branch
4. **Optimized Build**: Includes prerendering and asset optimization

### Deployment Configuration

The project includes:
- Custom GitHub Actions workflow (`.github/workflows/deploy.yml`)
- Static adapter configuration in `svelte.config.js`
- Proper base path handling for subdirectory deployment
- `.nojekyll` file to bypass Jekyll processing

## 🏗️ Development

### Prerequisites
- Node.js 18 or higher
- npm

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/david-love121/svelte-developer-portfolio.git
   cd svelte-developer-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔧 Maintenance Guide

### Adding New Social Links

1. Add a new entry to the `socialLinks` array in `src/routes/+page.svelte`:
   ```javascript
   {
       name: 'Platform Name',
       url: 'https://platform.com/username',
       icon: 'SVG_PATH_DATA_HERE'
   }
   ```

2. The link will automatically appear in:
   - Desktop Connect dropdown
   - Mobile Connect dropdown  
   - Footer social icons

### Customizing Colors

- Modify color values in `tailwind.config.js`
- Extend utility classes in `src/app.css`
- Update CSS custom properties for advanced theming

### Updating Content

- Hero text: Modify `fullName` and `fullSubtitle` variables
- About section: Update text in the About section markup
- Animation timing: Adjust `sleep()` values in animation functions

## 📁 Project Structure

```
src/
  routes/
    +layout.ts          # Prerender configuration
    +page.svelte        # Main portfolio page with all components
  app.html              # HTML template
  app.d.ts              # TypeScript declarations
  app.css               # Global styles, Tailwind imports, and utility classes
  lib/                  # Shared components (ready for future expansion)
static/
  .nojekyll             # GitHub Pages configuration
  favicon.png           # Site favicon
.github/
  workflows/
    deploy.yml          # GitHub Actions deployment workflow
tailwind.config.js      # Tailwind CSS configuration
postcss.config.js       # PostCSS configuration
fix-paths.js            # Asset path correction for GitHub Pages
package.json            # Dependencies and build scripts
```

## 🎨 Customization

The portfolio is designed to be easily customizable:

- **Content**: Update text content and social links in the `socialLinks` array in `+page.svelte`
- **Styling**: Modify Tailwind classes or extend the utility classes in `app.css`
- **Animation Timing**: Adjust timing variables in the terminal animation functions
- **Social Links**: Add or modify entries in the centralized `socialLinks` configuration
- **Colors**: Customize the color scheme using Tailwind classes and CSS custom properties
- **Dark Mode**: Extend the adaptive utility classes for new components

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **GitHub**: [david-love121](https://github.com/david-love121)
- **Instagram**: [@david.love121](https://www.instagram.com/david.love121/)
- **Substack**: [@davidlove677899](https://substack.com/@davidlove677899)

---

Built with ❤️ using SvelteKit and Tailwind CSS, deployed on GitHub Pages.

*This portfolio was developed with assistance from Claude Sonnet 3.5, demonstrating modern web development practices and clean, maintainable code architecture.*

