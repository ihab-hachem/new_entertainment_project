# Celebrate Events - Entertainment & Event Planning Website

A professional, fully responsive website for an entertainment and event planning business built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, elegant design with custom color theme
- 📱 Fully responsive layout (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 App Router for optimal performance
- 🎭 Sections: Hero, Services, Portfolio, Contact, Footer
- 🖼️ Portfolio gallery with hover effects
- 📧 Contact form with validation
- 🎯 SEO-optimized with proper meta tags
- ♿ Accessible HTML with semantic elements
- 🚀 Ready to deploy on Vercel

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and theme
├── components/
│   ├── hero.tsx            # Hero section with CTA
│   ├── services.tsx        # Services showcase
│   ├── portfolio.tsx       # Image/video gallery
│   ├── contact.tsx         # Contact form and info
│   └── footer.tsx          # Footer with links
├── public/
│   ├── images/             # Add your event photos here
│   └── videos/             # Add your event videos here
└── README.md
\`\`\`

## Getting Started

### Installation

1. Clone or download this project
2. Install dependencies:

\`\`\`bash
npm install
\`\`\`

3. Run the development server:

\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization Guide

### 1. Replace Placeholder Images

Add your event photos to the `public/images/` folder and update the image sources in:
- `components/hero.tsx` - Hero background image
- `components/portfolio.tsx` - Portfolio gallery images

Example:
\`\`\`tsx
// Change from:
src="/placeholder.svg?height=600&width=800"

// To:
src="/images/your-wedding-photo.jpg"
\`\`\`

### 2. Update Business Information

Edit the following files to add your business details:

**Contact Information** (`components/contact.tsx`):
- Phone number
- Email address
- Physical address

**Social Media Links** (`components/contact.tsx`):
- Instagram URL
- Facebook URL
- Twitter URL

**Footer** (`components/footer.tsx`):
- Business name
- Tagline
- Contact details

### 3. Customize Services

Edit `components/services.tsx` to modify:
- Service titles
- Service descriptions
- Service icons (using lucide-react icons)

### 4. Update Colors

The color theme is defined in `app/globals.css`. Modify the CSS variables in the `:root` section:
- `--primary` - Main brand color (coral/orange)
- `--secondary` - Accent color (teal)
- `--accent` - Additional accent (gold)

### 5. Change Fonts

Fonts are configured in `app/layout.tsx`:
- Heading font: Playfair Display (serif)
- Body font: Geist Sans

To change fonts, import different Google Fonts and update the variables.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Vercel will automatically detect Next.js and configure everything for you.

### Alternative: Manual Deployment

\`\`\`bash
npm run build
npm start
\`\`\`

## Environment Variables

No environment variables are required for the basic setup. If you add backend functionality (form submissions, database, etc.), add your variables to `.env.local`:

\`\`\`
# Example
NEXT_PUBLIC_API_URL=your-api-url
\`\`\`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **Lucide React** - Beautiful icon library
- **Geist Font** - Modern sans-serif font
- **Playfair Display** - Elegant serif font for headings

## Support

For questions or issues, please contact:
- Email: hello@celebrateevents.com
- Phone: +1 (234) 567-890

## License

This project is ready for commercial use. Customize it for your business needs.

---

Built with ❤️ using v0.app
