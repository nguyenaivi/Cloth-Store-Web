import React from 'react'
import './ElegantProduct.css'
import elegantProduct1 from '../Assets/elegant1.webp'
import elegantProduct2 from '../Assets/elegant2.webp'
import elegantProduct3 from '../Assets/elegant3.webp'
import elegantRight from '../Assets/elegantRight.jpg'
export const ElegantProduct = () => {
  return (
    <div className='ElegantProduct'>
        <div className="container py-5">
        <h2 class="text-center">BST Elegant Vibrance</h2>
        <p class="text-center text-muted elegantVibrance">
            <span>"ELEGANT VIBRANCE" - NEW COLLECTION"</span> Simple things make her shine anywhere.
        </p>
        <div className="row mt-4">
            <div className="col-md-4 CardElegant">
                <div className="product-card">
                    <img src={elegantProduct1} alt="Áo Kiểu Nữ Tay Ngắn"/>
                    <h4 className="mt-3">Leather Jacket</h4>
                    <p className="product-price">159.000 VND</p>
                    {/* button phải nằm trong div thì mới chịu ảnh hưởng */}
                    <button className='ElegantProduct'>Add to Cart</button> 
                </div>
                

            </div>
            <div className="col-md-4">
                <div className="product-card">
                    <img src={elegantProduct2} alt="Chân Váy Nữ Dáng Xòe"/>
                    <h4 className="mt-3">Floral Dress</h4>
                    <p className="product-price">199.000 VND</p>
                    <button className='ElegantProduct'>Add to Cart</button>
                </div>
                
            </div>
            <div className="col-md-4">
                <div className="product-card">
                    <img src={elegantProduct3} alt="Áo Sơ Mi Nữ Kiểu"/>
                    <h4 className="mt-3">Midi Dress</h4>
                    <p className="product-price">239.000 VND</p>
                    <button className='ElegantProduct'>Add to Cart</button>   
                </div>
            </div>
        </div>
    </div>
    
    </div>
    
  )
}

export default ElegantProduct;