import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AYUSH | SOFTWARE DEVELOPER',
  description: 'I am a passionate software developer who loves to build innovative web applications.',
  viewport: 'width=device-width, initial-scale=1',

  // Open Graph
  openGraph: {
    title: 'AYUSH | SOFTWARE DEVELOPER',
    description: 'I am a passionate software developer who loves to build innovative web applications.',
    images: [
      {
        url: 'https://raw.githubusercontent.com/ayushsgithub/linkshree/main/public/ssPage.png',
        width: 600,
        height: 600,
      },
    ],
    type: 'website',
    url: 'https://ayushsport.netlify.app',
    siteName: 'AYUSH | SOFTWARE DEVELOPER',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'AYUSH | SOFTWARE DEVELOPER',
    description: 'I am a passionate software developer who loves to build innovative web applications.',
    images: 'https://raw.githubusercontent.com/ayushsgithub/linkshree/main/public/ssPage.png', 
    site: '@ayushisreal', 
    creator: '@ayushisreal', 
  },
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>{children}</body>
    </html>
  )
}
