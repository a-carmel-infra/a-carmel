# Carmel Construction & Infrastructure Website

A professional static website for a civil engineering and infrastructure construction company.

## Features

- **Modern Design**: Industrial yet modern aesthetic with deep slate grey, construction orange, and clean white color palette
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Hebrew Support**: Full RTL (Right-to-Left) support for Hebrew content
- **Key Sections**:
  - Home page with hero section
  - Major Projects showcase
  - Safety Standards information
  - Engineering Innovation features
  - About page with company story and team
  - Contact page with form and details

## Pages

- `index.html` - Home page
- `about.html` - About us page
- `contact.html` - Contact page
- `styles.css` - All styling
- `script.js` - Interactive functionality

## Customization

### Adding Project Images

Replace the placeholder sections with actual images by:
1. Adding your images to an `/images` folder
2. Updating the `.project-image-placeholder` divs with:
```html
<img src="images/your-project.jpg" alt="Project Name">
```

### Updating Contact Information

Edit the contact details in:
- Footer sections on all pages
- Contact page info cards
- Header email/phone references

### Integrating Contact Form

The contact form is currently configured for demonstration. To make it functional:

1. **Option 1 - Formspree** (Recommended for GitHub Pages):
   - Sign up at [formspree.io](https://formspree.io)
   - Uncomment the fetch code in `script.js`
   - Replace `YOUR_FORM_ID` with your Formspree form ID

2. **Option 2 - EmailJS**:
   - Sign up at [emailjs.com](https://www.emailjs.com)
   - Follow their integration guide

3. **Option 3 - Netlify Forms**:
   - If deploying on Netlify, add `netlify` attribute to the form

## GitHub Pages Deployment

This site is configured to deploy automatically to GitHub Pages:

1. Go to your repository Settings
2. Navigate to Pages section
3. Select "GitHub Actions" as the source
4. The site will deploy automatically on every push to main branch

Your site will be available at: `https://evyacik.github.io/a-carmel/`

## Local Development

Simply open `index.html` in a web browser to view locally.

For a local server:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`

## Technologies Used

- HTML5
- CSS3 (Grid, Flexbox, Custom Properties)
- Vanilla JavaScript
- Google Fonts (Heebo for Hebrew support)
- GitHub Pages for hosting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2024 Carmel Construction. All rights reserved.
