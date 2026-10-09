import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
   const {currency} =useContext(ShopContext)
   const [currentImage, setCurrentImage] = useState(image[0])

    return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>  
        <div className='overflow-hidden'>
            <img
              className='hover:scale-110 transition ease-in-out w-full h-auto'
              src={currentImage}
              onMouseEnter={() => setCurrentImage(image[1] || image[0])}
              onMouseLeave={() => setCurrentImage(image[0])}
              alt=''
            />
        </div>

    <p className='pt-3 pb-1 text-sm'>{name}</p>  
    <p className='text-sm font-medium'>{currency}{price}</p>  
        </Link>  
    )
}

export default ProductItem