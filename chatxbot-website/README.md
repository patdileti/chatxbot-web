# Chatxbot Website

A modern, responsive website for Chatxbot, showcasing AI assistants and process automation solutions.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Interactive FAQ section
- Dynamic testimonials
- Optimized for conversion with strategic CTAs
- Clean and professional layout

## Project Structure

```
chatxbot-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Stylesheet
├── js/
│   └── script.js       # JavaScript for interactivity
└── images/             # Directory for images (to be added)
```

## Setup Instructions

1. Clone or download this repository
2. Add your company logo as `logo.svg` in the images directory
3. Add testimonial images (testimonial1.jpg, testimonial2.jpg, testimonial3.jpg) in the images directory
4. Add your hero image as `hero-image.svg` in the images directory
5. Add your team photo as `team.jpg` in the images directory
6. Open `index.html` in a web browser to view the site

## Customization

### Colors
The website uses a customizable color scheme defined in CSS variables. To change the colors, modify the following variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #60a5fa;
    --text-color: #1f2937;
    --light-text: #6b7280;
    --background: #ffffff;
    --light-background: #f3f4f6;
    --border-color: #e5e7eb;
}
```

### Content
- Update the FAQ content in `script.js` by modifying the `faqs` array
- Update testimonials in `script.js` by modifying the `testimonials` array
- Modify the copy in `index.html` to match your specific offerings and value proposition

## Dependencies

The website uses the following external resources:

- Font Awesome 6.0.0 for icons
- Inter font from Google Fonts
- No additional JavaScript libraries required

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this template for your own website!
