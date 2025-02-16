import React from 'react';


interface IContainer {
    children: React.ReactNode;}
    
function Container({children}: IContainer) {
  return (
    <div className='container mx-auto px-10 py-6 bg-white rounded-lg shadow-md border border-gray-200'>
        {children}
    </div>
  )
}
export default Container