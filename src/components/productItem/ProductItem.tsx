import { IProduct } from "../../types/servers"

type TProductItem =IProduct


function ProductItem ({title, price, description, image}:TProductItem) {
  return (
    <div className='shadow border rounded pb-4'>
        <img className='rounded-t h-32 w-auto' src={image} alt="" />
        <div className='flex justify-between px-4 mt-2'>
            <h3 className="line-clamp-1 w-15 text-sm font-bold">{title}</h3>
            <p className="text-sm">${price}</p>
        </div>
        <div className='px-4'>
            <p className='line-clamp-2'>
                {description}
            </p>
        </div>
    </div>
  )
}

export default ProductItem