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
  const [product, setProduct] = useState<IProduct | null>(null);

  const { handleDecreaseProductQty, handleIncreaseProductQty, cartItems, getProductQty, handleRemoveProduct } = useShoppingCartContext();

  useEffect(() => {
    getProduct(params.id as string).then((data) => {
      setProduct(data);
    });
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <Container>
        <div className="shadow-lg rounded-lg bg-white grid grid-cols-12 overflow-hidden">
          {/* Product Image Section */}
          <div className="col-span-5 bg-white flex justify-center items-center p-2">
            <img className="rounded-lg w-70 h-70 object-cover" src={product?.image} alt={product?.title} />
          </div>

          {/* Product Details Section */}
          <div className="col-span-7 p-8 space-y-6 bg-slate-50">
            <h1 className="text-3xl font-bold text-gray-800">{product?.title}</h1>
            <p className="text-xl text-green-600 font-semibold">${product?.price}</p>
            <p className="text-gray-700 text-md leading-relaxed">{product?.description}</p>

            <div className="mt-8 space-y-4">
              {getProductQty(parseInt(params.id as string)) === 0 ? (
                <Button
                  className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                  onClick={() => handleIncreaseProductQty(parseInt(params.id as string))}
                >
                  Add to Cart
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-2 items-center">
                    <Button
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                      onClick={() => handleIncreaseProductQty(parseInt(params.id as string))}
                    >
                      +
                    </Button>
                    <span className="text-center text-xl font-semibold text-gray-800">
                      {getProductQty(parseInt(params.id as string))}
                    </span>
                    <Button
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                      onClick={() => handleDecreaseProductQty(parseInt(params.id as string))}
                    >
                      -
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
    </div>
  );
}

export default Product;
 





// import Container from '../../components/container/Container';
// import Button from '../../components/button/Button';
// import { useParams } from 'react-router-dom';
// import {useState, useEffect } from 'react';
// import { getProduct } from '../../services/api';
// import { IProduct } from '../../types/servers';
// import { useShoppingCartContext } from '../../context/ShoppingCartContext';

// function Product() {
//     const params= useParams<{id:string}>();         // or const { id } = useParams(); 
//     // console.log(params);

//     const [product, setProduct] = useState<IProduct | null>(null)

//     const{handleDecreaseProductQty,handleIncreaseProductQty , cartItems,getProductQty, handleRemoveProduct }=useShoppingCartContext();

//     useEffect(()=>{
//       getProduct(params.id as string).then(data=>{
//         setProduct(data)
//       })
//     },[])
//  console.log(cartItems);
 

//   return (
//     <div>
//         <Container>
//           <div className='shadow mt-7 h-96 grid grid-cols-12'>
//           <div className=' col-span-2 p-4 bg-slate-200'>
//             <img className='rounded' src={product?.image} alt="" />
            
//             {
//               getProductQty(parseInt(params.id as string)) ===0
//             ?<Button 
//             className='mt-2 w-full !py-3'
//             variant= "primary"
//             onClick={()=>
//                 handleIncreaseProductQty(parseInt(params.id as string))
//             }>
//                 Add to Cart
//             </Button>
//             :
//             <>
//                  <div className='grid grid-cols-3'>
//               <Button 
//             className='mt-2 w-full'
//             variant= "primary"
//             onClick={()=>
//                 handleIncreaseProductQty(parseInt(params.id as string))
//             }>
//                 +
//             </Button>

//             <span className='flex justify-center items-center'>
//               {getProductQty(parseInt(params.id as string))}
//               </span>

//             <Button 
//             className='mt-2 w-full'
//             variant= "primary"
//             onClick={()=>
//               handleDecreaseProductQty(parseInt(params.id as string))
//             }
//             >
//                 -
//             </Button>
//             </div>
//             <Button 
//             className='mt-2 w-full !py-3'
//             variant= "danger"
//             onClick={()=>handleRemoveProduct(parseInt(params.id as string))}
//             >
//                 Remove Cart
//             </Button>
//             </>
//             }
            
            

           

//           </div>
//           <div className='h-auto col-span-10 ml-5'>
//            <h1 className='font-bold'>{product?.title}</h1>
//            <div>
//                 <p>${product?.price}</p>
//                 <p>
//                     {product?.description}
//                 </p>
//            </div>
//           </div>
//           </div>
//         </Container>
//     </div>
//   )
// }

// export default Product  