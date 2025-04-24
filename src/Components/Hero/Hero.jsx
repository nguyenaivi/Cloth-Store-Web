import React from 'react';
import './Hero.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import HeroLeft from '../Assets/HeroLeft.png';
import Picture1 from '../Assets/HeroPictures/Picture1.webp';
import Picture2 from '../Assets/HeroPictures/Picture2.webp';
import Picture3 from '../Assets/HeroPictures/Picture3.webp';
import Product1 from '../Assets/product-1.webp';
import Product2 from '../Assets/product-2.webp';
import Product3 from '../Assets/product-3.webp';
import Product4 from '../Assets/product-4.webp';
import Product5 from '../Assets/product-5.webp';
import Product6 from '../Assets/product-6.webp';

export const Hero = () => {
  const topSaleProducts = [
    { id: 1, img: Product1, price: '189.000đ' },
    { id: 2, img: Product2, price: '259.000đ' },
    { id: 3, img: Product3, price: '249.000đ' },
    { id: 4, img: Product4, price: '195.000đ' },
    { id: 5, img: Product5, price: '99.000đ' },
    { id: 6, img: Product6, price: '199.000đ' },
  ];

  return (
    <div className="container-fluid Hero">
      <div className="row align-items-stretch">
        
        {/* HeroLeft (Giảm kích thước) */}
        <div className="col-lg-2 col-md-3 col-sm-4 col-5 HeroLeft h-100">
          <img src={HeroLeft} alt="A picture introduce voucher" className="img-fluid" />
        </div>

        {/* HeroCenter - Carousel */}
        <div className="col-lg-6 col-md-6 col-sm-4 col-2 h-100">
          <div id="carouselExampleIndicators" className="carousel slide h-100">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></button>
            </div>
            <div className="carousel-inner HeroCenter">
              <div className="carousel-item active">
                <img src={Picture3} className="d-block w-100 h-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Picture2} className="d-block w-100 h-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={Picture1} className="d-block w-100 h-100" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        {/* HeroRight - Top Sale (3 cột sản phẩm) */}
        <div className="col-lg-4 col-md-3 col-sm-4 col-5 h-100 HeroRight">
          <h2 className="TopSaleTitle">🔥 Top Sale</h2>
          <div className="ProductList">
            {topSaleProducts.map((product) => (
              <div className="ProductCard" key={product.id}>
                <img src={product.img} className="ProductImg" alt={`Product ${product.id}`} />
                <p className="ProductPrice">{product.price}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
