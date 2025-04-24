import React, {useContext} from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'
import ChevronDown from '../Components/Assets/Icons/chevron-down.svg'
import Item from '../Components/Item/Item.jsx'
import ArrowRight from '../Components/Assets/Icons/arrow-right.svg'
const ShopCategory = (props) => {
  const {AllProduct} = useContext(ShopContext);
  const FilterProduct = AllProduct.filter((product)=> {
    return product.category === props.category
  })
  return (
    <div className='ShopCategory'>
      <div className='ShopCategoryBanner'>
        <img className='Banner' src={props.banner} alt='banner' />
      </div>
      <div className="ShopCategoryIndexSort">
        <p>
          <span>Showing 1-15</span> of {FilterProduct.length} products
        </p>
        <div className="ShopCategorySort">
          Sort By <img src={ChevronDown} style={{width: '12px', height: '12px', marginBottom: 0}} alt='Chevron Down Icon' />
        </div>
        
      </div>
        
      <div className="ShopCategoryProduct">
        {FilterProduct.map((product, index) => {
          return <Item key = {index} name = {product.name} image = {product.image} newPrice = {product.newPrice} oldPrice = {product.oldPrice} />
        })}
      </div>
      <div className="ShopCategoryExploreMore">
        <span>Explore More</span>
        <img src= {ArrowRight} style={{width: '12px', height: '12px', marginBottom: 0}} />
      </div>
      
    </div>
  )
}

 export default ShopCategory;