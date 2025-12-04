# Harjot Singh - Professional Portfolio

A modern, responsive portfolio web application built with Next.js 14, React 18, and TypeScript showcasing professional experience, skills, education, and contact information.

🌐 **Live Demo**: [https://portfolio-harjot-singh.netlify.app/](https://portfolio-harjot-singh.netlify.app/)

## Features

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Section**: Professional summary with key highlights
- **Experience Timeline**: Detailed work history with responsibilities and technologies used
- **Skills Showcase**: Organized by categories (Frontend, Backend, Databases, Tools, etc.)
- **Education**: Academic background and certifications
- **Contact Form**: Easy way for visitors to get in touch
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Smooth Navigation**: Sticky header with smooth scroll behavior
- **Modern UI**: Gradient backgrounds, animations, and hover effects
- **Type-Safe**: Full TypeScript support for better developer experience

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.3
- **UI Library**: React 18.3
- **Icons**: React Icons 5.0
- **Styling**: CSS3 (Modern Features: Grid, Flexbox, Gradients, Animations)
- **Deployment**: Netlify (via GitHub Actions CI/CD)

## Getting Started

### Prerequisites

- Node.js 18+ and npm installed

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/harjotsingh3878/harjot-portfolio.git
   cd harjot-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components (TypeScript)
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Experience timeline
│   ├── Skills.tsx      # Skills grid
│   ├── Education.tsx   # Education cards
│   ├── Contact.tsx     # Contact form
│   ├── Footer.tsx      # Footer
│   └── *.css           # Component styles
├── types/              # TypeScript type definitions
│   └── portfolio.ts    # Portfolio data types
└── data.ts             # Portfolio data (resume information)
```

## Customization

### Update Your Information

Edit `src/data.ts` to update:
- Personal information (name, email, phone, location)
- Professional summary
- Work experience and responsibilities
- Skills by category
- Education details
- Social media links

### Styling

All colors and design tokens are defined as CSS variables in `src/app/globals.css`:
- `--primary-color`: Main dark color
- `--highlight-color`: Accent/highlight color (red)
- `--accent-color`: Secondary color (blue)

Change these variables to customize the entire design.

## Sections

### 1. Header & Navigation
- Sticky navigation
- Mobile-responsive hamburger menu
- Smooth scroll links

### 2. Hero Section
- Large introductory text
- Call-to-action buttons
- Social media links
- Scroll indicator

### 3. About
- Professional summary
- Key highlights (years of experience, technologies, role)

### 4. Experience
- Timeline view of work history
- Company, position, and duration
- Detailed responsibilities
- Technologies used for each role

### 5. Skills
- Organized by category
- Visual skill badges
- 20+ technologies

### 6. Education
- Academic degrees
- School/college information
- Graduation year and location

### 7. Contact
- Contact information (email, phone, location)
- Contact form for inquiries
- Success message on form submission

### 8. Footer
- Copyright information
- Back-to-top button

## Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production (static export)
npm run build

# Start production server
npm start

# Run Next.js linter
npm run lint
```

## CI/CD & Deployment

This project uses GitHub Actions for automated deployment to Netlify:

1. **Automatic Builds**: Every push to `main` triggers a build
2. **Static Export**: Next.js builds a static site to `out/` directory
3. **Netlify Deployment**: Automatically deploys to Netlify

### Setup Netlify Deployment

1. Create a Netlify account and site
2. Add GitHub repository secrets:
   - `NETLIFY_AUTH_TOKEN`: Your Netlify personal access token
   - `NETLIFY_SITE_ID`: Your Netlify site ID
3. Push to `main` branch to trigger deployment

## TypeScript

This project uses TypeScript for type safety:

- All components are written in `.tsx` format
- Type definitions are in `src/types/portfolio.ts`
- Strict mode enabled for maximum type safety

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Design

The portfolio is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Future Enhancements

- [ ] Add projects/portfolio section
- [ ] Implement dark mode toggle
- [ ] Add blog section (MDX support)
- [ ] Integrate email service for contact form
- [ ] Add PDF resume download
- [ ] Add animations library (Framer Motion)
- [ ] Add testimonials section
- [ ] SEO optimization with Next.js metadata
- [ ] Add analytics (Google Analytics/Vercel Analytics)

## Migration from CRA to Next.js

This project was migrated from Create React App to Next.js 14:
- ✅ React 17 → React 18
- ✅ JavaScript → TypeScript
- ✅ React Router → Next.js App Router
- ✅ Client-side rendering → Static Site Generation
- ✅ Added CI/CD pipeline with GitHub Actions

## License

This project is open source and available under the MIT License.

## Author

**Harjot Singh** - Full Stack Software Developer  
📧 harjotsingh538@gmail.com  
🔗 [GitHub](https://github.com/harjotsingh3878) | [LinkedIn](https://www.linkedin.com/in/harjotsingh3878/)

---

Built with Next.js 14, React 18, and TypeScript ❤️
