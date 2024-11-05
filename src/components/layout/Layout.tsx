import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer';

interface ILayout{
    children: React.ReactNode;
}   

const Layout = ({children}: ILayout) => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
        <Navbar />
        <main className='flex-grow container mx-auto px-4 py-2'>
        {children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout