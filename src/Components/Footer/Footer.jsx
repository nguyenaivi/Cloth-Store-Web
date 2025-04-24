import React from 'react'
import './Footer.css'
const Footer = () => {
    const year = new Date().getFullYear();
    console.log(year);

  return (
    <div>
        <div className="container Footer">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div className="col mb-3 FooterColumn">
      <a xlinkHref="/" className="justify-content-between d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      </a>
      <p className="text-body-secondary Copyright">Copyright © {year} - All Right Reserved</p>
    </div>

    <div className="col mb-3">

    </div>

    <div className="col mb-3 FooterColumn">
      <h5>Về chúng tôi</h5>
      <ul className="nav flex-column FooterColumn text-start">
        <li className="nav-item mb-2"><a xlinkHref="#" className="nav-link p-0 text-body-secondary">Giới thiệu</a></li>
        <li className="nav-item mb-2"><a xlinkHref="#" className="nav-link p-0 text-body-secondary">Liên hệ</a></li>
        <li className="nav-item mb-2"><a xlinkHref="#" className="nav-link p-0 text-body-secondary">Hệ thống cửa hàng</a></li>
        <li className="nav-item mb-2"><a xlinkHref="#" className="nav-link p-0 text-body-secondary">Tuyển dụng</a></li>
      </ul>
    </div>

    <div className="col mb-3 FooterColumn">
      <h5>Trung tâm trợ giúp</h5>
      <ul className="nav flex-column FooterColumn text-start">
        <li className="nav-item mb-2"><a xlinkHref="#" className="nav-link p-0 text-body-secondary">Hướng dẫn mua hàng</a></li>
        <li className="nav-item mb-2"><a xlinkHref="#" className="nav-link p-0 text-body-secondary">Hướng dẫn chọn size</a></li>
        <li className="nav-item mb-2"><a xlinkHref="#" className="nav-link p-0 text-body-secondary">Chính sách hoàn trả sản phẩm</a></li>
        <li className="nav-item mb-2"><a xlinkHref="#" className="nav-link p-0 text-body-secondary">Chính sách vận chuyển</a></li>
      </ul>
    </div>

    <div className="col mb-3 FooterColumn">
      <h5>Hotline</h5>
      <ul className="nav flex-column FooterColumn text-start">
        <li className="nav-item mb-2"><a xlinkHref="#" className="nav-link p-0 text-body-secondary">012345678</a></li>
      </ul>
    </div>
  </footer>
</div>
    </div>
  )
}

export default Footer;

