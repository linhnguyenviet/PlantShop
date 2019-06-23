import React, { Component } from "react";
import image from "./image.png";
import image2 from "./image2.png";
import { connect } from 'react-redux';

import "./HeaderImg.css";

class HeaderImg extends Component {
    render() {
        var sumPrice = (arr) =>{
            return arr.reduce((total, item) => {
                return total + parseInt(item.number);
            }, 0)
        }
        const totalProduct = sumPrice(this.props.stateReducer.checkLogIn.cart);
        console.log("total: " , totalProduct);
        return (
            <div className="HeaderImg">
                <div className="HeaderImg-wrap">
                    <img src={image} alt="sdfsf" />
                    <img src={image2} alt="fsd" />
                    <div className="HeaderImg-wrapInner">
                        <div className="HeaderImg-inner">
                            <span> <i className="fas fa-phone"> </i> HỖ TRỢ : 091270929 -091270929 </span>

                            <form>
                                <input type="text" placeholder="  Tìm kiếm.." name="search" />
                                <button type="button"> <i className="fa fa-search" /> </button>
                            </form>
                        </div>

                        <div className="HeaderImg-cart">
                            <i className="fas fa-shopping-basket"> {" "} <span> {totalProduct} sản phẩm</span> </i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        stateReducer: state
    }
}
export default connect(mapStateToProps, null) (HeaderImg);

//
