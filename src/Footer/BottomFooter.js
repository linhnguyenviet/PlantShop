import React, { Component } from "react";
import './BottomFooter.css';
import image from "./image.png";

class BottomFooter extends Component {
render() {
    return (
        <div className="BottomFooter">
            <div>
                <div className="imageWrap" >
                    <img src = {image} alt="alt"></img>
                    <span>Green Shop được thành lập từ 2019 và nhận được nhiều sự tin tưởng và nhận được 
                    nhiều sự tin tưởng và nhận được nhiều sự tin tưởng</span>
                   
                    <p><i className="fas fa-mobile-alt"></i> Điện thoại : 0910212585</p>
                    <p><i className="fas fa-envelope"></i> Email : linh@gmail.com</p>
                </div>
                
            </div>

            <div>
                <ul>
                    <li><h5>THÔNG TIN KHÁCH HÀNG </h5></li>
                    <li>> Tài khoản của tôi</li>
                    <li>> Tài khoản của tôi</li>
                    <li>> Tài khoản của tôi</li>
                    <li>> Tài khoản của tôi</li>
                </ul>
            </div>
            
            

            <div>
                <ul>
                    <li><h5>HỖ TRỢ DỊCH VỤ </h5></li>
                    <li>> Tài khoản của tôi</li>
                    <li>> Tài khoản của tôi</li>
                    <li>> Tài khoản của tôi</li>
                    <li>> Tài khoản của tôi</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><h5>CHÍNH SÁCH ƯU ĐÃI </h5></li>
                    <li>> Giảm 10% cho khách hàng </li>
                    <li>> Giảm 10% cho khách hàng </li>
                    <li>>Giảm 10% cho khách hàng </li>
                    <li>> Giảm 10% cho khách hàng </li>
                </ul>
            </div>

            <div>
                <ul>
                    <li><h5>TIN TỨC </h5></li>
                    <li>> Tin hot</li>
                    <li>> Tin mới</li>
                    <li>> Tin hôm qua</li>
                    <li>> Tin sắp tới</li>
                </ul>
            </div>

           
        </div>
    )
}
}
export default BottomFooter
