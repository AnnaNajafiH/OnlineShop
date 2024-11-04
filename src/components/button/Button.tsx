import { ComponentProps } from 'react'

type TVariant= 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';  //union type
type TButton =  ComponentProps<'button'> & {
  variant?: TVariant;  
}    


function Button({ children, variant, style, ...rest}: TButton) {

  // console.log(checkVariant(variant));
  
  return (
    <button {...rest} style={{borderRadius:'6px', padding:'4px 8px', ...style,...checkVariant(variant)}}>    
        {children}    
    </button>
  )
}


function checkVariant (variant?:TVariant){
 if (variant === 'primary'){
   return {backgroundColor: '#00abff', color: 'white'}
 }
  else if (variant === 'secondary'){
    return {backgroundColor: 'gray', color: 'white'}
  }
  else if (variant === 'danger'){
    return {backgroundColor: 'red', color: 'white'}
  }
  else if (variant === 'success'){
    return {backgroundColor: 'green', color: 'white'}
  }
  else if (variant === 'warning'){
    return {backgroundColor: 'orange', color: 'white'}
  }
  else if (variant === 'info'){
    return {backgroundColor: 'blue', color: 'white'}
  }
  
}

export default Button



