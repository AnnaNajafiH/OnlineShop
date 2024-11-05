

import { Link, useNavigate } from 'react-router-dom'
import Container from '../container/Container'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import { FaShoppingCart } from 'react-icons/fa'; 
import { useState } from 'react';

function Navbar() {
const{cartQty, handleLogout,isLoggedIn}=useShoppingCartContext();
const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // For navigation after logout

const handleLogoutAndCloseMenu = () => {
    setIsMenuOpen(false); // Close the menu
    handleLogout();       // Call the logout function
    navigate('/login');   // Redirect to login page after logout
  };

   const handleLogin = () => {
    setIsMenuOpen(false); // Close the dropdown menu
    navigate('/login');   // Navigate to the login page
  };
  
  return (
    <div className='h-18 border-b shadow flex items-center bg-white'>
        <Container>
        <div className='flex justify-between items-center'>
     {/* Left Side - Navigation Links */}
        <ul className='flex space-x-6 text-lg font-semibold text-gray-600'>
        <li className='hover:text-gray-800 transition duration-200'>
            <Link to="/" >Home</Link>
        </li>
        <li className='hover:text-gray-800 transition duration-200'>
            <Link to="/store">Store</Link>
        </li>
    </ul>
    {/* Right Side - User Menu and Cart Icon */}
    <div className='flex items-center space-x-4'>
        {/* User Menu */}
        <div className='relative'>
            <button onClick={() => setIsMenuOpen (!isMenuOpen)}
                className='font-semibold text-gray-600 hover:text-gray-800'>
                    Account
            </button>
            {isMenuOpen && (
              <div className='absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg'>
                <ul className='text-sm font-semibold text-gray-600'>
                  {isLoggedIn ? ( // Check if user is logged in
                    <li>
                      <button
                        className='px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left'
                        onClick={handleLogoutAndCloseMenu} // Logout with menu close
                      >
                        Logout
                      </button>
                    </li>
                  ) : (
                    <li>
                      <button
                        className='px-4 py-2 hover:bg-gray-100 cursor-pointer w-full text-left'
                        onClick={handleLogin} // Navigate to login page
                      >
                        Login
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            )}
            {/* {isMenuOpen && (
                <div className='absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg'>
                    <div className='text-sm text-gray-600'>
                        <button className='px-4 py-2 hover:font-semibold cursor-pointer'
                        onClick={handleLogoutAndCloseMenu}>
                            Logout
                        </button>
                    </div>
                </div>
            )} */}
        </div>
        {/* Cart Icon */}
        <Link to="/cart" className='relative flex items-center'>
        <button aria-label="Cart" className='text-gray-600 hover:text-gray-800 transition duration-200'>
                <FaShoppingCart size={26} /></button>
         {cartQty > 0 && (
                <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs'>
                  {cartQty}
                </span>
              )}
        </Link>
    </div>
    </div>
        </Container>
    </div>
  );
}

export default Navbar