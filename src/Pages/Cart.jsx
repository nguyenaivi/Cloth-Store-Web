import React, { useContext, useEffect } from 'react'
import CartItems from '../Components/CartItems/CartItems'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
export const Cart = () => {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      window.alert('You need to login to view your cart');
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;
  return (
    <div className='Cart'>
      <CartItems />
    </div>
  )
}

export default Cart