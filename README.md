# jQuery UI Crash Course

A comprehensive demonstration of jQuery UI components and interactions, built with Vite for modern development workflow.

## Features

This project showcases the following jQuery UI components:

- **Accordion** - Collapsible content sections with smooth animations
- **Tabs** - Tabbed interface for organizing content
- **Dialog** - Modal dialogs with customizable options
- **Datepicker** - Interactive date selection widget
- **Autocomplete** - Smart input completion with city suggestions
- **Draggable** - Drag and drop functionality
- **Sortable** - Reorderable list items with visual feedback

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abdulkader-Safi/jquery-ui-crash-course.git
cd jquery-ui-crash-course
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

### Development

Start the development server:
```bash
npm run dev
# or
bun run dev
```

Open your browser and navigate to the displayed local URL (typically `http://localhost:5173`).

### Build

Create a production build:
```bash
npm run build
# or
bun run build
```

### Preview

Preview the production build:
```bash
npm run preview
# or
bun run preview
```

## Project Structure

```
jquery-crash-course/
├── index.html          # Main HTML file with UI components
├── package.json        # Project dependencies and scripts
├── src/
│   ├── main.js         # jQuery UI initialization and logic
│   └── style.css       # Custom styles for components
└── public/             # Static assets
```

## Technologies Used

- **jQuery** (v3.7.1) - Core JavaScript library
- **jQuery UI** (v1.13.3) - UI components and interactions
- **Vite** - Modern build tool and development server
- **ES6 Modules** - Modern JavaScript module system

## Component Details

### Accordion
- Collapsible sections with content-based height
- Supports single or multiple open sections

### Tabs
- Clean tabbed interface
- Easy navigation between content sections

### Dialog
- Modal dialog with overlay
- Customizable dimensions and behavior

### Datepicker
- Format: YYYY-MM-DD
- Fade-in animation effect
- Keyboard and mouse navigation

### Autocomplete
- Middle Eastern cities dataset
- Minimum length: 0 (shows all on focus)
- Case-insensitive matching

### Draggable & Sortable
- Drag element within window boundaries
- Sortable list with visual placeholders
- Console logging of reorder events

## Learning Objectives

This crash course demonstrates:
- Setting up jQuery UI with modern build tools
- Initializing and configuring UI components
- Event handling and callbacks
- Custom styling and theming
- Integration with ES6 modules

## Browser Support

- Modern browsers supporting ES6 modules
- IE11+ (with appropriate polyfills)

## License

This project is for educational purposes.