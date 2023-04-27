import './globals.css'
import { Roboto } from 'next/font/google'

import Providers from './providers'

export const metadata = {
  title: 'Collection Protocol',
}

const roboto = Roboto({ weight: ['400', '700'], style: ['italic', 'normal'], subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-none bg-slate-200 ${roboto.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
