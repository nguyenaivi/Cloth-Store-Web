import React from 'react'
import './NewCollection.css'
import NewCollectionProduct from '../Assets/NewCollection/NewCollectionProduct.jsx'
import Item from '../Item/Item.jsx'
const NewCollection = () => {
  return (
    <div className='NewCollection'>
        <h2>New Collection</h2>
        <hr />
        <div className='Collection'>
            {NewCollectionProduct.map((item,index) => {
                return <Item key={index} id={item.id} name={item.name} image={item.image} newPrice={item.newPrice} oldPrice={item.oldPrice} />
            })}
        </div>
    </div>
  )
}

export default NewCollection;