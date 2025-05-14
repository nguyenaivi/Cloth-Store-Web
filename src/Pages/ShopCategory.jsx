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
  const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);
  const handleDropDownClick = () => {
    setIsDropDownOpen(!isDropDownOpen);
  }

  const [sortOption, setSortOption] = React.useState('');
  const handleSortOption = (option) => {
    setSortOption(option);
    setIsDropDownOpen(false);
  };

  const extractPrice = (priceString) => {
  return Number(priceString.replace(/[^\d]/g, '')); // Loại bỏ ký tự không phải số
};


  const sortProducts = [...FilterProduct];
  if (sortOption === 'asc') {
    sortProducts.sort((a, b) => extractPrice(a.newPrice) - extractPrice(b.newPrice));
  } else if (sortOption === 'desc') {
    sortProducts.sort((a, b) => extractPrice(b.newPrice) - extractPrice(a.newPrice));
  }

  
  console.log(sortOption, sortProducts.map(p => p.newPrice));

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
          Sort By <img src={ChevronDown} style={{width: '12px', height: '12px', marginBottom: 0}} alt='Chevron Down Icon' onClick={handleDropDownClick} />
          {isDropDownOpen && (
              <div className="DropdownMenu">
                <div onClick={() => handleSortOption('asc')}>Giá tăng dần</div>
                <div onClick={() => handleSortOption('desc')}>Giá giảm dần</div>
              </div>
            )}
        </div>
        
      </div>
        
      <div className="ShopCategoryProduct">
        {sortProducts.map((product, index) => {
          return <Item key = {index} id = {product.id} name = {product.name} image = {product.image} newPrice = {product.newPrice} oldPrice = {product.oldPrice} />
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