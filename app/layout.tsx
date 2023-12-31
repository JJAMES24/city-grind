import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import CookieBanner from '@/components/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'City Grind Cafe',
  description: 'City Grind Cafe, Coffee, Cafe, City Grind, Modern',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <GoogleAnalytics GA_MEASUREMENT_ID='G-WM2YR0RBEJ'/>
        {children}
        <CookieBanner/>
      </body>
    </html>
  )
}
