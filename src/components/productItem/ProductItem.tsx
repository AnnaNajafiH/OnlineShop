import { IProduct } from "../../types/servers";

type TProductItem = IProduct;

function ProductItem({ title, price, description, image }: TProductItem) {
  return (
    <div className="shadow-lg border border-gray-200 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-b from-white to-gray-50">
      
      {/* Product Image */}
      <div className="relative">
        <img 
          className="h-32 object-cover rounded-t-md" 
          src={image} 
          alt={title} 
        />
        <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded-lg font-semibold">
          New
        </span>
      </div>
      
      {/* Product Info */}
      <div className="p-5 space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="line-clamp-1 text-lg font-semibold text-gray-800">
            {title}
          </h3>
          <p className="text-lg font-bold text-green-600">${price}</p>
        </div>
        
        <p className="line-clamp-2 text-gray-600 text-sm">
          {description}
        </p>

        {/* Action Button */}
        <button 
          className="w-full py-2 mt-4 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors duration-200"
          aria-label={`Add ${title} to cart`}
        >
          more details
        </button>
      </div>
    </div>
  );
}

export default ProductItem;


