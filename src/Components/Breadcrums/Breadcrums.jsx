import React from 'react'
import ChevronRightIcon from '../Assets/Icons/chevron-compact-right.svg'
import './Breadcrums.css'
import {Link} from 'react-router-dom'
const Breadcrums = (props) => {
  const  {product} = props;
  return (
    <div className='Breadcrums'>
      <Link to="/">Home</Link>
      <img src={ChevronRightIcon} alt=">" />
      <span>{product?.category}</span>
      <img src={ChevronRightIcon} alt=">" />
      <span>{product?.name}</span>
    </div>
     
  )
}

export default Breadcrums;