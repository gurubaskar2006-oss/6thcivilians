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
    '6th Civilians',
    'Custom Software Development',
    'Mobile App Development',
    'Web Application Development',
    'AI & Machine Learning',
    'Cloud Architecture',
    'IoT Solutions',
    'Embedded Systems',
    'EV Technology',
    'IT Consulting',
    'Deep Tech Studio',
    'Quantum-inspired Research',
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
  openGraph: {
    title: '6th Civilians | Deep Tech, Software, AI & IoT Solutions',
    description:
      'A deep-tech studio delivering software, cloud, AI, IoT, and quantum-inspired solutions from first principle to production.',
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
  colorScheme: 'light',
  themeColor: '#F7F8F9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <CursorGlow />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
