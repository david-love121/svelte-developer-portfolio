# David Love - Developer Portfolio

A modern, minimalist developer portfolio built with SvelteKit featuring a terminal-style typing animation, dark mode support, responsive design, and clean architecture following modern SvelteKit best practices.

## 🌐 Live Demo

Visit the live portfolio at: [https://david-love121.github.io/svelte-developer-portfolio/](https://david-love121.github.io/svelte-developer-portfolio/)

## ✨ Features

- **Terminal Animation**: Eye-catching typewriter effect with green prompt that types "David Love" and subtitle
- **Dark Mode**: Automatic system preference detection with manual toggle and persistent storage
- **SvelteKit Best Practices**: Modern routing, data loading, TypeScript, and component architecture
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean Typography**: Monospace terminal font with adaptive colors for dark/light modes
- **Smooth Animations**: CSS animations with proper timing and accessibility considerations
- **Static Site Generation**: Optimized for performance with prerendering enabled
- **Accessibility**: Full keyboard navigation, screen reader support, and semantic HTML
- **Social Integration**: Centralized social links with consistent styling
- **Modern Architecture**: Component-based design with separation of concerns

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) 5.0+ with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4.0 with custom utilities
- **Deployment**: GitHub Pages with GitHub Actions
- **Build Tools**: Vite, PostCSS, Autoprefixer
- **Code Quality**: svelte-check, TypeScript strict mode, ESLint

## 🎯 Key Components & Architecture

### SvelteKit Best Practices Implementation
- **File-based Routing**: Clean route structure with `+page.svelte` and `+page.ts` files
- **Data Loading**: Proper load functions in `+page.ts` files for extensibility
- **Static Site Generation**: Prerendering enabled via `+layout.ts` configuration
- **Component Architecture**: Modular, reusable components with proper prop handling
- **TypeScript Integration**: Full type safety throughout the application
- **Store Management**: Centralized state management with Svelte stores

### Terminal Animation System
The homepage features a sophisticated terminal animation that:
- Displays a realistic typing sequence with green `>` prompt
- Types "David Love" character by character with blinking cursor
- Shows subtitle "Adaptive. Reasonable. Creative." aligned to the right
- Includes proper timing, cursor management, and fallback handling
- Triggers the about section to appear after completion
- Handles edge cases and prevents duplicate animation runs

### Modern Component Structure
- **Layout Component**: Clean wrapper with navigation and footer
- **Navigation Component**: Store-based mobile menu and dropdown management
- **Connect Dropdown**: Accessible dropdown with keyboard navigation
- **Centralized Constants**: Social links and project data in dedicated files
- **Utility Functions**: Animation helpers with proper TypeScript types
### Dark Mode & Accessibility
- **System Integration**: Respects `prefers-color-scheme` with manual override
- **Persistent Storage**: User preference saved in localStorage
- **Smooth Transitions**: Consistent 300ms transitions across all elements
- **Accessibility**: Screen reader support, keyboard navigation, focus management
- **ARIA Labels**: Proper semantic markup and descriptive labels

### Connect Dropdown & Navigation
- Smooth animations with proper timing and easing
- Click-outside-to-close functionality with event handling
- Keyboard navigation support for accessibility
- Mobile-responsive design with hamburger menu
- Consistent social media links across all components

## 🚀 Project Structure & Best Practices

```
src/
├── routes/
│   ├── +layout.svelte          # Root layout with dark mode logic
│   ├── +layout.ts              # Prerender configuration and load function
│   ├── +page.svelte            # Home page with terminal animation
│   ├── +page.ts                # Home page data loading
│   └── projects/
│       ├── +page.svelte        # Projects page with proper data loading
│       └── +page.ts            # Projects data loading function
├── lib/
│   ├── components/             # Reusable UI components
│   │   ├── Layout.svelte       # Main layout wrapper
│   │   ├── Navigation.svelte   # Header navigation with stores
│   │   ├── ConnectDropdown.svelte # Accessible dropdown component
│   │   └── ProjectCard.svelte  # Project display component
│   ├── constants/              # Centralized data
│   │   ├── projects.ts         # Project information
│   │   └── social.ts          # Social media links
│   ├── stores/                 # Svelte stores for state management
│   │   └── index.ts           # Dark mode and navigation stores
│   ├── types/                  # TypeScript type definitions
│   │   └── index.ts           # Shared interfaces and types
│   └── utils/                  # Utility functions
│       └── animations.ts       # Animation helper functions
├── app.css                     # Global styles and Tailwind utilities
├── app.d.ts                    # TypeScript declarations
└── app.html                    # HTML template
```

## 🔧 Development

### Prerequisites
- Node.js 18+ 
- npm

### Setup & Development

1. **Clone and install**:
   ```bash
   git clone https://github.com/david-love121/svelte-developer-portfolio.git
   cd svelte-developer-portfolio
   npm install
   ```

2. **Development server**:
   ```bash
   npm run dev
   ```

3. **Type checking**:
   ```bash
   npm run check
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

### Code Quality
- **TypeScript**: Strict mode enabled with comprehensive type coverage
- **Svelte Check**: Integrated type checking for Svelte components  
- **Zero Errors**: Clean builds with no TypeScript or Svelte warnings
- **Best Practices**: Modern SvelteKit patterns and conventions

## 🎨 Customization

### Adding New Social Links
1. Update `src/lib/constants/social.ts`:
   ```typescript
   export const socialLinks = [
     // existing links...
     {
       name: 'Platform Name',
       url: 'https://platform.com/username',
       icon: 'SVG_PATH_DATA_HERE'
     }
   ];
   ```

2. Links automatically appear in navigation, footer, and mobile menu.

### Updating Content
- **Personal info**: Edit variables in `src/routes/+page.svelte`
- **About section**: Update content in the about section
- **Projects**: Modify `src/lib/constants/projects.ts`
- **Animation timing**: Adjust `sleep()` values in animation functions

### Styling & Theming
- **Colors**: Modify Tailwind classes or `tailwind.config.js`
- **Typography**: Update font classes in components
- **Animations**: Adjust timing in CSS and TypeScript functions
- **Dark mode**: Extend utility classes in `src/app.css`

## 🚀 Deployment

Automated deployment to GitHub Pages using GitHub Actions:

1. **Static Generation**: `@sveltejs/adapter-static` for optimal performance
2. **Base Path Handling**: Proper configuration for GitHub Pages subdirectories  
3. **Automated Workflow**: Deploys on every push to main branch
4. **Asset Optimization**: Post-processing script fixes asset paths

### Deployment Files
- `.github/workflows/deploy.yml` - GitHub Actions configuration
- `fix-paths.js` - Asset path correction for GitHub Pages
- `static/.nojekyll` - Bypass Jekyll processing

## 📋 Key Improvements Made

### SvelteKit Modernization
- ✅ **File-based Routing**: Proper `+page.svelte` and `+page.ts` structure
- ✅ **Data Loading**: Load functions for extensible data management
- ✅ **Static Generation**: Prerendering enabled for optimal performance
- ✅ **TypeScript**: Comprehensive type safety with zero errors
- ✅ **Component Architecture**: Modular, reusable component design

### Code Quality & Best Practices
- ✅ **Clean Architecture**: Separation of concerns with utils, stores, constants
- ✅ **Accessibility**: Screen reader support, keyboard navigation, ARIA labels
- ✅ **Performance**: Optimized animations and static site generation
- ✅ **Maintainability**: Centralized data management and reusable patterns
- ✅ **Error Handling**: Robust animation fallbacks and edge case handling

### Original Design Preservation
- ✅ **Terminal Animation**: Exact recreation of original typing sequence
- ✅ **Visual Design**: Maintained green prompt, right-aligned subtitle
- ✅ **Content**: Preserved personal content about UIC, AI projects
- ✅ **Social Links**: Kept original Instagram, GitHub, Substack links
- ✅ **Layout**: Single-page design with smooth section transitions

## 🤝 Connect

- **GitHub**: [david-love121](https://github.com/david-love121)  
- **Instagram**: [@david.love121](https://www.instagram.com/david.love121/)
- **Substack**: [@davidlove677899](https://substack.com/@davidlove677899)

---

Built with ❤️ using SvelteKit and Tailwind CSS, deployed on GitHub Pages.


