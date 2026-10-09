import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

function Collection() {
  const { products ,search,showSearch } = useContext(ShopContext)
  const [searchParams] = useSearchParams();

  const [showFilter, setShowFilter] = useState(false)
  const [filterProduct, setFilterProduct] = useState([]);
  const [Category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [stitchType, setStitchType] = useState([]);
  const[sortType ,setSortType]=useState('relevant');

  const toggleCategory = (e) => {
    if (Category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleStitchType = (e) => {
    if (stitchType.includes(e.target.value)) {
      setStitchType(prev => prev.filter(item => item !== e.target.value))
    } else {
      setStitchType(prev => [...prev, e.target.value])
    }
  }

  // URL se ?type=Stitched ya ?type=Unstitched read karke filter mein set karein (Hero page se aane par)
  useEffect(() => {
    const typeFromUrl = searchParams.get('type');
    if (typeFromUrl && (typeFromUrl === 'Stitched' || typeFromUrl === 'Unstitched')) {
      setStitchType([typeFromUrl]);
    }
  }, [searchParams]);

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy =productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (Category.length > 0) {

        productsCopy = productsCopy.filter(item => Category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    if (stitchType.length > 0) {
      productsCopy = productsCopy.filter(item => stitchType.includes(item.fitType))
    }

    setFilterProduct(productsCopy)
  }

  const sortProduct =()=>{
    let fpProduct =filterProduct.slice();
    switch(sortType){
      case 'low-high' :
      setFilterProduct(fpProduct.sort((a,b)=>(a.price - b.price)));
      break;

      case 'high-low' :
      setFilterProduct(fpProduct.sort((a,b)=>(b.price - a.price)));
 break;
 default:
  applyFilter();
  break;

    }

  }

  useEffect(() => {
    applyFilter();
  }, [products, Category, subCategory, stitchType, search,showSearch])



  useEffect(()=>{
sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-30 pb-20 border-t pl-32'>
      {/* filter option */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`h-2 w-2 m-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt='' />
        </p>

        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Men'} onChange={toggleCategory} />Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Women'} onChange={toggleCategory} />Women
            </p>
           
          </div>
        </div>

        {/* subCategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Wedding Formal'} onChange={toggleSubCategory} />Wedding Formal
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Summer Collection'} onChange={toggleSubCategory} />Summer Collection
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Kurta Pajama'} onChange={toggleSubCategory} />Kurta Pajama
            </p>
          </div>
        </div>

        {/* Stitch type filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>STITCH TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'Unstitched'}
                checked={stitchType.includes('Unstitched')}
                onChange={toggleStitchType}
              />Unstitched
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value={'Stitched'}
                checked={stitchType.includes('Stitched')}
                onChange={toggleStitchType}
              />Stitched
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1 pr-10'>
        <div className='flex justify-between text-base sm:text-2xl mb-4 pl-32'>
          <Title text1={'ALL'} text2={'COLLECTION'} />

          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by:Relavent</option>
            <option value="low-high">Sort by:Low to High</option>
            <option value="high-low">Sort by:High to Low</option>
          </select>
        </div>

        {/* map product */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProduct.map((item) => (
            <ProductItem key={item._id} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection