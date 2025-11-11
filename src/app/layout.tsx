import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cerrado Musical',
  description: 'Portal musical moderno com entrevistas exclusivas e bastidores únicos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />        <main className="min-h-screen pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}