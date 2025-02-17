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

function CartItem({ id, qty }: ICartItem) {
  const [product, setProduct] = useState<IProduct>();

  const { handleIncreaseProductQty, handleDecreaseProductQty, handleRemoveProduct } = useShoppingCartContext();

  useEffect(() => {
    getProduct(id).then(data => {
      setProduct(data);
    });
  }, [id]);

  return (
    <div className="flex flex-wrap sm:flex-col gap-4 mt-4 p-4 border rounded-lg shadow-md bg-white">
      
      {/* Product Image with Link */}
      <Link to={`/product/${id}`} className="flex-shrink-0">
        <img 
          className="rounded w-20 sm:w-16 object-cover"
          src={product?.image} 
          alt={product?.title} 
        />
      </Link>

      {/* Product Details */}
      <div className="flex flex-col flex-grow">
        <h3 className="lg:text-lg sm:text-md font-semibold text-gray-600">{product?.title}</h3>

        {/* Quantity & Actions */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-2 mt-2">
          
          {/* Quantity Controls */}
          <div className="flex items-center gap-2">
            <Button 
              onClick={() => handleDecreaseProductQty(id)}
              className="px-3 py-2 bg-blue-800 hover:bg-blue-600 text-white rounded-md"
            >-</Button>

            <span className="text-lg font-semibold">{qty}</span>

            <Button 
              onClick={() => handleIncreaseProductQty(id)}
              className="px-3 py-2 bg-blue-800 hover:bg-blue-600 text-white rounded-md"
            >+</Button>
          </div>

          {/* Remove Button */}
          <Button 
            onClick={() => handleRemoveProduct(id)} 
            className="p-3 bg-red-700 hover:bg-red-500 text-white rounded-md"
          >
            <FaTrash style={{ fontSize: '20px' }} /> 
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
