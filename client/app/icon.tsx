import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const runtime = 'nodejs'

export const size = {
  width: 48,
  height: 48,
}

export const contentType = 'image/png'

export default async function Icon() {
  const imagePath = path.join(process.cwd(), 'public/nav-logo.png')
  const imageData = fs.readFileSync(imagePath)
  const imageBase64 = `data:image/png;base64,${imageData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <img 
          src={imageBase64} 
          style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
