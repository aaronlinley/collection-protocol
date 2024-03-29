import './globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import Providers from './providers'

export const metadata = {
  title: 'Collection Protocol',
}

const inter = Inter({ weight: ['400', '500', '700'], subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-none bg-slate-200 ${inter.className}`}>
        <Providers>{children}</Providers>
        <p className="text-center text-sm p-4 text-primary">This site is in no way affiliated with Marvel, Disney, or Atomic Mass Games.</p>
        <Analytics />
      </body>
    </html>
  )
}
