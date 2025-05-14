import React, { use, useState, useContext } from 'react';
import './ProductDisplay.css';
import StarIcon from '../Assets/Icons/star.svg';
import StarFillIcon from '../Assets/Icons/star-fill.svg';
import AllProducts from '../Assets/AllProduct';
import Item from '../Item/Item';
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(ShopContext);
  // Đưa tất cả các Hooks lên đầu
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('');
  const [selectedColor, setSelectedColor] = useState(product?.color?.[0]?.name || '');

  const handleQuantityIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleQuantityDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (!isNaN(value) && Number(value) >= 1) {
      setQuantity(Number(value));
    } else if (value === '') {
      setQuantity('');
    }
  };

  const relatedProducts = AllProducts.filter((item) => item.category === product.category && item.id !== product.id);

  return (
    <div className="ProductDisplay">
      <div className="ProductDisplayTop">
        <div className="ProductDisplayLeft">
          <div className="ThumbnailList">
            <img className='ThumbnailImage' src={product.image} alt='' />
            <img className='ThumbnailImage' src={product.image} alt='' />
            <img className='ThumbnailImage' src={product.image} alt='' />
            <img className='ThumbnailImage' src={product.image} alt='' />
            <img className='ThumbnailImage' src={product.image} alt='' />
          </div>
          <div className="MainImage">
            <img src={product.image} alt="Main Product" />
          </div>
        </div>
        <div className="ProductDisplayRight">
          <div className="ProductInfor">
            <h1 style={{ textAlign: "center" }}>{product.name}</h1>
            <div className="ProductDisplayRightStar">
              <img src={StarFillIcon} alt="" />
              <img src={StarFillIcon} alt="" />
              <img src={StarFillIcon} alt="" />
              <img src={StarFillIcon} alt="" />
              <img src={StarIcon} alt="" />
            </div>
            <h2 style={{ fontSize: '20px', color: '#dc3545' }}>{product.newPrice}</h2>
            <div className="ProductColorSection">
              <h3>Màu sắc: {selectedColor}</h3>
              <div className="ProductColorOptions">
                {product.color.map((c, index) => (
                  <img
                    key={index}
                    src={c.image}
                    alt={c.name}
                    className={`ColorCircle ${selectedColor === c.name ? 'Selected' : ''}`}
                    onClick={() => setSelectedColor(c.name)}
                  />
                ))}
              </div>
            </div>
            <div className="SizeAndQuantity">
              <div className="ProductInfoDropdown">
                <select id="sizeSelect" name="size">
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
              <div className="ProductInfoQuantity">
                <div className="QuantityBox">
                  <button onClick={handleQuantityDecrease}>-</button>
                  <input type="text" value={quantity} onChange={handleQuantityChange} />
                  <button onClick={handleQuantityIncrease}>+</button>
                </div>
              </div>
            </div>

          </div>
          <div className="ProductButton">
            <button onClick={() => {addToCart(product.id, Number(quantity))}} className="AddToCartButton" style={{fontSize: 20}}>Add to cart</button>
            <button className="BuyNowButton" style={{fontSize: 20}}>Buy now</button>
          </div>
        </div>
      </div>
      <div className="ProductDescription">
        <h1 style={{fontSize: 30}}>Product Description</h1>
        <p>{product.description.split('\n').map((line, index) => (
          <span style={{fontSize: 20}} className='Product' key={index}>
            {line}
            <br />
          </span>
        ))}</p>
      </div>
      <div className="ProductUse">
        <h1 style={{fontSize: 30}}>Instructions For Choosing Size For You</h1>
        <p>{product.selectSize.split('\n').map((line, index) => (
          <span style={{fontSize: 20}} className='Product' key={index}>
            {line}
            <br />
          </span>
        ))}</p>
      </div>
      <div className="RelatedProduct">
        <h1 style={{ fontSize: 30, marginBottom: 30 }}>Related Products</h1>
        <div className="RelatedProductList">
          {relatedProducts.map((relatedProduct) => (
            <Item
              key={relatedProduct.id}
              id={relatedProduct.id}
              image={relatedProduct.image}
              name={relatedProduct.name}
              newPrice={relatedProduct.newPrice}
              oldPrice={relatedProduct.oldPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;