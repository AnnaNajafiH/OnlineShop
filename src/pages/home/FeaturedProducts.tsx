import React from 'react';
import {useState, useEffect } from 'react'
import { getProducts } from '../../services/api';
import { IProduct } from '../../types/servers';
import { useNavigate } from 'react-router-dom';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}



const FeaturedProducts: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const navigate=useNavigate()

    useEffect(() => {
    getProducts().
    then((result)=>
      {setProducts(result);
      })
    .catch((error)=>{
    });
  },[]);

  const handleAddToCart = (id: number) => {
        // Navigate to the product detail page
        navigate(`/product/${id}`);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...products]
            .sort(()=>0.5 - Math.random())
            .slice(0,3)
            .map((item) => (
                <div key={item.id} className="border rounded-lg p-4 shadow-lg flex flex-col items-center text-center bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
                    <img className="w-22 h-32 object-cover rounded-lg mb-4" src={item.image} alt={item.title} />
                    <h3 className="line-clamp-1 text-xl font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-lg font-bold text-green-600">${item.price}</p>
                    <div className='flex-grow flex items-end'>
                        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200" onClick={() => handleAddToCart(Number(item.id))}>
                        See The Product
                    </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeaturedProducts;
