# Nexus.ai - AI Chatbot Solution Template

![Nexus.ai Preview](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61dafb?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38b2ac?style=for-the-badge&logo=tailwind-css)

A modern, responsive AI chatbot solution template built with Next.js, featuring smooth animations, Google authentication, and a comprehensive showcase of 10+ pages and 30+ sections. This project serves as a demo and promotional website for the Nexus.ai Webflow template.

## ✨ Features

### 🎨 **Modern Design**

- **Responsive Layout**: Fully responsive design that works seamlessly across all devices
- **Smooth Animations**: Integrated AOS (Animate On Scroll) and Framer Motion for engaging user experience
- **Modern UI Components**: Custom-built components with gradient backgrounds and hover effects
- **Professional Typography**: Using Inter font family with carefully crafted typography scale

### 🚀 **Technical Excellence**

- **Next.js 15.2.4**: Built with the latest Next.js App Router for optimal performance
- **React 19**: Leveraging the newest React features and optimizations
- **TailwindCSS 4**: Modern utility-first CSS framework for rapid development
- **Turbopack**: Ultra-fast bundler for lightning-quick development experience

### 🔐 **Authentication**

- **Supabase Integration**: Secure authentication system with Google OAuth
- **User Management**: Real-time authentication state management
- **Protected Routes**: Seamless login/logout functionality

### 📱 **Core Sections**

- **Landing Page**: Eye-catching hero section with parallax scroll effects
- **About Section**: Feature highlights with animated cards
- **Home Pages Showcase**: Demo of available homepage designs
- **Inner Pages Gallery**: Preview of 8+ inner page templates
- **Utility Pages**: Essential pages like License, Style Guide, Password, Changelog
- **Figma Integration**: Request access to editable Figma source files

### 🎯 **Performance Optimized**

- **Image Optimization**: WebP format images for faster loading
- **CSS Modules**: Scoped styling for better performance and maintainability
- **Lazy Loading**: Optimized image and component loading
- **SEO Ready**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

| Technology        | Version | Purpose                         |
| ----------------- | ------- | ------------------------------- |
| **Next.js**       | 15.2.4  | React framework with App Router |
| **React**         | 19.0.0  | UI library                      |
| **TailwindCSS**   | 4.0     | Utility-first CSS framework     |
| **Framer Motion** | Latest  | Animation library               |
| **AOS**           | 2.3.4   | Animate On Scroll library       |
| **Supabase**      | 2.49.4  | Backend as a Service (Auth)     |
| **ESLint**        | 9.0     | Code linting and formatting     |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Supabase account (for authentication features)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd nexus
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
nexus/
├── public/
│   ├── icons/           # SVG icons and brand assets
│   ├── home/           # Homepage showcase images
│   ├── homeImages/     # Landing page carousel images
│   ├── inner/          # Inner pages preview images
│   ├── utility/        # Utility pages preview images
│   └── logo.svg        # Main logo
├── src/
│   ├── app/
│   │   ├── globals.css # Global styles and CSS variables
│   │   ├── layout.js   # Root layout component
│   │   └── page.js     # Main homepage
│   ├── components/
│   │   ├── styles/     # Component-specific CSS modules
│   │   ├── About.jsx   # About section component
│   │   ├── Footer.jsx  # Footer component
│   │   ├── HomePage.jsx    # Home pages showcase
│   │   ├── InnerPage.jsx   # Inner pages gallery
│   │   ├── LandingPage.jsx # Hero/landing section
│   │   ├── Navbar.jsx      # Navigation component
│   │   ├── RequestFigma.jsx # Figma file request section
│   │   └── UtilityPage.jsx  # Utility pages showcase
│   ├── services/
│   │   └── supabase.js # Supabase configuration and auth
│   └── ui/
│       ├── Button.jsx      # Reusable button component
│       ├── ImageBox.jsx    # Image gallery component
│       └── styles/         # UI component styles
└── Configuration files (package.json, next.config.mjs, etc.)
```

## 🎨 Customization

### Styling

- **CSS Variables**: Customize colors, fonts, and spacing in `globals.css`
- **Component Styles**: Individual component styling in `components/styles/`
- **TailwindCSS**: Utility classes for rapid prototyping

### Components

- **Modular Architecture**: Each section is a standalone component
- **Reusable UI**: Button and ImageBox components for consistency
- **Animation Control**: AOS attributes for scroll animations

### Content

- **Images**: Replace images in `/public` directories
- **Text Content**: Update component files for custom content
- **Navigation**: Modify `Navbar.jsx` for custom menu items

## 🔧 Available Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Start development server with Turbopack |
| `npm run build` | Build production application            |
| `npm run start` | Start production server                 |
| `npm run lint`  | Run ESLint for code quality             |

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab
2. Connect your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms

- **Netlify**: Compatible with static export
- **AWS Amplify**: Full-stack deployment support
- **Railway**: Simple deployment with database support

## 📝 Environment Variables

| Variable                        | Description                 | Required |
| ------------------------------- | --------------------------- | -------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | Your Supabase project URL   | Yes      |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes      |

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the [Next.js Documentation](https://nextjs.org/docs)
- **Issues**: Report bugs and feature requests in the [Issues](../../issues) section
- **Figma Files**: Email [support@flownix.co](mailto:support@flownix.co) with purchase receipt

## 🙏 Acknowledgments

- **Design & Development**: [Flownix](https://webflow.com/templates/designers/flownix)
- **Framework**: Built with [Next.js](https://nextjs.org)
- **Deployment**: Powered by [Vercel](https://vercel.com)
- **Backend**: [Supabase](https://supabase.com) for authentication

---

<div align="center">
  <p>Built with ❤️ using Next.js and modern web technologies</p>
  <p>
    <a href="https://webflow.com/templates/designers/flownix">Purchase Template</a> •
    <a href="mailto:support@flownix.co">Support</a> •
    <a href="https://nexus-ai-mu.vercel.app/">Live Demo</a>
  </p>
</div>
