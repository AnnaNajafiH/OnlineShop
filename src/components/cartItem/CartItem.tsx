import Button from '../button/Button'
import { useEffect, useState } from 'react';
import { getProduct } from '../../services/api';
import { IProduct } from '../../types/servers';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import { Link } from 'react-router-dom';

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
    <div className="flex mt-4 border-b pb-3 shadow">
        <Link to={`/product/${id}`}>
        <img 
        className="rounded w-20"
        src={product?.image} alt="" />
        </Link>
        <div className='ml-9'>
            <h3 className="m-5">{product?.title}</h3>
            <div className='mt-2 ml-5'>
            <Button onClick={()=>handleIncreaseProductQty(id)} variant='primary'>+</Button>
            <span className='mx-2'>{qty}</span>
            <Button onClick={()=>handleDecreaseProductQty(id)} variant='primary'>-</Button>
            <Button onClick={()=>handleRemoveProduct(id)} className='mx-2' variant='danger'>Remove</Button>
            </div>
        </div>

    </div>
  )
}

export default CartItem