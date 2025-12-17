# 🎨 Customization Guide & Code Examples

## 📝 How to Customize Your Portfolio

This guide shows exact code examples for common customizations.

## 1️⃣ Change Personal Information

### Change Your Name
**Find this in `index.html` around line 97:**
```html
<!-- BEFORE -->
<h1 data-en="Dr. Ahmed Hassan" data-ar="د. أحمد حسن">Dr. Ahmed Hassan</h1>

<!-- AFTER - Replace with your name -->
<h1 data-en="Dr. Your Name" data-ar="د. اسمك">Dr. Your Name</h1>
```

### Change Job Title
**Find this around line 98:**
```html
<!-- BEFORE -->
<h2 data-en="Analytical & Quality Control Chemist" data-ar="كيميائي تحليلي وضمان الجودة">
    Analytical & Quality Control Chemist
</h2>

<!-- AFTER -->
<h2 data-en="Research Chemist & Lab Manager" data-ar="كيميائي بحثي ومدير المختبر">
    Research Chemist & Lab Manager
</h2>
```

### Change Professional Slogan
**Find this around line 100:**
```html
<!-- BEFORE -->
<p class="slogan fade-in" data-en="Precision in Analysis, Excellence in Quality" data-ar="الدقة في التحليل، التميز في الجودة">
    Precision in Analysis, Excellence in Quality
</p>

<!-- AFTER -->
<p class="slogan fade-in" data-en="Innovation in Chemistry, Solutions for Tomorrow" data-ar="الابتكار في الكيمياء، الحلول للغد">
    Innovation in Chemistry, Solutions for Tomorrow
</p>
```

## 2️⃣ Update Contact Information

### Change Email
**Find this around line 676:**
```html
<!-- BEFORE -->
<a href="mailto:ahmed@example.com" class="contact-link">
    <i class="fas fa-envelope"></i>
    <span>ahmed.hassan@email.com</span>
</a>

<!-- AFTER -->
<a href="mailto:your.email@gmail.com" class="contact-link">
    <i class="fas fa-envelope"></i>
    <span>your.email@gmail.com</span>
</a>
```

### Change Phone Number
**Find this around line 680:**
```html
<!-- BEFORE -->
<a href="tel:+20101234567" class="contact-link">
    <i class="fas fa-phone"></i>
    <span>+20 (101) 234-567</span>
</a>

<!-- AFTER -->
<a href="tel:+201023456789" class="contact-link">
    <i class="fas fa-phone"></i>
    <span>+20 (102) 345-6789</span>
</a>
```

### Update LinkedIn
**Find this around line 690:**
```html
<!-- BEFORE -->
<a href="https://linkedin.com" class="contact-link" target="_blank">
    <i class="fab fa-linkedin"></i>
    <span data-en="LinkedIn Profile" data-ar="ملف LinkedIn">LinkedIn Profile</span>
</a>

<!-- AFTER - Use your actual LinkedIn URL -->
<a href="https://linkedin.com/in/yourprofile" class="contact-link" target="_blank">
    <i class="fab fa-linkedin"></i>
    <span data-en="LinkedIn Profile" data-ar="ملف LinkedIn">LinkedIn Profile</span>
</a>
```

### Update WhatsApp
**Find this around line 695:**
```html
<!-- BEFORE -->
<a href="https://wa.me/201012345678" class="contact-link" target="_blank">
    <i class="fab fa-whatsapp"></i>
    <span data-en="WhatsApp" data-ar="واتس آب">WhatsApp</span>
</a>

<!-- AFTER - Use your phone number -->
<a href="https://wa.me/201023456789" class="contact-link" target="_blank">
    <i class="fab fa-whatsapp"></i>
    <span data-en="WhatsApp" data-ar="واتس آب">WhatsApp</span>
</a>
```

## 3️⃣ Update About Section

### Change Bio
**Find this around line 125:**
```html
<!-- BEFORE -->
<p data-en="With over 8 years of experience in analytical chemistry..." 
   data-ar="مع أكثر من 8 سنوات من الخبرة في الكيمياء التحليلية...">
    With over 8 years of experience in analytical chemistry...
</p>

<!-- AFTER -->
<p data-en="With over 10 years of experience in pharmaceutical chemistry and formulation development..."
   data-ar="مع أكثر من 10 سنوات من الخبرة في كيمياء الأدوية وتطوير الصيغ...">
    With over 10 years of experience in pharmaceutical chemistry...
</p>
```

### Add New Focus Area
**Find the list around line 138:**
```html
<!-- BEFORE: Original list -->
<li data-en="✓ Analytical Chemistry & Chromatography" 
    data-ar="✓ الكيمياء التحليلية والفصل اللوني">
    ✓ Analytical Chemistry & Chromatography
</li>

<!-- AFTER: Add new items -->
<li data-en="✓ Analytical Chemistry & Chromatography" 
    data-ar="✓ الكيمياء التحليلية والفصل اللوني">
    ✓ Analytical Chemistry & Chromatography
</li>
<li data-en="✓ Pharmaceutical Formulation" 
    data-ar="✓ صيغ الأدوية">
    ✓ Pharmaceutical Formulation
</li>
```

## 4️⃣ Customize Colors

### Change Primary Color (Blue)
**Edit `css/style.css` around line 12:**
```css
/* BEFORE */
--primary-color: #0066cc;

/* AFTER - Change to your color */
--primary-color: #0052CC;  /* Darker blue */
--primary-color: #1f51ff;  /* Brighter blue */
--primary-color: #5B21B6;  /* Purple */
--primary-color: #059669;  /* Green */
```

### Change Secondary Color (Teal)
**Edit `css/style.css` around line 13:**
```css
/* BEFORE */
--secondary-color: #00b4d8;

/* AFTER - Change to your color */
--secondary-color: #00A8A8;  /* Different teal */
--secondary-color: #06B6D4;  /* Cyan */
--secondary-color: #0891B2;  /* Sky blue */
```

### Change Accent Color
**Edit `css/style.css` around line 14:**
```css
/* BEFORE */
--accent-color: #00d4ff;

/* AFTER - Change to your color */
--accent-color: #00FF00;  /* Green */
--accent-color: #FF00FF;  /* Magenta */
--accent-color: #FFFF00;  /* Yellow */
```

### Dark Mode Background
**Edit `css/style.css` around line 15:**
```css
/* BEFORE */
--dark-navy: #001f3f;

/* AFTER - Change to your dark color */
--dark-navy: #0f172a;  /* Darker */
--dark-navy: #1e1e30;  /* Different dark */
--dark-navy: #16213e;  /* Blue tint */
```

## 5️⃣ Add Custom Skills

### Add New Skill Card
**Find skills section around line 200, and add:**
```html
<div class="skill-card fade-in-up" style="animation-delay: 0.6s;">
    <div class="skill-icon">
        <i class="fas fa-flask"></i>
    </div>
    <h3 data-en="Green Chemistry" data-ar="الكيمياء الخضراء">Green Chemistry</h3>
    <p data-en="Sustainable practices in laboratory and industrial processes"
       data-ar="الممارسات المستدامة في العمليات المخبرية والصناعية">
        Sustainable practices in laboratory and industrial processes
    </p>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 80%;"></div>
    </div>
</div>
```

## 6️⃣ Add Custom Project/Case Study

**Find projects section around line 350:**
```html
<div class="project-card fade-in-up" style="animation-delay: 0.6s;">
    <div class="project-image">
        <i class="fas fa-chart-line"></i>
        <span data-en="Custom Analysis" data-ar="تحليل مخصص">Custom Analysis</span>
    </div>
    <div class="project-content">
        <h3 data-en="Your Project Title" data-ar="عنوان مشروعك">Your Project Title</h3>
        <p data-en="Description of your project..."
           data-ar="وصف مشروعك...">
            Description of your project...
        </p>
        <div class="project-tags">
            <span>Tech 1</span>
            <span data-en="Methodology" data-ar="المنهجية">Methodology</span>
            <span>Result</span>
        </div>
    </div>
</div>
```

## 7️⃣ Add Certificate

**Find certificates section around line 450:**
```html
<div class="certificate-card fade-in-up" style="animation-delay: 0.6s;">
    <div class="certificate-image">
        <i class="fas fa-certificate"></i>
    </div>
    <h3 data-en="Your Certificate Name" data-ar="اسم الشهادة">Your Certificate Name</h3>
    <p class="issuer" data-en="Issuing Body" data-ar="جهة الإصدار">Issuing Body</p>
    <p class="date">2024</p>
</div>
```

## 8️⃣ Add Experience Entry

**Find experience section around line 530:**
```html
<div class="timeline-item fade-in-right" style="animation-delay: 0.4s;">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h3 data-en="Your Job Title" data-ar="المسمى الوظيفي">Your Job Title</h3>
        <p class="company" data-en="Company Name" data-ar="اسم الشركة">Company Name</p>
        <p class="date">2020 - 2023</p>
        <ul>
            <li data-en="Your achievement" data-ar="إنجازك">Your achievement</li>
            <li data-en="Another achievement" data-ar="إنجاز آخر">Another achievement</li>
        </ul>
    </div>
</div>
```

## 9️⃣ Add Testimonial

**Find testimonials section around line 610:**
```html
<div class="testimonial-card fade-in-up" style="animation-delay: 0.3s;">
    <div class="testimonial-stars">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="testimonial-text" 
       data-en="Your testimonial text here..."
       data-ar="نص شهادتك هنا...">
        Your testimonial text here...
    </p>
    <div class="testimonial-author">
        <div class="author-avatar">
            <i class="fas fa-user-circle"></i>
        </div>
        <div class="author-info">
            <p class="author-name" data-en="Person Name" data-ar="اسم الشخص">Person Name</p>
            <p class="author-title" data-en="Title, Company" data-ar="المسمى، الشركة">Title, Company</p>
        </div>
    </div>
</div>
```

## 🔟 Change Fonts

### Change English Font
**Edit `css/style.css` around line 20:**
```css
/* BEFORE */
--font-family-en: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* AFTER - Use Google Fonts or system fonts */
--font-family-en: 'Inter', 'Helvetica Neue', sans-serif;
--font-family-en: 'Poppins', sans-serif;
--font-family-en: 'Roboto', sans-serif;
```

### Import Google Font
**Add to top of `css/style.css`:**
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

:root {
    --font-family-en: 'Poppins', sans-serif;
    /* ... rest of variables ... */
}
```

## 1️⃣1️⃣ Adjust Spacing

### Change Gap Between Sections
**Edit `css/style.css` around line 28:**
```css
/* BEFORE */
--spacing-2xl: 4rem;

/* AFTER - Smaller or larger */
--spacing-2xl: 3rem;    /* More compact */
--spacing-2xl: 5rem;    /* More spacious */
```

## 1️⃣2️⃣ Add Custom SVG Background

**Add this to hero section in `index.html`:**
```html
<svg class="hero-svg" viewBox="0 0 1000 1000">
    <circle cx="500" cy="500" r="400" fill="url(#gradient)" opacity="0.1"/>
    <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#0066cc;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#00b4d8;stop-opacity:1" />
        </linearGradient>
    </defs>
</svg>
```

## 1️⃣3️⃣ Add Google Analytics

**Add this before `</head>` in `index.html`:**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual Google Analytics ID.

## 1️⃣4️⃣ Add Favicon

**Add this in the `<head>` section:**
```html
<link rel="icon" type="image/x-icon" href="images/favicon.ico">
<link rel="apple-touch-icon" href="images/apple-touch-icon.png">
```

## 1️⃣5️⃣ Add Open Graph Meta Tags

**Add this in `<head>` for social sharing:**
```html
<meta property="og:title" content="Dr. Your Name - Professional Chemist">
<meta property="og:description" content="Your professional description">
<meta property="og:image" content="https://yoursite.com/images/preview.jpg">
<meta property="og:url" content="https://yoursite.com">
<meta property="og:type" content="website">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Dr. Your Name - Professional Chemist">
<meta name="twitter:description" content="Your professional description">
<meta name="twitter:image" content="https://yoursite.com/images/preview.jpg">
```

## 💡 Quick Tips

1. **Always update both `data-en` and `data-ar`** for bilingual support
2. **Test changes in browser** after editing
3. **Use Ctrl+H** (Find & Replace) for batch updates
4. **Keep backups** before major changes
5. **Use browser DevTools** (F12) to test responsiveness
6. **Clear cache** (Ctrl+Shift+Delete) if changes don't show

## 🎯 Most Common Customizations

Quick reference of top 5 edits:

1. **Change Name**: Line 97 in index.html
2. **Change Email**: Line 676 in index.html  
3. **Change Colors**: Lines 12-15 in style.css
4. **Update Bio**: Line 125 in index.html
5. **Add Projects**: Around line 350 in index.html

---

**Happy customizing!** 🎨✨

For more help, refer to the main README.md and FEATURES.md files.
