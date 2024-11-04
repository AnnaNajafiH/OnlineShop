import Container from '../../components/container/Container';
import Button from '../../components/button/Button';
import { useParams } from 'react-router-dom';
import {useState, useEffect } from 'react';
import { getProduct } from '../../services/api';
import { IProduct } from '../../types/servers';
import { useShoppingCartContext } from '../../context/ShoppingCartContext';

function Product() {
    const params= useParams<{id:string}>();         // or const { id } = useParams(); 
    // console.log(params);

    const [product, setProduct] = useState<IProduct | null>(null)

    const{handleDecreaseProductQty,handleIncreaseProductQty , cartItems,getProductQty, handleRemoveProduct }=useShoppingCartContext();

    useEffect(()=>{
      getProduct(params.id as string).then(data=>{
        setProduct(data)
      })
    },[])
 console.log(cartItems);
 

  return (
    <div>
        <Container>
          <div className='shadow mt-7 h-96 grid grid-cols-12'>
          <div className=' col-span-2 p-4 bg-slate-200'>
            <img className='rounded' src={product?.image} alt="" />
            
            {
              getProductQty(parseInt(params.id as string)) ===0
            ?<Button 
            className='mt-2 w-full !py-3'
            variant= "primary"
            onClick={()=>
                handleIncreaseProductQty(parseInt(params.id as string))
            }>
                Add to Cart
            </Button>
            :
            <>
                 <div className='grid grid-cols-3'>
              <Button 
            className='mt-2 w-full'
            variant= "primary"
            onClick={()=>
                handleIncreaseProductQty(parseInt(params.id as string))
            }>
                +
            </Button>

            <span className='flex justify-center items-center'>
              {getProductQty(parseInt(params.id as string))}
              </span>

            <Button 
            className='mt-2 w-full'
            variant= "warning"
            onClick={()=>
              handleDecreaseProductQty(parseInt(params.id as string))
            }
            >
                -
            </Button>
            </div>
            <Button 
            className='mt-2 w-full !py-3'
            variant= "danger"
            onClick={()=>handleRemoveProduct(parseInt(params.id as string))}
            >
                Remove Cart
            </Button>
            </>
            }
            
            

           

          </div>
          <div className='h-auto col-span-10 ml-5'>
           <h1 className='font-bold'>{product?.title}</h1>
           <div>
                <p>${product?.price}</p>
                <p>
                    {product?.description}
                </p>
           </div>
          </div>
          </div>
        </Container>
    </div>
  )
}

export default Product  