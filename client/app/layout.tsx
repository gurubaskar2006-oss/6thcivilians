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
  title: '6th Civilians | Deep Tech, Software, AI & IoT Solutions',
  description:
    '6th Civilians is a deep-tech studio engineering end-to-end solutions spanning custom software development, mobile apps, AI & machine learning, cloud architecture, IoT, and EV technology.',
  generator: 'Next.js',
  keywords: [
    // Brand
    '6th Civilians',
    '6thcivilians',
    '6th Civilians technology',
    '6th Civilians software',
    '6th Civilians deep tech',

    // Core positioning
    'deep tech',
    'deep tech studio',
    'deep tech company',
    'deep tech solutions',
    'deep technology',
    'technology innovation',
    'technology solutions',
    'technology consulting',

    // Software engineering
    'software engineering',
    'software engineering services',
    'custom software development',
    'custom software solutions',
    'software development company',
    'software product development',
    'web application development',
    'business application development',
    'API development',
    'custom API development',

    // Artificial intelligence
    'artificial intelligence',
    'AI solutions',
    'AI development',
    'AI software development',
    'AI engineering',
    'machine learning development',
    'machine learning solutions',
    'AI integration',

    // IoT
    'IoT solutions',
    'IoT development',
    'IoT software development',
    'IoT product development',
    'IoT systems',
    'IoT engineering',
    'connected device development',

    // Cloud
    'cloud solutions',
    'cloud architecture',
    'cloud application development',
    'cloud engineering',
    'cloud infrastructure',

    // Applications
    'mobile app development',
    'mobile application development',
    'Android app development',
    'iOS app development',
    'custom mobile app development',

    // Emerging / specialized technology
    'quantum-inspired technology',
    'quantum-inspired solutions',
    'emerging technology',
    'advanced technology solutions',
    'first-principles engineering',
  ],
  authors: [{ name: '6th Civilians' }],
  creator: '6th Civilians',
  publisher: '6th Civilians',
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
      { url: '/favicon.ico', sizes: 'any' }, // fallback
    ],
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: '6th Civilians | Deep Tech, Software, AI & IoT Solutions',
    description:
      'A deep-tech studio delivering software, cloud, AI, IoT, and quantum-inspired solutions from first principles to production.',
    url: 'https://6thcivilians.com',
    siteName: '6th Civilians',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '6th Civilians | Deep Tech & Software Engineering',
    description: 'A deep-tech studio delivering software, cloud, AI, IoT, and quantum-inspired solutions end to end.',
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
    '@type': 'Organization',
    '@id': 'https://6thcivilians.com/#organization',
    name: '6th Civilians',
    url: 'https://6thcivilians.com',
    logo: 'https://6thcivilians.com/icon.png',
    description:
      '6th Civilians is a deep-tech engineering studio focused on software, artificial intelligence, machine learning, IoT, cloud and emerging technology solutions.',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://6thcivilians.com/#website',
    name: '6th Civilians',
    alternateName: [
      '6C',
      '6thcivilians'
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
