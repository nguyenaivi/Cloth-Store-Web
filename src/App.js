import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
