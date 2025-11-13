This project is a pixel-perfect recreation of a Figma component.

The goal was to accurately reproduce the UI, interactivity, and behavior using clean, maintainable code.

## Tech Stack

- **React (Vite)**
- **HTML / CSS**
- **Inline SVG for checkmark icons**
- **JavaScript (ES6+)**

## Project Structure

- **src/**
  - **App.jsx** # Main component + checkbox logic
  - **index.css** # Styles based on Figma reference
  - **main.jsx** # Entry point
  - **assets/** # static assets

## Features

- Fully recreated UI from the provided Figma design  
- Precise styling with a focus on spacing, colors, and micro-interactions  
- Custom checkbox component built with a thin SVG checkmark  
- “All pages” checkbox supports checked, unchecked, and indeterminate states  
- Smooth hover/active interactions  
- Responsive layout optimized for mobile widths  
- Clean separation of JSX structure and CSS styling  

## Component Behavior

- Selecting individual pages updates the internal state
- “All pages” toggles all items on/off
- Indeterminate state appears only when some (but not all) items are selected
- “Done” button displays selected pages (placeholder behavior for demo)

## Scripts

```bash
npm install
npm run dev
```

## Links

[Live Demo](https://ellty-pages.vercel.app)
[Source Code](https://github.com/NBinte/ellty-pages)