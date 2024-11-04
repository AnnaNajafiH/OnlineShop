import {useState, useEffect } from 'react'
import ProductItem from '../../components/productItem/ProductItem'
import Container from '../../components/container/Container'
import { Link } from 'react-router-dom'
import { IProduct } from '../../types/servers'

import { getProducts } from '../../services/api'
const Store = () => {
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getProducts().then((result)=>{setProducts(result)})
  },[])

  console.log(products[0]?.title);
  
  return (

    <div>
      <h1 className='text-blue-500 text-xl font-bold justify-center text-center'>The newest Products</h1>
      
     <Container>
       <div className='grid grid-cols-3 gap-4 mt-4'>

        {products.map((item)=>(
           <Link key={item.id} to={`/product/${item.id}`}>
          <ProductItem {...item}/>
        </Link>
        ))
      }
       
       
       
      </div>
     </Container>
    </div>
  )
}

export default Store