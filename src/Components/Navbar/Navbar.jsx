import React from 'react';
import './Navbar.css';
import AllProduct from '../Assets/AllProduct';
import ProductSearch from '../ProductSearch/ProductSearch'
import logo from '../Assets/LogoFM.png';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import CartIcon from '../Assets/Icons/CartIcon';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { ShopContext } from '../../Context/ShopContext';
export const Navbar = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = React.useState("home");
  const { cartItems } = useContext(ShopContext);
  const { user, logout } = useContext(AuthContext);
  const handleSelectProduct = (id) => {
  navigate(`/product/${id}`);
};

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const cartCount = Object.values(cartItems).reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className='Navbar'>
      <div className="NavLogo">
        <p>Willy</p>
      </div>
      <ul className="nav">
        <li onClick={() => setMenu("home")}><Link to= '/home' className={`nav-link px-2 ${menu === "home" ? "active" : ""}`}>Home</Link>
        </li>
        <li onClick={() => setMenu("men")}><Link to= '/men' className={`nav-link px-2 ${menu === "men" ? "active" : ""}`}>Men</Link>
        </li>
        <li onClick={() => setMenu("women")}><Link to= '/women' className={`nav-link px-2 ${menu === "women" ? "active" : ""}`}>Women</Link>
        </li>
        <li onClick={() => setMenu("kid")}><Link to= '/kid' className={`nav-link px-2 ${menu === "kid" ? "active" : ""}`}>Kid</Link>
        </li>
        <li onClick={() => setMenu("accessories")}><Link to= '/accessories' className={`nav-link px-2 ${menu === "accessories" ? "active" : ""}`}>Accessories</ Link>
        </li>
      </ul>
      <ProductSearch products={AllProduct} onSelect={handleSelectProduct} />
      <div className="NavLoginCart">
        <div className="NavLoginSignUp">
      {user ? (
        <>
          <span className='NavProfile' onClick={() => navigate('/profile')}>
            {user.name?.firstname} {user.name?.lastname}
          </span>
        </>
      ) : (
        <>
          <Link to='/login'><button type="button" className="Login">Login</button></Link>
          <Link to='/signup'><button type="button" className="SignUp">Sign-up</button></Link>
        </>
      )}
    </div>
        <div className="NavCartIcon">
          <Link to = '/cart' ><CartIcon /></Link>
          <div className="NavCartCount">{cartCount}</div>
        </div>
      </div>
      
    </div>
  );
}

export default Navbar;