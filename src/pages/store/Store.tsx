import {useState, useEffect } from 'react'
import ProductItem from '../../components/productItem/ProductItem'
import Container from '../../components/container/Container'
import { Link } from 'react-router-dom'
import { IProduct } from '../../types/servers'

import { getProducts } from '../../services/api'
const Store = () => {
  const [products, setProducts] = useState<IProduct[]>([]);


  useEffect(() => {
    getProducts().
    then((result)=>
      {setProducts(result);
      })
    .catch((error)=>{
    });
  },[])

  console.log(products[0]?.title);
  
  return (

    <div>
      <h1 className='text-gray-800 text-2xl font-bold justify-center text-center mt-8 mb-6'>The newest Products</h1>
      
     <Container>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-4'>

        {products.map((item)=>(
           <Link key={item.id} to={`/product/${item.id}`} className='transition-transform transform hover:scale-105'>
          <ProductItem {...item}/>
        </Link>
        ))
      }
       
      </div>
     </Container>
    </div>
  )
}

export default Store;