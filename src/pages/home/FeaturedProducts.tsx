import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const products: Product[] = [
    { id: 1, name: "Smartphone", price: 299, image: "/images/smartphone.jpg" },
    { id: 2, name: "Laptop", price: 799, image: "/images/laptop.jpg" },
    { id: 3, name: "Headphones", price: 99, image: "/images/headphones.jpg" },
];

const FeaturedProducts: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
                <div key={product.id} className="border rounded-lg p-4 shadow-lg flex flex-col items-center text-center bg-white transition-transform transform hover:scale-105 hover:shadow-xl">
                    <img className="w-32 h-32 object-cover rounded-lg mb-4" src={product.image} alt={product.name} />
                    <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                    <p className="text-lg text-gray-600 mt-2">${product.price}</p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default FeaturedProducts;
