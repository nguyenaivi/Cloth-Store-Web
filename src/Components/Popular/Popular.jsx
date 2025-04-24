import React from 'react'
import './Popular.css'
import PopularInWomen from '../Assets/PopularInWomen.jsx'
import Item from '../Item/Item.jsx'
import PopularInMen from '../Assets/PopularInMen.jsx'
import Popular1 from '../Assets/popular1.webp'
import Popular2 from '../Assets/popular2.webp'

const Popular = () => {
  return (
    <div className='Popular'>
        <h2>Popular in Women</h2>
        <hr />
        <div className="PopularInPeople">
            {PopularInWomen.map((item, index) => {
                return <Item key={index} id = {item.id} name = {item.name} image = {item.image} newPrice = {item.newPrice} oldPrice = {item.oldPrice}/>
            })}
        </div>
        <hr />
        <div className='PopularImage'>
            <img src={Popular1} alt="" />
            <img src={Popular2} alt="" />
        </div>
        

        <h2>Popular in Men</h2>
        <div className="PopularInPeople">
            {PopularInMen.map((item, index) => {
                return <Item key={index} id = {item.id} name = {item.name} image = {item.image} newPrice = {item.newPrice} oldPrice = {item.oldPrice}/>
            })}
        </div>
    </div>
  )
}

export default Popular;