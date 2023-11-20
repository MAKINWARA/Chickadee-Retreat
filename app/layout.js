/* eslint-disable no-unused-vars */
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

import { libre, lato } from '@/styles/fonts'

export const metadata = {
  title: 'Chickadee Retreat',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={`${libre.variable} ${lato.variable}`}>
      <header className='flex flex-col gap-12 items-center pt-32 pb-8 bg-green'>
        <div>Image</div>
        <h1 className='text-white'>Chickadee Retreat Holdings, LLC</h1>
        <NavBar />
    </header>
        {children}
        <Footer />
        </body>
    </html>
  )
}
