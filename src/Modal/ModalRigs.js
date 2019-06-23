import React from 'react';
import { connect } from 'react-redux';
import { switchLogin } from '../actions';
import axios from 'axios';
import './modalListView.css';

class ModalRigs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            pw: "",
            pw2: "",
            name: "",
            phone: "",
            email: "",
            address:"",
            checkLogIn: false,
            usernameValid:"*",
            phoneValid:"*",
            emailValid:"*",
            pwValid:"*",
            pw2Valid:"*",
            nameValid:"*"
        }
    }
    getInputUser = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    getInputPw = (e) => {
        this.setState({
            pw: e.target.value
        })
    }
    getInputPw2 = (e) => {
        this.setState({
            pw2: e.target.value
        })
    }
    getInputMail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    getInputPhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }
    getInputName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    getInputAddress = (e) => {
        this.setState({
            address: e.target.value
        })
    }
    goBack = () => {
        this.setState({
            redirect:true
        })
    }
    checkLength = (o, n, min, max) => {
        if (o.length > max || o.length < min) {
            switch(n) {
                case "phoneValid" : this.setState({
                    phoneValid : "Số điện thoại gồm 10-11 kí tự"
                })
                break;
                case "usernameValid" : this.setState({
                    usernameValid : "Tên đăng nhập phải từ 6-16 kí tự"
                })
                break;
                case "pwValid" : this.setState({
                    pwValid : "Mật khẩu phải từ 6-16 kí tự"
                })
                break;
                case "nameValid" : this.setState({
                    nameValid : "Xin nhập họ tên"
                })
                break;
                case "emailValid" : this.setState({
                    emailValid : "Xin nhập Email"
                })
                break;
                default:
                    break;
            }
            
            return false;
        } else {
            switch(n) {
                case "phoneValid" : this.setState({
                    phoneValid : "*"
                })
                break;
                case "usernameValid" : this.setState({
                    usernameValid : "*"
                })
                break;
                case "pwValid" : this.setState({
                    pwValid : "*"
                })
                break;
                case "nameValid" : this.setState({
                    nameValid : "*"
                })
                break;
                case "emailValid" : this.setState({
                    emailValid : "*"
                })
                break;
                default:
                    break;
            }
            return true;
        }
    }
    checkMail = (regexp) => {
        if (!(regexp.test(this.state.email))) {
            this.setState({
                emailValid: "Xin nhập email theo mẫu linhnguyen@gmail.com"
            })
            return false;
        } else {
            this.setState({
                emailValid: "*"
            })
            return true;
        }
    } 
    checkPw = (pw,pw2) => {
        if(pw !== pw2) {
            this.setState({
                pw2Valid: "Mật khẩu không khớp, xin nhập lại"
            }) 
            return false;
        }
        else {
            this.setState({
                pw2Valid: "*"
            }) 
            return true;
        }
    }
    addUser = () => {
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        var self = this;
        var valid = true;
        self.checkLength(self.state.phone, "phoneValid", 10, 11);
        self.checkLength(self.state.pw, "pwValid", 6, 16);
        self.checkLength(self.state.username, "usernameValid", 6, 16);
        self.checkLength(self.state.name, "nameValid", 1, 1000);
        self.checkMail(emailRegex);
        self.checkPw(self.state.pw,self.state.pw2)
        valid = valid && self.checkLength(self.state.phone, "phoneValid", 10, 11) && self.checkLength(self.state.pw, "pwValid", 6, 16) 
                      && self.checkLength(self.state.username, "usernameValid", 6, 16) && self.checkLength(self.state.name, "nameValid", 1, 1000) 
                      && self.checkMail(emailRegex) && self.checkPw(self.state.pw,self.state.pw2)
    

        if (valid) {
            axios.post('https://5ca5c51d3a08260014278a74.mockapi.io/usersShop',
            {
                name: self.state.name, id: Date.now(), phone: self.state.phone, email: self.state.email,
                username: self.state.username, pw: self.state.pw, address:self.state.address, status:true, cart:"{}", order: "{}", dateOrder: "", statusOrder: "Ordered"
            }
            )
            alert("Đăng kí thành công !");
            this.setState({
                redirect:true
            })
        }
    }
    render() {
        return (
            <div className="modal_box">
                <div className="modal_header">
                    <p>Tạo tài khoản Green shop</p>
                    <div>
                        Bạn đã là thành viên? <button type="button" onClick={() => this.props.switchLogin(true)}>Đăng nhập</button> tại đây.
                                </div>
                </div>
                <div className="modal_body">
                    <div className="modal_input">
                        <div className="login_input">
                            <label >Họ tên <span> {this.state.nameValid}</span> </label>
                            <input className="input-with-status__input" type="text" placeholder="Vui lòng nhập họ và tên của bạn" onChange={this.getInputName}/>
                        </div>
                        <div className="login_input">
                            <label>Email <span>{this.state.emailValid}</span> </label>
                            <input className="input-with-status__input" type="text" placeholder="Vui lòng nhập email của bạn" onChange={this.getInputMail}/>
                        </div>
                        <div className="login_input">
                            <label>Đại chỉ </label>
                            <input className="input-with-status__input" type="text" placeholder="Vui lòng nhập email của bạn" onChange={this.getInputAddress}/>
                        </div>
                        <div className="login_input">
                            <label>Mật khẩu <span>{this.state.pwValid}</span></label>
                            <input className="input-with-status__input" type="password" placeholder="Vui lòng nhập mật khẩu của bạn" onChange={this.getInputPw} />
                        </div>
                        <div className="login_input">
                            <label>Nhập lại mật khẩu <span>{this.state.pw2Valid}</span></label>
                            <input className="input-with-status__input" type="password" placeholder="Vui lòng nhập lại mật khẩu của bạn" onChange={this.getInputPw2} />
                        </div>
                    </div>
                    <div className="modal_btn">
                        <div className="login_input">
                            <label>Số điện thoại <span> {this.state.phoneValid}</span> </label>
                            <input className="input-with-status__input" type="text" placeholder="Vui lòng nhập số điện thoại của bạn" onChange={this.getInputPhone}/>
                        </div>
                        <div className="login_input">
                            <label >Tên đăng nhập <span> {this.state.usernameValid}</span> </label>
                            <input className="input-with-status__input" type="text" placeholder="Vui lòng nhập tên đăng nhập của bạn" onChange={this.getInputUser}/>
                        </div>
                        <button type="button" className="mod-button" onClick={this.addUser}>Đăng kí</button>
                        <p>Hoặc, đăng kí bằng</p>
                        <button type="button" className="mod-button mod-login-fb " onClick={() => alert("Chức năng đang hoàn thiện")}> <i className="fab fa-facebook-f"></i> &emsp; Facebook</button>
                        <button type="button" className="mod-button mod-login-google" onClick={() => alert("Chức năng đang hoàn thiện")}> <i className="fab fa-google-plus-g"></i> &emsp; Google</button>
                    </div>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        switchLogin: (name) => dispatch(switchLogin(name))
    }
}
export default connect(null , mapDispatchToProps) (ModalRigs);
