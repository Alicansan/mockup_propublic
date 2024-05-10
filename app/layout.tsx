import type { Metadata } from 'next'
import { Teko, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const teko = Teko({
  subsets: ['latin'],
  variable: '--font-teko',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

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
      <body
        className={`${teko.variable} ${inter.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
