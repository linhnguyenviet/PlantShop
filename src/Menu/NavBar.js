import React, { Component } from "react";
import './NavBar.css';
class NavBar extends Component {
render() {
    return (
        <>
            <ul className="NavBar">
                <li><a><i class="fas fa-bars"></i></a></li>
                <li><a>TRANG CHỦ</a></li>
                <li><a>GIỚI THIỆU</a></li>
                <li><a>SẢN PHẨM</a></li>
                <li><a>SẢN PHẨM MỚI</a></li>
                <li><a>LIÊN HỆ</a></li>
                
            </ul>
        </>
    )
}
}
export default NavBar
