import { UserProvider } from '@auth0/nextjs-auth0/client';
import "./globals.css"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import { StoreProvider } from '@/redux/StoreProvider'
// import Cart from "@/function/cart"
// import { useEffect, useState } from "react"

export const metadata = {
  title: 'Apna-Bazaar',
  description: 'Apna Bazaar official website',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className="bg-stone-100">
          <StoreProvider>
            <Navbar />
            {children}
            <Footer />
          </StoreProvider>
        </body>
      </UserProvider>
    </html>
  )
}
