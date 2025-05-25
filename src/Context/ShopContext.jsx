import React, { createContext } from 'react'
import AllProduct from '../Components/Assets/AllProduct'

export const ShopContext = createContext(null);
const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < AllProduct.length + 1; i++) {
        cart[i] = { quantity: 0, color: '', size: '' };
    }
    return cart;
}
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = React.useState(getDefaultCart());

    const addToCart = (itemId, quantity = 1, color = '', size = '') => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: {
                quantity: prev[itemId].quantity + quantity,
                color: color || prev[itemId].color,
                size: size || prev[itemId].size
            }
        }));
    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: {
                quantity: 0,
                color: '',
                size: ''
            }
        }));
    };
    const contextValue = { AllProduct, cartItems, addToCart, removeFromCart };
    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;