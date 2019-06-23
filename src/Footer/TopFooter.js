import React, { Component } from "react";
import { Link } from "react-router-dom";
import './TopFooter.css';
class TopFooter extends Component {
    render() {

        return (
            <div className="TopFooter">
                <div>
                    <h6>KÊNH THÔNG TIN TỪ CHÚNG TÔI
            <br></br>
                        <span>
                            <Link to="/" target="_blank">
                                <i className="fab fa-facebook-f" />
                            </Link>
                            <Link to="/" target="_blank">
                                <i className="fab fa-twitter" />
                            </Link>
                            <Link to="/" target="_blank">
                                <i className="fab fa-linkedin-in"></i>
                            </Link>
                            <Link to="/" target="_blank">
                                <i className="fab fa-instagram"></i>
                            </Link>
                        </span>
                    </h6>
                </div>

                <div  >
                    <h6>ĐĂNG KÍ NHẬN EMAIL</h6>
                </div>

                <div>
                    <form >
                        <input
                            type="text"
                            placeholder="  Tìm kiếm.."
                            name="search"
                        />
                        <button type="button">
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default TopFooter
