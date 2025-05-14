import React, {createContext} from 'react'
import AllProduct from '../Components/Assets/AllProduct'

export const ShopContext = createContext(null);
const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < AllProduct.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    }
  const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = React.useState(getDefaultCart());
    
    const addToCart = (itemId, quantity = 1) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + quantity}));
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }
    const contextValue = {AllProduct, cartItems, addToCart, removeFromCart};
    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
  }

export default ShopContextProvider;