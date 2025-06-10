import Navbar from './Components/Navbar/Navbar';
import React from 'react';
import CartItems from './Components/CartItems/CartItems';
import './App.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ForgotPassword from './Pages/ForgotPassword.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Footer from './Components/Footer/Footer.jsx';
import WomenBanner from './Components/Assets/Banner/WomenBanner.jpg';
import MenBanner from './Components/Assets/Banner/MenBanner.webp';
import KidBanner from './Components/Assets/Banner/KidBanner.webp';
import AccessoriesBanner from './Components/Assets/Banner/AccessoriesBanner.jpg';
import Profile from './Pages/Profile.jsx';
import ProfileEdit from './Pages/ProfileEdit.jsx';
import Checkout from './Pages/Checkout.jsx';

// Tạo component con để dùng useLocation
function AppContent() {
  const location = useLocation();
  return (
    <div className="App">
      {/* Chỉ hiện Navbar nếu không phải trang checkout */}
      {location.pathname !== '/checkout' && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path='/men' element={<ShopCategory banner={MenBanner} category="men"/>} />
        <Route path='/women' element={<ShopCategory banner={WomenBanner} category="women"/>} />
        <Route path='/kid' element={<ShopCategory banner={KidBanner} category="kid"/>} />
        <Route path='/accessories' element={<ShopCategory banner={AccessoriesBanner} category="accessories"/>} />
        <Route path='/product/:id' element={<Product />} /> 
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile-edit' element={<ProfileEdit />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;