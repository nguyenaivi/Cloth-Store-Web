import React, {createContext} from 'react'
import AllProduct from '../Components/Assets/AllProduct'

export const ShopContext = createContext(null);
  const ShopContextProvider = (props) => {
    const contextValue = {AllProduct};

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
  }

export default ShopContextProvider;