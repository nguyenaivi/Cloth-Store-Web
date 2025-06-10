import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { AuthContext } from '../../Context/AuthContext';
import './CartItems.css';
import RemoveIcon from '../Assets/Icons/trash3-fill.svg';
import CartEmpty from '../Assets/CartEmpty.png';
import { useNavigate } from 'react-router-dom';
const CartItems = () => {
    const { AllProduct, cartItems, removeFromCart, addToCart } = useContext(ShopContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const isCartEmpty = Object.values(cartItems).every(item => item.quantity === 0);

    const totalAmount = AllProduct.reduce((total, product) => {
        return total + cartItems[product.id].quantity * parseFloat(product.newPrice);
    }, 0);

    const ProductColorOption = ({ color, selected, onClick }) => (
        <span
            title={color.name}
            onClick={onClick}
            style={{
                display: 'inline-block', width: 22, height: 22, borderRadius: '50%',
                border: selected ? '2px solid #dc3545' : '1px solid #ccc',
                marginRight: 6, background: `url(${color.image}) center/cover no-repeat`,
                cursor: 'pointer', boxSizing: 'border-box', marginTop: 5, marginBottom: 5,
            }}
        />
    );

    const confirmRemove = (id) => {
        if (window.confirm('Do you really want to remove this item from the cart?')) {
            removeFromCart(id);
        }
    }

    const handleIncrease = (id) => {
        addToCart(id, 1, cartItems[id]?.color, cartItems[id]?.size);
    }

    const handleDecrease = (id) => {
        if (cartItems[id]?.quantity > 1) {
            addToCart(id, -1, cartItems[id]?.color, cartItems[id]?.size);
        }
    }

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
                <p>Product</p><p>Title</p><p>Price</p><p>Quantity</p><p>Total</p><p>Remove</p>
            </div>
            <hr />
            {AllProduct.map((product) => {
                if (cartItems[product.id].quantity !== 0) {
                    const selectedColor = cartItems[product.id]?.color || '';
                    return (
                        <div className="CartItemsFormat" key={product.id}>
                            <img className='ProductImage' src={product.image} alt="" />
                            <p>
                                {product.name}<br />
                                <span>
                                    {product.color.map((c, idx) => (
                                        <ProductColorOption
                                            key={idx}
                                            color={c}
                                            selected={selectedColor === c.name}
                                            onClick={() =>
                                                addToCart(product.id, 0, c.name, cartItems[product.id]?.size)
                                            }
                                        />
                                    ))}
                                </span><br />
                                <div className="ProductInfoSizes">
                                    <select
                                        value={cartItems[product.id]?.size || product.size[0]}
                                        onChange={e =>
                                            addToCart(product.id, 0, cartItems[product.id]?.color, e.target.value)}
                                        style={{ padding: '6px 12px', borderRadius: 6, border: '1px solid #ccc', fontWeight: 500, margin: '4px 0', cursor: 'pointer', width: '60%' }}
                                    >
                                        {product.size.map((sz, idx) => (
                                            <option key={idx} value={sz}>{sz}</option>
                                        ))}
                                    </select>
                                </div>
                            </p>
                            <p>{product.newPrice}</p>
                            <p className="QuantityControl">
                                <button className='QuantityControlButton' onClick={() => handleDecrease(product.id)}>-</button>
                                <span className='QuantityControlNumber'>{cartItems[product.id].quantity}</span>
                                <button className='QuantityControlButton' onClick={() => handleIncrease(product.id)}>+</button>
                            </p>
                            <p>{(cartItems[product.id].quantity * parseFloat(product.newPrice)).toFixed(3)}đ</p>
                            <img
                                className='RemoveIcon'
                                src={RemoveIcon}
                                alt=""
                                onClick={() => confirmRemove(product.id)}
                            />
                        </div>
                    );
                }
                return null;
            })}
            <hr />
            <div className="CartItemsFormat CartItemsTotalRow">
                <div></div>
                <p className="CartTotalLabel">Total</p>
                <div></div><div></div>
                <p className="CartTotalAmount">{totalAmount.toFixed(3)}đ</p>
                <div></div>
            </div>
            <div className="Checkout">
                <button
                    className='CheckoutButton'
                    onClick={() => {
                        navigate('/checkout');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    Checkout
                </button>
                <button
                    className='ContinueShoppingButton'
                    onClick={() => {
                        navigate('/home');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    Continue Shopping
                </button>
            </div>
        </div>
    );
};

export default CartItems;
