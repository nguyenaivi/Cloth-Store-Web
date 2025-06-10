import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
const Item = (props) => {
  const { addToCart} = useContext(ShopContext);
  console.log('color:', props.color);
  console.log('size:', props.size);
  return (
    <div className='Item'>
      <Link to={`/product/${props.id}`}><img src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className="ItemPrice">
        <div className="ItemPriceNew">
          {props.newPrice}
        </div>
        <div className="ItemPriceOld">
          {props.oldPrice}
        </div>
      </div>
      <button
  className='AddToCart'
  onClick={() => {
    console.log("color trước khi thêm:", props.color);
    console.log("size trước khi thêm:", props.size);

    const defaultColor = Array.isArray(props.color) && props.color.length > 0
      ? props.color[0].name
      : '';

    const defaultSize = Array.isArray(props.size) && props.size.length > 0
      ? props.size[0]
      : '';

    console.log("color được gửi:", defaultColor);
    console.log("size được gửi:", defaultSize);

    addToCart(props.id, 1, defaultColor, defaultSize);
  }}
>
  Add to cart
</button>

    </div>
  )
}

export default Item;