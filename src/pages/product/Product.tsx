import Container from '../../components/container/Container';
import Button from '../../components/button/Button';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProduct } from '../../services/api';
import { IProduct } from '../../types/servers';
import { Link } from 'react-router-dom';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';

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

            <div className="mt-8 space-y-4">
              {getProductQty(parseInt(params.id as string)) === 0 ? (
                <Button
                  className="w-full py-3 bg-blue-800 hover:bg-blue-600 text-white rounded-md"
                  onClick={() => handleIncreaseProductQty(parseInt(params.id as string))}
                >
                  Add to Cart
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2 items-center">
                    <Button
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                      onClick={() => handleDecreaseProductQty(parseInt(params.id as string))}
                    >
                      -
                    </Button>
                    
                    <span className="text-center text-xl font-semibold text-gray-800">
                      {getProductQty(parseInt(params.id as string))}
                    </span>
                    <Button
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                      onClick={() => handleIncreaseProductQty(parseInt(params.id as string))}
                    >
                      +
                    </Button>
                  </div>

                  <Button
                    className="w-full py-3 bg-red-500 hover:bg-red-600 text-white rounded-md"
                    onClick={() => handleRemoveProduct(parseInt(params.id as string))}
                  >
                    Remove from Cart
                  </Button>
                </div>
              )}
            <Link to={`/cart`} >
            <button className="w-full py-1 my-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md">go to cart</button>
            </Link>
            </div>
          </div>
        </div>
        
      </Container>
  );
}

export default Product;
 



