import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CartItems.css';
import RemoveIcon from '../Assets/Icons/trash3-fill.svg';
import CartEmpty from '../Assets/CartEmpty.png';

const CartItems = () => {
    const { AllProduct, cartItems, removeFromCart } = useContext(ShopContext);
    const isCartEmpty = Object.values(cartItems).every(item => item.quantity === 0);

    // Tính tổng tiền
    const totalAmount = AllProduct.reduce((total, product) => {
        return total + cartItems[product.id].quantity * parseFloat(product.newPrice);
    }, 0);

    if (isCartEmpty) {
        return (
            <div className='CartItems'>
                <p style={{ textAlign: 'center', fontSize: 20, margin: '40px 0' }}>
                    Your cart is currently empty.
                </p>
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
                if (cartItems[product.id].quantity !== 0) {
                    return (
                        <div className="CartItemsFormat" key={product.id}>
                            <img className='ProductImage' src={product.image} alt="" />
                            <p>
                                {product.name}
                                <br />
                                <span style={{ fontSize: 12, color: '#888' }}>
                                    Color: {cartItems[product.id].color}
                                </span>
                                <br />
                                <span style={{ fontSize: 12, color: '#888' }}>
                                    Size: {cartItems[product.id].size}
                                </span>
                            </p>
                            <p>{product.newPrice}</p>
                            <p>{cartItems[product.id].quantity}</p>
                            <p>
                                {(cartItems[product.id].quantity * parseFloat(product.newPrice)).toFixed(3)}đ
                            </p>
                            <img
                                className='RemoveIcon'
                                src={RemoveIcon}
                                alt=""
                                onClick={() => removeFromCart(product.id)}
                            />
                        </div>
                    );
                }
                return null;
            })}

            <hr />

            {/*  Tổng cộng */}
            <div className="CartItemsFormat CartItemsTotalRow">
                <div></div>
                <p className="CartTotalLabel">Total</p>
                <div></div>
                <div></div>
                <p className="CartTotalAmount">{totalAmount.toFixed(3)}đ</p>
                <div></div>
            </div>

            {/*  Nút bấm */}
            <div className="Checkout">
                <button className='CheckoutButton'>Checkout</button>
                <button className='ContinueShoppingButton'>Continue Shopping</button>
            </div>
        </div>
    );
};

export default CartItems;
