# 🧪 Professional Chemist Portfolio Website

A fully responsive, bilingual (English/Arabic), and modern portfolio website for professional chemists with Light/Dark mode support.

## ✨ Features

### 🌐 General Requirements
- ✅ Fully responsive (desktop, tablet, mobile)
- ✅ Light Mode / Dark Mode toggle
- ✅ Arabic ⇆ English toggle (all sections update automatically)
- ✅ Modern clean design with chemistry-themed visuals
- ✅ Smooth animations and hover effects
- ✅ Professional typography for Arabic & English

### 📋 Sections Included

1. **Hero Section** - Name, job title, slogan, CTA buttons with animations
2. **About Me** - Professional bio, expertise areas, focus areas
3. **Technical Skills** - Analytical, organic, inorganic chemistry with animated skill bars
4. **Services** - Laboratory analysis, QC testing, R&D, material characterization, safety consulting
5. **Projects/Case Studies** - 6 case studies with tags and descriptions
6. **Certifications** - 6 certificates with issuing body and date
7. **Professional Experience** - 4-point timeline with achievements
8. **Testimonials** - Client/supervisor quotes with ratings
9. **Contact** - Contact form and social media links
10. **Footer** - Quick links, social media, accessibility controls

## 🎨 Design Features

- **Color Palette**: Professional chemistry-themed (blue, teal, navy, white)
- **Animations**: 
  - Fade-in effects on scroll
  - Hover animations on cards and buttons
  - Parallax background effects
  - Smooth transitions throughout
- **Typography**: Optimized for both English and Arabic
- **Accessibility**: 
  - Keyboard navigation support (Alt+1, Alt+D, Alt+L)
  - Screen reader announcements
  - Semantic HTML
  - ARIA labels

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file with all sections
├── css/
│   └── style.css       # Responsive CSS with themes and animations
├── js/
│   └── main.js         # JavaScript for interactions and functionality
└── images/             # Directory for chemistry-themed images (optional)
```

## 🚀 Quick Start

### Method 1: Open Directly
Simply open `index.html` in your web browser.

### Method 2: Using Live Server (VS Code)
1. Install "Live Server" extension
2. Right-click on `index.html` → "Open with Live Server"
3. Webpage opens at `http://localhost:5500`

### Method 3: Using Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then visit `http://localhost:8000`

## ⌨️ Keyboard Shortcuts

- **Alt + 1**: Skip to main content
- **Alt + D**: Toggle Dark/Light mode
- **Alt + L**: Toggle Language (English/Arabic)

## 🎯 How to Customize

### Change Professional Information
Edit the following in `index.html`:
- Name and job title in the hero section
- Bio in the about section
- Certificates and experience details
- Social media links

### Modify Colors
Edit the CSS variables at the top of `style.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00b4d8;
    --accent-color: #00d4ff;
    --dark-navy: #001f3f;
    /* ... more variables ... */
}
```

### Add Images
1. Place images in the `images/` folder
2. Replace placeholder divs with `<img>` tags
3. Update image paths in HTML

### Update Content
All content uses bilingual `data-en` and `data-ar` attributes:
```html
<h1 data-en="Your English Text" data-ar="نصك بالعربية">Your English Text</h1>
```

## 💾 Local Storage Features

The website automatically saves:
- **Theme preference** (Light/Dark mode)
- **Language preference** (English/Arabic)

These settings persist across browser sessions.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 769px - 1199px
- **Mobile**: 480px - 768px
- **Small Mobile**: Below 480px

## 🔧 JavaScript Functions

Access public functions via `window.portfolioApp`:

```javascript
// Set language
window.portfolioApp.setLanguage('ar'); // or 'en'

// Toggle theme
window.portfolioApp.toggleTheme();

// Get current language
const lang = window.portfolioApp.getLanguage();

// Get current theme
const theme = window.portfolioApp.getTheme(); // 'dark' or 'light'

// Get text direction
const dir = window.portfolioApp.getCurrentDirection(); // 'rtl' or 'ltr'

// Announce to screen readers
window.portfolioApp.announceToScreenReader('Message');
```

## 📊 Contact Form

The contact form is fully functional front-end only:
- Validates all fields
- Email format validation
- Shows success/error messages
- Resets after submission
- Messages are bilingual

**Note**: Form submission doesn't send emails. To enable backend functionality, integrate with:
- Formspree.io
- Netlify Forms
- Firebase
- Custom backend API

## 🌐 Deployment

### Deploy to Netlify
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Website goes live instantly

### Deploy to Vercel
1. Create account at [vercel.com](https://vercel.com)
2. Import GitHub repository or upload files
3. Website deploys automatically

### Deploy to GitHub Pages
1. Create GitHub repository
2. Push files to `main` branch
3. Enable "Pages" in repository settings
4. Your site is live at `username.github.io/repo-name`

### Traditional Web Hosting
1. Upload files via FTP to your hosting provider
2. Make sure `index.html` is in root directory
3. Website is live

## 🎨 Customization Tips

### Add More Sections
1. Copy a section HTML structure
2. Update content with new data attributes
3. Add CSS styling in `style.css`
4. Link in navigation menu

### Customize Animations
Modify animation speeds in `style.css`:
```css
--transition-fast: 0.2s ease-in-out;
--transition-normal: 0.3s ease-in-out;
--transition-slow: 0.5s ease-in-out;
```

### Change Chemistry-Themed Icons
Current icons use Font Awesome. Find more at [fontawesome.com](https://fontawesome.com)

### Adjust Spacing
Modify spacing variables:
```css
--spacing-xs: 0.5rem;
--spacing-sm: 1rem;
--spacing-md: 1.5rem;
--spacing-lg: 2rem;
--spacing-xl: 3rem;
--spacing-2xl: 4rem;
```

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly
- Mobile touch-friendly

## 📄 License

This portfolio is free to use and modify. Feel free to customize it for your needs.

## 📞 Support

### Common Issues

**Q: Language toggle not working?**
A: Make sure all text elements have `data-en` and `data-ar` attributes.

**Q: Dark mode not saving?**
A: Check if browser allows localStorage. Disable privacy mode.

**Q: Images not showing?**
A: Verify image paths in HTML. Check images are in correct folder.

**Q: Mobile menu not working?**
A: Ensure hamburger icon is visible on mobile. Check CSS media queries.

## 🚀 Future Enhancements

Potential additions:
- Backend form submission
- Blog section
- Gallery with lightbox
- PDF resume download
- Client testimonials with carousel
- Skills dashboard with charts
- Dark mode auto-switch based on time
- Multi-language addition
- Animation parallax improvements
- Performance optimization with lazy loading

## 📝 Notes

- All content is front-end only (no backend required)
- Form submissions show UI feedback only (implement backend for real functionality)
- Mobile-first responsive design
- Optimized for SEO
- Clean, commented code ready for customization

---

**Created with ❤️ for excellence in chemistry.**

Made for chemists, by developers who understand precision.

Version: 1.0.0  
Last Updated: December 2024
