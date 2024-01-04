import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import './globals.css'
import ReduxProvider from './provider/reduxProvider'
import BgImage from '../public/assets/images/bg.jpg'
import Nav from './components/Nav'
import Footer from './components/Footer'

const inter = Noto_Sans_Thai({ subsets: ['thai'] })

export const metadata: Metadata = {
  title: 'ระบบกำลังพล กพ.ทบ.',
  description: 'ระบบกำลังพล กพ.ทบ.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReduxProvider>
      <html lang="en" data-theme="cupcake">
        <body className={inter.className}>

          <div className="flex min-h-screen flex-col items-center justify-between p-2"
            style={{
              backgroundImage: `url(${BgImage.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',

            }}
          >
            <Nav />
            <main>
              {children}
            </main>
            <Footer />
          </div>
        </body>
      </html>
    </ReduxProvider>
  )
}
