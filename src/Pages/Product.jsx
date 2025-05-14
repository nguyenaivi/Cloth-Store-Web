import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import '../Components/ProductDisplay/ProductDisplay.jsx'
import Breadcrums from '../Components/Breadcrums/Breadcrums.jsx';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx'
export const Product = () => {
  const {AllProduct} = useContext(ShopContext);
  const {id} = useParams();
  console.log(id)
  const product = AllProduct.find(p => p.id === Number(id));
  return (
    <div>
      <Breadcrums product ={product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product