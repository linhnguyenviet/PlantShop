import React, { Component } from "react";
import './Regis.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

class Regis extends Component {
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
            nameValid:"*",
            redirect:false
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
    checkPhone = (num) => {
        (isNaN(num)) 
        ?
        this.setState({
            phoneValid : "Xin nhập số"
        })
        :  
        this.setState({
            phoneValid : "*"
        })
        return !isNaN(num)
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
                break; this.setState({
                    phoneValid : "*"
                })
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
                case "phoneValid" :
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
        self.checkPhone(self.state.phone);
        self.checkLength(self.state.pw, "pwValid", 6, 16);
        self.checkLength(self.state.username, "usernameValid", 6, 16);
        self.checkLength(self.state.name, "nameValid", 1, 1000);
        self.checkMail(emailRegex);
        self.checkPw(self.state.pw,self.state.pw2)
        valid = valid && self.checkLength(self.state.phone, "phoneValid", 10, 11) && self.checkLength(self.state.pw, "pwValid", 6, 16) 
                      && self.checkLength(self.state.username, "usernameValid", 6, 16) && self.checkLength(self.state.name, "nameValid", 1, 1000) 
                      && self.checkMail(emailRegex) && self.checkPw(self.state.pw,self.state.pw2)
                      && self.checkPhone(self.state.phone)

    

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
        console.log(this.state)
        if(!this.state.redirect)
        return (
            <div className="Regis">
                <div className="Top">
                    <div>
                        <p>THÔNG TIN CÁ NHÂN</p>
                    </div>
                    <div>
                        <div>
                            <label>Họ và tên <span> {this.state.nameValid}</span></label>
                            <input onChange={this.getInputName} placeholder="Vui lòng nhập họ và tên" type="text"></input>
                        </div>
                        <div>
                            <label>Số điện thoại <span> {this.state.phoneValid}</span></label>
                            <input onChange={this.getInputPhone} placeholder="Vui lòng nhập số điện thoại "  type="text"></input>
                        </div>
                        <div>
                            <label>Địa chỉ Email <span>{this.state.emailValid}</span></label>
                            <input onChange={this.getInputMail} placeholder="Vui lòng nhập Email"  type="text"></input>
                        </div>
                        <div>
                            <label>Username <span> {this.state.usernameValid}</span></label>
                            <input onChange={this.getInputUser} placeholder="Vui lòng nhập tên đăng nhập" type="text"></input>
                        </div>
                        <div>
                            <label>Địa chỉ</label>
                            <input onChange={this.getInputAddress} placeholder="Vui lòng nhập địa chỉ" type="text"></input>
                        </div>
                      
                        

                    </div>
                    <div className="Bottom">
                        <div>
                            <p>THÔNG TIN TÀI KHOẢN</p>
                        </div>
                        <div>
                            <div>
                                <label>Mật khẩu <span>{this.state.pwValid}</span></label>
                                <input onChange={this.getInputPw} placeholder="Vui lòng nhập mật khẩu" type="password"></input>
                            </div>
                            <div>
                                <label>Nhập lại mật khẩu <span>{this.state.pw2Valid}</span></label>
                                <input onChange={this.getInputPw2} placeholder="Vui lòng nhập lại mật khẩu"  type="password"></input>
                            </div>
                            <div className="groupButton">
                                <div className="buttonGroup">
                                    <button onClick={this.goBack} className="back hvr-fade">QUAY LẠI</button>
                                </div>
                                <div className="buttonGroup">
                                    <button onClick={this.addUser} className="singIn hvr-fade">ĐĂNG KÝ</button>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>

        );
        else return <Redirect to="/login"/>

    }
}
export default Regis;
