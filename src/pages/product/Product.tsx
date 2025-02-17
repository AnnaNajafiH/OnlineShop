import Container from '../../components/container/Container';
import Button from '../../components/button/Button';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProduct } from '../../services/api';
import { IProduct } from '../../types/servers';
import { Link } from 'react-router-dom';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';
import { FaShoppingCart, FaTrash } from 'react-icons/fa'; 

function Product() {
  const params = useParams<{ id: string }>();
  // console.log(params);
  // console.log(params.id);
  const [product, setProduct] = useState<IProduct | null>(null);
  
  const { handleDecreaseProductQty, handleIncreaseProductQty, cartItems, getProductQty, handleRemoveProduct } = useShoppingCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      // console.log(data);
      // console.log(data.rating);
      setProduct(data);
    });
  }, []);

  return (
    <Container>  
      <div className="grid grid-cols-1 lg:grid-cols-12 overflow-hidden min-h-screen shadow-lg rounded-lg bg-white">
        
        {/* Product Image Section */}
        <div className="lg:col-span-5 flex justify-center items-center p-6">
          <img className="rounded-lg w-full max-w-xs object-cover" src={product?.image} alt={product?.title} />
        </div>

        {/* Product Details Section */}
        <div className="lg:col-span-7 p-6 sm:p-4 lg:space-y-8 space-y-4 bg-slate-50">
          <h1 className="font-bold text-gray-600 hover:text-blue-800 lg:text-lg sm:text-md px-7  mt-7">
            {product?.title}
          </h1>
          <p className="text-green-600 font-semibold lg:text-xl sm:text-lg px-7">
            ${product?.price}
          </p>
          <p className="text-gray-600 leading-relaxed text-justify lg:text-lg sm:text-sm px-7">
            {product?.description}
          </p>

          {/* Cart Controls */}
          <div className="flex flex-wrap items-center justify-center mt-6 gap-4 sm:gap-2">
            {getProductQty(parseInt(params.id as string)) === 0 ? (
              <Button
                className="py-3 px-6 bg-blue-800 hover:bg-blue-600 text-white rounded-md"
                onClick={() => handleIncreaseProductQty(parseInt(params.id as string))}
              >
                Add to Cart
              </Button>
            ) : (
              <div className="flex flex-wrap items-center lg:gap-6 sm:gap-1">
                
                {/* Quantity Controls */}
                <div className="flex items-center lg:gap-2 sm:gap-1">
                  <Button
                    className="px-4 py-2 bg-blue-800 hover:bg-blue-600 text-white rounded-md"
                    onClick={() => handleDecreaseProductQty(parseInt(params.id as string))}
                  >
                    -
                  </Button>
                  <span className="text-lg font-semibold text-gray-600">
                    {getProductQty(parseInt(params.id as string))}
                  </span>
                  <Button
                    className="px-4 py-2 bg-blue-800 hover:bg-blue-600 text-white rounded-md"
                    onClick={() => handleIncreaseProductQty(parseInt(params.id as string))}
                  >
                    +
                  </Button>
                </div>

                {/* Remove Button */}
                <Button
                  className="py-3 bg-red-700 hover:bg-red-500 text-white rounded-md"
                  onClick={() => handleRemoveProduct(parseInt(params.id as string))}
                >
                  <FaTrash style={{ fontSize: '24px', color: 'white' }} />  
                </Button>

                {/* Go to Cart Button */}
                <div className='w-auto'>
                <Link to={`/cart`}>
                  <Button className="w-full py-3 bg-yellow-700 hover:bg-yellow-600 text-white rounded-md ">
                    Go to Cart
                  </Button>
                </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Product;
