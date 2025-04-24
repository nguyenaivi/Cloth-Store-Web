import React from 'react'
import './ProductDisplay.css'
import StarIcon from '../Assets/Icons/star.svg'
import StarFillIcon from '../Assets/Icons/star-fill.svg'
const ProductDisplay = (props) => {
  const {product} = props;
  return (
    <div className='ProductDisplay'>
      <div className="ProductDisplayLeft">
        <div className="ProductDisplayLeftList">
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className="ProductDisplayMain">
          <img src={product.image} alt='' />
        </div>
      </div>
      <div className="ProductDisplayRight">
        <h1>{product.name}</h1>
        <div className="ProductDisplayRightStar">
          <img src={StarFillIcon} alt='' />
          <img src={StarFillIcon} alt='' />
          <img src={StarFillIcon} alt='' />
          <img src={StarFillIcon} alt='' />
          <img src={StarIcon} alt='' />
        </div>
      </div>
    </div>
  )
}
export default ProductDisplay;