import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer';

interface ILayout{
    children: React.ReactNode;
}   

const Layout = ({children}: ILayout) => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-100'>
    {/* <div> */}
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Layout