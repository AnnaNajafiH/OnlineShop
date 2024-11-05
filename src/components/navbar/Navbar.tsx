import { Link } from 'react-router-dom'
import Container from '../container/Container'
import { useShoppingCartContext } from '../../context/ShoppingCartContext'
import { FaShoppingCart } from 'react-icons/fa'; // 'fa' is Font Awesome


function Navbar() {
const{cartQty, handleLogout}=useShoppingCartContext();

  return (
    <div className='h-14 border-b shadow flex items-center'>
        <Container>
    <div className='flex justify-between items-center'>
        <ul className='flex'>
        <li>
            <Link to="/" >Home</Link>
        </li>
        <li className='ml-4'>
            <Link to="/store">Store</Link>
        </li>
    </ul>
    <div>
        <button onClick={handleLogout}>LogOut</button>
        <Link className='relative' to="/cart">
        <button><FaShoppingCart size={30}/></button>
        <span className='absolute bg-red-500 text-white rounded-full px-2 flex justify-center items-center -top-5  -right-4 text-sm'>{cartQty !==0 ?cartQty : "0"}</span>
        </Link>
    </div>
    </div>
        </Container>
    </div>
  )
}

export default Navbar