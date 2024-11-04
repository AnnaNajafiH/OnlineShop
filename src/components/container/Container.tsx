import React from 'react';


interface IContainer{
    children: React.ReactNode;
}
//React.ReactNode encompasses all possible types of content that can be rendered by a React component. 
//React Elements, Strings, Numbers, Arrays,Null or Undefined


function Container({children}: IContainer) {
  return (
    <div className='container mx-auto max-w-4xl'>
        {children}
    </div>
  )
}

export default Container