import React from "react";
import './NewLetter.css'
const NewLetter = () => {
    return (
        <div className="NewLetter">
             <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="p-4 rounded bg-danger-subtle shadow">
                    <h2 class="text-center text-danger">Nhận Ưu Đãi Độc Quyền</h2>
                    <form>
                        <div class="mb-3">
                            <label for="email" class="form-label text-danger">Email của bạn</label>
                            <input type="email" class="form-control border-danger" id="email" placeholder="Nhập email của bạn" style={{fontStyle: "italic"}} required/>
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label text-danger">Số điện thoại</label>
                            <input type="tel" class="form-control border-danger" id="phone" placeholder="Nhập số điện thoại" style={{fontStyle: "italic"}} required/>
                        </div>
                        <button type="submit" class="btn btn-danger w-100">Đăng Ký Ngay</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default NewLetter;