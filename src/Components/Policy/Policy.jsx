import React from 'react'
import './Policy.css'
import HoTroDoiTra from '../Assets/Feature/HoTroDoiTra.svg'
import ThanhToanLinhHoat from '../Assets/Feature/ThanhToanLinhHoat.svg'
import Voucher from '../Assets/Feature/Voucher.svg'
const Policy = () => {
  return (
    <div>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 Policy">
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <img src={HoTroDoiTra} alt='Support to change' />
        </div>
        <h3 className="fs-2 text-body-emphasis">Hỗ trợ đổi trả</h3>
        <p>Hỗ trợ đổi trả sản phẩm trong vòng 03 ngày</p>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <img src={ThanhToanLinhHoat} alt='Support to change' />
        </div>
        <h3 className="fs-2 text-body-emphasis">Thanh toán linh hoạt</h3>
        <p>Nhiều hình thức thanh toán phù hợp với mọi người</p>
      </div>
      <div className="feature col">
        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <img src={Voucher} alt='Support to change' />
        </div>
        <h3 className="fs-2 text-body-emphasis">Nhiều ưu đãi</h3>
        <p>Nhiều chương trình ưu đãi giá cực sốc diễn ra liên tục </p>
      </div>
    </div>
    </div>
  )
}

export default Policy;