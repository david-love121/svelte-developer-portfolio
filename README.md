# David Love - Developer Portfolio

A modern, minimalist developer portfolio built with SvelteKit featuring a terminal-style typing animation and clean design aesthetic.

## 🌐 Live Demo

Visit the live portfolio at: [https://david-love121.github.io/svelte-developer-portfolio/](https://david-love121.github.io/svelte-developer-portfolio/)

## ✨ Features

- **Terminal Animation**: Eye-catching typewriter effect that simulates terminal typing
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Typography**: Uses Fira Code for terminal sections and Inter for body text
- **Smooth Animations**: CSS animations with staggered delays for engaging user experience
- **Mobile Menu**: Collapsible navigation for mobile devices
- **Social Links**: Easy access to Instagram, GitHub, and Substack profiles
- **Clean Architecture**: Built with SvelteKit for optimal performance

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) 5.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- **Typography**: Google Fonts (Inter, Fira Code)
- **Deployment**: GitHub Pages with GitHub Actions
- **Language**: TypeScript

## 🎯 Key Components

### Terminal Animation
The homepage features a unique terminal-style animation that:
- Shows a green `>` prompt
- Displays a blinking cursor
- Types out the name character by character
- Transitions to typing the subtitle
- Maintains consistent layout without text jumping

### Responsive Navigation
- Desktop: Horizontal navigation bar
- Mobile: Hamburger menu with smooth transitions
- Clean "DL." branding logo

### Social Media Footer
Interactive social media icons with hover effects for:
- Instagram
- GitHub  
- Substack

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

## 📁 Project Structure

```
src/
  routes/
    +layout.ts          # Prerender configuration
    +page.svelte        # Main portfolio page
  app.html              # HTML template
  app.d.ts              # TypeScript declarations
  lib/                  # Shared components (future use)
static/
  .nojekyll             # GitHub Pages configuration
  favicon.png           # Site favicon
.github/
  workflows/
    deploy.yml          # GitHub Actions deployment
```

## 🎨 Customization

The portfolio is designed to be easily customizable:

- **Content**: Update text content in `+page.svelte`
- **Styling**: Modify Tailwind classes or add custom CSS
- **Animation Timing**: Adjust timing variables in the terminal animation script
- **Social Links**: Update URLs in the footer section
- **Colors**: Customize the color scheme using Tailwind classes

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Connect

- **GitHub**: [david-love121](https://github.com/david-love121)
- **Instagram**: [@david.love121](https://www.instagram.com/david.love121/)
- **Substack**: [@davidlove677899](https://substack.com/@davidlove677899)

---

Built with ❤️ using SvelteKit and Claude Sonnet 4, deployed on GitHub Pages.

