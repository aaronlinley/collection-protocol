import './globals.css'
import { Inter } from 'next/font/google'

import Providers from './providers'

export const metadata = {
  title: 'Collection Protocol',
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-none bg-slate-200 ${inter.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
