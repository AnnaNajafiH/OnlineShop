import React from 'react'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import { Navigate, Outlet } from 'react-router-dom'

function PrivateRoute() {
  const {isLoggedIn} = useShoppingCartContext()
  return (
    <>
  {
    isLoggedIn ? <Outlet/> : <Navigate to='/login'/>
  }
    </>
  )
}

export default PrivateRoute