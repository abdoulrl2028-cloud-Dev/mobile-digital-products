import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mobile Digital Products | React Native & Expo Development',
  description: 'Experience designing and developing mobile applications using modern cross-platform technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
