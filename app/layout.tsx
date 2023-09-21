import './globals.css'
import Navbar from './components/Navbar'
import MyProfile from './components/MyProfile'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Phuong's Blog",
  description: 'Practice with NextJS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark: bg-slate-800">
        <Navbar></Navbar>
        <MyProfile/>
        {children}
      </body>
    </html>
  )
}
