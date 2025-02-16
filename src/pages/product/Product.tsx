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
  // console.log(params)
  const [product, setProduct] = useState<IProduct | null>(null);
// console.log(product);
  

  const { handleDecreaseProductQty, handleIncreaseProductQty, cartItems, getProductQty, handleRemoveProduct } = useShoppingCartContext();
  console.log(cartItems);


  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      // console.log(data);
      setProduct(data);
    });
  }, []);

  return (
        <Container>  
        <div className="shadow-lg rounded-lg grid grid-cols-12 overflow-hidden min-h-screen">
          {/* Product Image Section */}
          <div className="col-span-5 bg-white flex justify-center items-center mx-4">
            <img className="rounded-lg w-70 h-70 object-cover" src={product?.image} alt={product?.title} />
          </div>

          {/* Product Details Section */}
        <div className="col-span-7 p-10 space-y-6 bg-slate-50">
            <h1 className="font-bold text-gray-600 hover:text-blue-800 lg:text-xl md:text-l sm:text-md">{product?.title}</h1>
            <p className="text-green-600 font-semibold lg:text-xl md:text-l sm:text-md">${product?.price}</p>
            <p className="text-gray-700 leading-relaxed lg:text-l md:text-md sm:text-md">{product?.description}</p>

            <div className="flex flex-row  mt-8 justify-center items-center">
              {getProductQty(parseInt(params.id as string)) === 0 ? (
    // Add to Cart Button (Before Adding Product)
                <Button
                  className="py-3 px-6 bg-blue-800 hover:bg-blue-600 text-white rounded-md"
                  onClick={() => handleIncreaseProductQty(parseInt(params.id as string))}
                >
                  Add to Cart
                </Button>
              ) : (
    // When Product is in Cart (Show - Qty + Remove)
                <div className="flex items-center gap-9">
                  <div className=" flex gap-2 items-center">
                    <Button
                      className="px-4 py-2 bg-blue-800 hover:bg-blue-600 text-white rounded-md"
                      onClick={() => handleDecreaseProductQty(parseInt(params.id as string))}
                    >
                      -
                    </Button>
                    
                    <span className="text-xl font-semibold text-gray-800">
                      {getProductQty(parseInt(params.id as string))}
                    </span>
                    <Button
                      className="px-4 py-2 bg-blue-800 hover:bg-blue-600 text-white rounded-md"
                      onClick={() => handleIncreaseProductQty(parseInt(params.id as string))}
                    >
                      +
                    </Button>
                  </div>

                  <Button
                    className=" py-3 bg-red-700 hover:bg-red-500 text-white rounded-md"
                    onClick={() => handleRemoveProduct(parseInt(params.id as string))}
                  >
                    <FaTrash style={{ fontSize: '24px', color: 'white' }} />  
                  </Button>
                    <Link to={`/cart`} >
                  <Button className="w-full py-1 my-2 mx-4 bg-yellow-700 hover:bg-yellow-600 text-white rounded-md">
                   go to cart
                  </Button>
            </Link>
                </div>
              )}
          
            </div>
          </div>
        </div>
        
      </Container>
  );
}

export default Product;
 



