import React from 'react'
import './Item.css'
import {Link} from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='Item'>
        <Link to = {`/product/${props.id}`}><img src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="ItemPrice">
            <div className="ItemPriceNew">
                {props.newPrice}
            </div>
            <div className="ItemPriceOld">
                {props.oldPrice}
            </div>
        </div>
        <button className='AddToCart'>Thêm vào giỏ hàng</button>
    </div>
  )
}

export default Item;