import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { CursorGlow } from '@/components/cursor-glow'
import './globals.css'

// NOTE: next/font/google fetches font files from fonts.googleapis.com at build time.
// This is optimal for performance (self-hosting behavior on Vercel), but it will
// fail builds in network-restricted environments (e.g. offline CI runners, sandboxed builds).
// If your build fails here without network access, you should switch to locally hosted
// font files (@font-face in globals.css) as an alternative.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['-apple-system', 'Segoe UI', 'sans-serif'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  fallback: ['-apple-system', 'Segoe UI', 'sans-serif'],
})

export const metadata: Metadata = {
  title: '6th Civilians Corporation | Enterprise Software, AI & Cloud Engineering',
  description:
    '6th Civilians Corporation is a premier technology corporation engineering custom enterprise software, artificial intelligence systems, cloud architectures, and digital products.',
  generator: 'Next.js',
  keywords: [
    // Brand
    '6th Civilians Corporation',
    '6th Civilians Corp',
    '6th Civilians',
    '6thcivilians',
    '6th Civilians Corporation technology',
    '6th Civilians Corporation software',
    '6th Civilians Corporation enterprise systems',

    // Software engineering
    'software engineering corporation',
    'enterprise software development',
    'custom software engineering',
    'software product development',
    'web application development',
    'backend systems engineering',
    'API development and integration',
    'cloud-native software architecture',

    // Artificial intelligence
    'artificial intelligence solutions',
    'applied machine learning',
    'generative AI systems',
    'intelligent automation software',
    'enterprise AI engineering',
    'autonomous agent workflows',

    // Cloud & infrastructure
    'cloud solutions',
    'cloud infrastructure architecture',
    'DevOps engineering',
    'CI/CD automation',
    'system architecture consulting',
    'distributed systems',

    // Digital products & consulting
    'digital product development',
    'SaaS platform engineering',
    'UI/UX engineering',
    'technology consulting',
    'digital transformation advisory',
  ],
  authors: [{ name: '6th Civilians Corporation' }],
  creator: '6th Civilians Corporation',
  publisher: '6th Civilians Corporation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://6thcivilians.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icon-64x64.png', sizes: '64x64', type: 'image/png' },
      { url: '/icon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: '6th Civilians Corporation | Enterprise Software, AI & Cloud Engineering',
    description:
      '6th Civilians Corporation builds custom software, enterprise systems, AI-driven architectures, and scalable cloud solutions for organizations.',
    url: 'https://6thcivilians.com',
    siteName: '6th Civilians Corporation',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '6th Civilians Corporation | Enterprise Software & AI Engineering',
    description:
      'Engineering enterprise software, intelligent systems, digital products, and cloud infrastructure for organizations.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0C10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Corporation',
    '@id': 'https://6thcivilians.com/#organization',
    name: '6th Civilians Corporation',
    url: 'https://6thcivilians.com',
    logo: 'https://6thcivilians.com/icon.png',
    description:
      '6th Civilians Corporation is a technology corporation focused on enterprise software development, artificial intelligence systems, cloud architectures, and digital product engineering.',
    department: [
      {
        '@type': 'EducationalOrganization',
        name: 'Ewdth Academy',
        url: 'https://academy.6thcivilians.com',
        description: 'Ewdth Academy — Education Division of 6th Civilians Corporation, delivering technical training and talent development.',
      },
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://6thcivilians.com/#website',
    name: '6th Civilians Corporation',
    alternateName: [
      '6th Civilians Corp',
      '6th Civilians',
      '6C',
      '6thcivilians',
    ],
    url: 'https://6thcivilians.com',
    publisher: {
      '@id': 'https://6thcivilians.com/#organization',
    },
  }

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <CursorGlow />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
