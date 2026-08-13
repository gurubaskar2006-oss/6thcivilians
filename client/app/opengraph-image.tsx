import { ImageResponse } from 'next/og'
import { brand } from '@/data/content'

export const runtime = 'edge'

export const alt = brand.name
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#060806',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            opacity: 0.5,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: '-0.05em',
              color: '#ffffff',
              marginBottom: 20,
            }}
          >
            {brand.name}
          </div>

          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: '#39FF8A',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            {brand.tagline}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
