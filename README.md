# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features beautiful 3D animations, dark/light theme support, and a clean, professional design.

## Features

- 🎨 **Modern UI/UX Design** - Clean and professional interface with smooth animations
- 🌓 **Dark/Light Theme** - Toggle between dark and light modes with persistent preference
- 🎭 **3D Animations** - Interactive 3D elements using Three.js and React Three Fiber
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 🎯 **TypeScript** - Type-safe code for better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid styling
- 📊 **Animated Components** - Smooth animations using Framer Motion
- 📝 **Local Data Management** - All portfolio data stored in TypeScript files

## Sections

1. **Hero** - Eye-catching landing section with 3D animated sphere and typing animation
2. **About** - Personal information, education, and services offered
3. **Projects** - Filterable portfolio showcase with project details
4. **Skills** - Interactive skill display with progress bars and categories
5. **Experience** - Professional timeline with achievements
6. **Contact** - Contact form and social media links
7. **Footer** - Quick links and additional information

## Technologies Used

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Three.js / React Three Fiber (3D graphics)
- React Icons
- React Type Animation
- React Intersection Observer

### Build Tools
- Vite
- PostCSS
- Autoprefixer

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

### Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Customization

### Personal Information
Edit the data in `src/data/portfolio.ts` to update:
- Personal details
- Projects
- Skills
- Experience
- Education
- Services

### Theme Colors
Modify the color scheme in `tailwind.config.js` to match your brand.

### Components
All components are in the `src/components` directory and can be customized to your needs.

## Project Structure

```
portfolio/
├── src/
│   ├── components/       # React components
│   ├── context/          # React context (theme)
│   ├── data/            # Portfolio data
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # App entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html          # HTML template
├── package.json        # Dependencies
├── tsconfig.json       # TypeScript config
├── tailwind.config.js  # Tailwind CSS config
├── vite.config.ts      # Vite config
└── README.md          # Documentation
```

## Performance Optimization

- Lazy loading for images
- Code splitting
- Optimized animations
- Efficient re-renders with React hooks
- Production build optimization with Vite

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own portfolio!

## Contact

For any questions or suggestions, please reach out through the contact form on the website.

---

Made with ❤️ using React and Tailwind CSS