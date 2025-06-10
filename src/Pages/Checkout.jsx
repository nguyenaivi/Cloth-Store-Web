import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useNavigate } from 'react-router-dom';
import './CSS/Checkout.css';
import axios from 'axios';

const Checkout = () => {
  const { AllProduct, cartItems, removeFromCart } = useContext(ShopContext);
  const navigate = useNavigate();

  // State cho form
  const [fullname, setFullname] = useState('');
  const [address, setAddress] = useState('');
  const [coupon, setCoupon] = useState('');
  const [payment, setPayment] = useState('cod'); // cod = cash on delivery

  // Tính tổng tiền
  const totalAmount = AllProduct.reduce((total, product) => {
    return total + cartItems[product.id].quantity * parseFloat(product.newPrice);
  }, 0);

  // Lọc sản phẩm trong giỏ hàng
  const cartProducts = AllProduct.filter(p => cartItems[p.id]?.quantity > 0);

  const handleOrder = async (e) => {
  e.preventDefault();

  // Tạo đơn hàng mới
  const newOrder = {
    fullname,
    address,
    coupon,
    payment,
    products: cartProducts.map(product => ({
      id: product.id,
      name: product.name,
      color: cartItems[product.id]?.color,
      size: cartItems[product.id]?.size,
      quantity: cartItems[product.id]?.quantity,
      price: product.newPrice
    })),
    total: totalAmount,
    createdAt: new Date().toISOString()
  };

  try {
    await axios.post('http://localhost:3002/orders', newOrder);
    alert('Đặt hàng thành công!');
    // Xóa sản phẩm trong giỏ hàng sau khi đặt hàng thành công
    cartProducts.forEach(product => {
      removeFromCart(product.id);
    });
    navigate('/home');
  } catch (error) {
    alert('Không thể kết nối tới server!');
  }
};

  return (
    <div className="CheckoutPage" style={{ maxWidth: 800, margin: '40px auto', background: '#fff', borderRadius: 10, padding: 32, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Checkout</h2>
      <div className="CheckoutContent" style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
        {/* Sản phẩm trong giỏ */}
        <div style={{ flex: 1 }}>
          <h4>Product</h4>
          <div>
            {cartProducts.map(product => (
              <div key={product.id} style={{ display: 'flex', alignItems: 'center', marginBottom: 16, borderBottom: '1px solid #eee', paddingBottom: 8 }}>
                <img src={product.image} alt={product.name} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 8, marginRight: 16 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 500 }}>{product.name}</div>
                  <div style={{ fontSize: 14, color: '#888' }}>
                    Color: <span style={{ display: 'inline-block', width: 18, height: 18, borderRadius: '50%', background: `url(${(product.color.find(c => c.name === cartItems[product.id]?.color)?.image)}) center/cover no-repeat`, border: '1px solid #ccc', verticalAlign: 'middle', marginRight: 4 }}></span>
                    {cartItems[product.id]?.color}
                    &nbsp;| Size: {cartItems[product.id]?.size}
                    &nbsp;| Quantity: {cartItems[product.id]?.quantity}
                  </div>
                </div>
                <div style={{ fontWeight: 500 }}>{product.newPrice}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Form thông tin giao hàng */}
        <div style={{ flex: 1 }}>
          <h4>Delivery Information</h4>
          <form onSubmit={handleOrder}>
            <div style={{ marginBottom: 12 }}>
              <label>Full Name</label>
              <input
                type="text"
                value={fullname}
                onChange={e => setFullname(e.target.value)}
                required
                style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>Address</label>
              <input
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
                required
                style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }}
              />
            </div>
            <div style={{ marginBottom: 12 }}>
              <label>Discount Code</label>
              <input
                type="text"
                value={coupon}
                onChange={e => setCoupon(e.target.value)}
                style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #ccc', marginTop: 4 }}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label>Payment Method</label>
              <div>
                <label style={{ marginRight: 16 }}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={payment === 'cod'}
                    onChange={() => setPayment('cod')}
                  /> Cash on Delivery
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={payment === 'bank'}
                    onChange={() => setPayment('bank')}
                  /> Bank Transfer
                </label>
              </div>
            </div>
            {/* Check out detail */}
            <div style={{ marginBottom: 20, background: '#f8f8f8', borderRadius: 6, padding: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 500 }}>
                <span>Total:</span>
                <span style={{ color: '#dc3545', fontSize: 18 }}>{totalAmount.toFixed(3)}đ</span>
              </div>
            </div>
            <button type="button" className="CheckoutButton" style={{ width: '100%'}} onClick={handleOrder} >
              Check Out
            </button>
            <button
              type="button"
              className="ContinueShoppingButton"
              style={{ width: '100%' }}
              onClick={() => {
                navigate('/home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Continue Shopping
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;