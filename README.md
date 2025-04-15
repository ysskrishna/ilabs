# iLabs

A free and open source tool for generating beautiful Open Graph images, Twitter/X headers, and blog covers - no signup required.

## 🌟 Features

- **Multiple Template Types**

  - Open Graph Images
  - Twitter/X Headers
  - Blog Cover Images
  - Custom Templates

- **Rich Customization**

  - Custom backgrounds (solid colors & gradients)
  - Grid and noise overlays
  - Logo upload support
  - Professional typography
  - Multiple export formats (PNG, JPEG, WebP)

- **Developer Experience**
  - Ready-to-use HTML meta tags
  - Next.js App Router integration
  - Real-time preview
  - No authentication required
  - Free and open source

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ysskrishna/ilabs
cd ilabs
```

2. Install dependencies:

```bash
pnpm install
```

3. Set up environment variables in `.env.local`:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_GOOGLE_ID=
NEXT_PUBLIC_GOOGLE_ADSENSE_ID=
```

4. Start the development server:

```bash
pnpm dev
```

## 🛠️ Tech Stack

- [Next.js 15](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Satori](https://github.com/vercel/satori)
- [Zod](https://zod.dev/)

## 📖 Usage

1. Choose a template type (OG Image, Twitter Header, or Blog Cover)
2. Customize your content (text, colors, images)
3. Preview in real-time
4. Export in your preferred format
5. Use the generated meta tags in your project

### Example Meta Tags

```html
<meta property="og:title" content="Your Page Title" />
<meta property="og:description" content="Your page description" />
<meta property="og:image" content="https://yourdomain.com/og.png" />
<meta property="og:url" content="https://yourdomain.com" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://yourdomain.com/og.png" />
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

Copyright (c) 2025 Y. Siva Sai Krishna

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0) License - see the [LICENSE](LICENSE) file for details.

---

Built by [ysskrishna](https://github.com/ysskrishna)

This project is inspired by and built upon

[ogImage.click](https://weijunext/ogimage-click)
[imgsrc-app](https://github.com/FadyMak/imgsrc-app)
