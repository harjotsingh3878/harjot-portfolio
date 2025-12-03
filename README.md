# Harjot Singh - Professional Portfolio

A modern, responsive portfolio web application built with React showcasing professional experience, skills, education, and contact information.

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

## Tech Stack

- React 17.0.2
- React Router DOM 5.2.0
- React Icons 4.2.0
- CSS3 (Modern Features: Grid, Flexbox, Gradients, Animations)

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Navigate to the project directory:
   ```bash
   cd harjot-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Experience.js   # Experience timeline
│   ├── Skills.js       # Skills grid
│   ├── Education.js    # Education cards
│   ├── Contact.js      # Contact form
│   ├── Footer.js       # Footer
│   └── *.css           # Component styles
├── styles/             # Global styles
│   └── globals.css     # Global CSS variables and base styles
├── data.js             # Portfolio data (resume information)
├── App.js              # Main app component
└── index.js            # React entry point
```

## Customization

### Update Your Information

Edit `src/data.js` to update:
- Personal information (name, email, phone, location)
- Professional summary
- Work experience and responsibilities
- Skills by category
- Education details
- Social media links

### Styling

All colors and design tokens are defined as CSS variables in `src/styles/globals.css`:
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
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (one-way operation)
npm run eject
```

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
- [ ] Add blog section
- [ ] Integrate email service for contact form
- [ ] Add PDF resume download
- [ ] Add animations library (Framer Motion)
- [ ] Add testimonials section

## License

This project is open source and available under the MIT License.

## Author

Harjot Singh - Full Stack Developer

---

Built with React ❤️
