import React from 'react'
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';
import './CartItems.css'
import RemoveIcon from '../Assets/Icons/trash3-fill.svg'
import CartEmpty from '../Assets/CartEmpty.png'
const CartItems = () => {
    const {AllProduct, cartItems, removeFromCart} = useContext(ShopContext);
    const isCartEmpty = Object.values(cartItems).every(qty => qty === 0);

    if (isCartEmpty) {
        return (
            <div className='CartItems'>
                <p style={{textAlign: 'center', fontSize: 20, margin: '40px 0'}}>Your cart is currently empty.</p>
                <img className='CartEmpty' src={CartEmpty} alt='Cart Empty' />
            </div>
        );
    }
  return (
    <div className='CartItems'>
        <div className="CartItemsFormatMain">
            <p>Product</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {AllProduct.map((product) => {
            if (cartItems[product.id] !== 0) {
                return (
                    <div className="CartItemsFormat" key={product.id}>
                        <img className='ProductImage' src={product.image} alt="" />
                        <p>{product.name}</p>
                        <p>{product.newPrice}</p>
                        <p>{cartItems[product.id]}</p>
                        <p>{(cartItems[product.id] * parseFloat(product.newPrice)).toFixed(3)}đ</p>
                        <img className='RemoveIcon' src={RemoveIcon} alt="" onClick={() => removeFromCart(product.id)} />
                    </div>
                )
            }
        })}
        <hr />
        <div className="CartItemsTotal">
            <p style={{fontWeight: 'bolder', fontSize: 20}}>Total</p>
            <p style={{color: '#dc3545', fontWeight: 600, fontSize: 20, justifyContent: 'center', display: 'flex'}}> 
                {AllProduct.reduce((total, product) => {
                    return total + (cartItems[product.id] * parseFloat(product.newPrice));
                }, 0).toFixed(3)}đ
            </p>
        </div>
        <div className="Checkout">
            <button className='CheckoutButton'>Checkout</button>
            <button className='ContinueShoppingButton'>Continue Shopping</button>
        </div>
    </div>
  )
}
export default CartItems;