import Button from '../button/Button'
import { useEffect, useState } from 'react';
import { getProduct } from '../../services/api';
import { IProduct } from '../../types/servers';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

interface ICartItem {
    id: number;
    qty: number;
}

function CartItem({id,qty}:ICartItem ){

  const [product, setProduct] = useState<IProduct>();

  const {handleIncreaseProductQty,handleDecreaseProductQty,handleRemoveProduct}=useShoppingCartContext();

    useEffect(()=>{
      getProduct(id).then(data=>{
       setProduct(data)
      })
    },[])


  return (
    <div className="flex mt-2">
        <Link to={`/product/${id}`}>
        <img 
        className="rounded w-20"
        src={product?.image} alt="" />
        </Link>
        <div className='ml-8'>
            <h3 className="m-5">{product?.title}</h3>
            <div className=' flex items-center gap-9 ml-6'>
            <div className="flex gap-2 items-center">
              <Button onClick={()=>handleIncreaseProductQty(id)} 
            className="px-4 py-2 bg-blue-800 hover:bg-blue-600 text-white rounded-md">+
            </Button>
            <span className='mx-2'>{qty}</span>
            <Button onClick={()=>handleDecreaseProductQty(id)} 
            className="px-4 py-2 bg-blue-800 hover:bg-blue-600 text-white rounded-md"
            >-</Button>
            </div>

            <Button onClick={()=>handleRemoveProduct(id)} 
            className=" py-3 bg-red-700 hover:bg-red-500 text-white rounded-md ml-4">
            <FaTrash style={{ fontSize: '24px', color: 'white' }} /> 
            </Button>
            </div>
        </div>

    </div>
  )
}

export default CartItem