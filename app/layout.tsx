import type { Metadata } from 'next'
import { Teko } from 'next/font/google'
import './globals.css'

const teko = Teko({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Propublic',
  description: 'Unleash Your Gaming Potential',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={teko.className}>
        {children}
      </body>
    </html>
  )
}
