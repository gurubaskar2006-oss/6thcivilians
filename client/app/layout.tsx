import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Syne, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  fallback: ['-apple-system', 'Segoe UI', 'sans-serif'],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700'],
  fallback: ['Plus Jakarta Sans', 'sans-serif'],
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
  weight: ['600', '700', '800'],
  fallback: ['Georgia', 'sans-serif'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
  fallback: ['Consolas', 'monospace'],
})

export const metadata: Metadata = {
  title: '6th Civilians Corporation | Enterprise Software, AI & Cloud Engineering',
  description:
    '6th Civilians Corporation is a premier technology corporation engineering custom enterprise software, artificial intelligence systems, cloud architectures, and digital products.',
  generator: 'Next.js',
  keywords: [
    '6th Civilians Corporation',
    '6th Civilians Corp',
    '6th Civilians',
    '6thcivilians',
    'software engineering corporation',
    'enterprise software development',
    'custom software engineering',
    'applied artificial intelligence',
    'cloud infrastructure architecture',
    'technology consulting',
  ],
  authors: [{ name: '6th Civilians Corporation' }],
  creator: '6th Civilians Corporation',
  publisher: '6th Civilians Corporation',
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
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: '#073B32',
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
        name: 'EDWTH Academy',
        url: 'https://academy.6thcivilians.com',
        description:
          'EDWTH Academy — Education Division of 6th Civilians Corporation, delivering technical training and talent development.',
      },
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://6thcivilians.com/#website',
    name: '6th Civilians Corporation',
    alternateName: ['6th Civilians Corp', '6th Civilians', '6C', '6thcivilians'],
    url: 'https://6thcivilians.com',
    publisher: {
      '@id': 'https://6thcivilians.com/#organization',
    },
  }

  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${spaceGrotesk.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
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
      <body className="bg-background text-foreground antialiased font-sans selection:bg-[#073B32] selection:text-[#F7F7F2]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
