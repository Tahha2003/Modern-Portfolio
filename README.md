# Rizwan Aleem Tahha — Software Engineer Portfolio

Modern, responsive portfolio website showcasing skills in web development, AI/ML, and data science. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Responsive Design** — Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode** — Toggle between themes with smooth transitions
- **Smooth Animations** — Framer Motion powered scroll and hover effects
- **Interactive Skills Section** — Continuous scrolling with 3D hover effects
- **Working Contact Form** — EmailJS integration for direct email delivery
- **Social Media Integration** — Pre-filled messages for all platforms
- **Resume Download** — Direct PDF download functionality
- **Modern UI/UX** — Clean, professional design with glassmorphism effects

## 🛠️ Tech Stack

- **React 18** + **Vite** — Fast development and production builds
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling with custom design system
- **Framer Motion** — Advanced animations and transitions
- **EmailJS** — Contact form email delivery
- **Lucide React** + **React Icons** — Comprehensive icon library
- **PostCSS** + **Autoprefixer** — CSS processing

## 🚀 Getting Started

```bash
# Clone the repository
git clone <repository-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact form with EmailJS
│   ├── Education.tsx   # Education timeline
│   ├── Footer.tsx      # Footer with social links
│   ├── Hero.tsx        # Landing section
│   ├── Navbar.tsx      # Navigation bar
│   ├── Projects.tsx    # Projects showcase
│   ├── Services.tsx    # Services offered
│   └── Skills.tsx      # Animated skills display
├── config/
│   └── emailjs.ts      # EmailJS configuration
├── data/
│   └── content.ts      # All content and data
├── hooks/
│   └── useDarkMode.ts  # Dark mode functionality
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## ⚙️ Configuration

### Content Customization
Edit `src/data/content.ts` to update:
- Personal information and bio
- Skills and technologies
- Projects and portfolio items
- Contact information
- Social media links

### EmailJS Setup
1. Create account at [EmailJS](https://www.emailjs.com/)
2. Update credentials in `src/config/emailjs.ts`:
   ```typescript
   export const emailjsConfig = {
     serviceId: 'your_service_id',
     templateId: 'your_template_id', 
     publicKey: 'your_public_key'
   }
   ```
3. See `EMAILJS_SETUP.md` for detailed setup instructions

### Theme Customization
- Primary colors: `tailwind.config.js` under `colors.primary`
- Dark mode: Handled automatically with Tailwind's `dark:` classes
- Fonts and spacing: Configured in `tailwind.config.js`

### Resume/CV
- Place your resume as `Resume.pdf` in the `public/` folder
- The download functionality is already configured

## 🎨 Key Components

### Skills Section
- **Continuous Scrolling Animation** — Left-to-right movement with different speeds
- **3D Hover Effects** — Scale, rotation, glow, and lift animations
- **Responsive Design** — Adapts to all screen sizes
- **Category Organization** — Skills grouped by technology areas

### Contact Form
- **Real Email Delivery** — Powered by EmailJS
- **Form Validation** — Client-side validation with error handling
- **Loading States** — Visual feedback during submission
- **Success/Error Messages** — User-friendly notifications

### Projects Showcase
- **Responsive Grid** — Adapts from 1 to 3 columns based on screen size
- **Image Optimization** — Proper aspect ratios and loading
- **Interactive Cards** — Hover effects and smooth transitions

## 🌐 Social Media Integration

All social platforms include pre-filled messages:
- **Email** — Gmail compose with subject and body
- **LinkedIn** — Direct messaging
- **GitHub** — Profile link
- **Instagram** — Direct messaging
- **WhatsApp** — Direct chat with pre-filled message

## 📱 Responsive Design

- **Mobile First** — Optimized for mobile devices
- **Tablet Support** — Medium screen adaptations
- **Desktop Enhanced** — Full feature experience
- **Touch Friendly** — Proper touch targets and interactions

## 🚀 Deployment

The project builds to static files in the `dist/` directory. Deploy to:

- **Vercel** — `npm run build` then upload `dist/`
- **Netlify** — Connect repository for automatic deployments
- **GitHub Pages** — Use GitHub Actions for automated builds
- **Any Static Host** — Upload `dist/` contents

No server-side rendering or backend required.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Rizwan Aleem Tahha**
