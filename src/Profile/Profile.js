import React, { Component } from "react";
import './Profile.css';
import axios from 'axios';
import { connect } from 'react-redux';

class Profile extends Component {
    constructor(props) {
        super(props);
        const id =  JSON.parse(localStorage.getItem("id"));
        const name =  JSON.parse(localStorage.getItem("name"));
        const address =  JSON.parse(localStorage.getItem("address"));
        const phone =  JSON.parse(localStorage.getItem("phone"));
        const pass =  JSON.parse(localStorage.getItem("pw"));
        this.state = {
            id:id,
            username: "",
            pwCheck:pass,
            pw: "",
            pw2: "",
            pw3:"",
            name: name,
            phone: phone,
            address:address,
            checkLogIn: false,
            phoneValid:"",
            pwValid:"",
            pw2Valid:"",
            pw3Valid:"",
            samePwValid:"",
            nameValid:"",
            addrValid:"",
            toggle:false,
        }
    }
    changeToggle = () => {
        this.setState({
            toggle : !this.state.toggle
        })
    }
    getInputName = (e) => {
        this.setState({
            name:e.target.value
        })
    }
    getInputAddr = (e) => {
        this.setState({
            address:e.target.value
        })
    }
    getInputPhone = (e) => {
        this.setState({
            phone:e.target.value
        })
    }
    getInputPw = (e) => {
        this.setState({
            pw:e.target.value
        })
    }
    getInputPw2 = (e) => {
        this.setState({
            pw2:e.target.value
        })
    }
    getInputPw3 = (e) => {
        this.setState({
            pw3:e.target.value
        })
    }

    checkLength = (o, n, min, max) => {
        if (o.length > max || o.length < min) {
            switch(n) {
                case "phoneValid" : this.setState({
                    phoneValid : "Số điện thoại gồm 10-11 kí tự"
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
                case "addrValid" : this.setState({
                    addrValid : "Xin nhập địa chỉ"
                })
                break;
                case "pw2Valid" : this.setState({
                    pw2Valid : "Mật khẩu mới từ 6-16 kí tự"
                })
                break;
                default:
                break;
            }
            
            return false;
        } else {
            switch(n) {
                case "phoneValid" : this.setState({
                    phoneValid : ""
                })
                break;
                case "pwValid" : this.setState({
                    pwValid : ""
                })
                break;
                case "nameValid" : this.setState({
                    nameValid : ""
                }) 
                break;
                case "addrValid" : this.setState({
                    addrValid : ""
                })
                break;
                case "pw2Valid" : this.setState({
                    pw2Valid : ""
                })
                break;
                default:
                break;
            }
            return true;
        }
    }
    checkOldPw = (pw) => {
        if(pw !== this.state.pwCheck) {
            this.setState({
                pwValid: "Mật khẩu không đúng, xin nhập lại"
            }) 
            return false
        }
        else {
            this.setState({
                pwValid: ""
            }) 
            return true;
        }
    }
    checkPw = (pw,pw2,oldPW) => {
        if(pw === oldPW) {
            this.setState({
                pw2Valid: "Mật khẩu mới phải khác mật khẩu cũ"
            }) 
            return false;
        }
        else if(pw !== pw2) {
            this.setState({
                pw3Valid: "Mật khẩu không khớp, xin nhập lại"
            }) 
            return false;
        }
        else {
            this.setState({
                pw3Valid: ""
            }) 
            this.setState({
                pw2Valid: ""
            }) 
            return true;
        }
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
    submit = () => {
        var self =  this;
        var valid = true;
        self.checkLength(self.state.name, "nameValid", 1, 1000);
        self.checkLength(self.state.phone, "phoneValid", 10, 11);
        self.checkPhone(self.state.phone);
        self.checkLength(self.state.phone, "phoneValid", 10, 11);
        self.checkLength(self.state.address, "addrValid", 1, 100);
        if(self.state.toggle)
        {
            self.checkLength(self.state.pw2, "pw2Valid", 6, 16);
            self.checkOldPw(self.state.pw);
            self.checkPw(self.state.pw2,self.state.pw3,self.state.pwCheck);
        }
        valid = valid && self.checkLength(self.state.name, "nameValid", 1, 1000) && self.checkLength(self.state.phone, "phoneValid", 10, 11)

                      && self.checkLength(self.state.phone, "phoneValid", 10, 11)  
                      && self.checkPhone(self.state.phone)
                      && self.checkLength(self.state.address, "addrValid", 1, 100) 
                      
        if(self.state.toggle)
        {
           valid = valid  && self.checkOldPw(self.state.pw) 
           && self.checkPw(self.state.pw2,self.state.pw3,self.state.pwCheck)
           &&  self.checkLength(self.state.pw2, "pw2Valid", 6, 16);
        }             
                     
        if (valid) {   
            localStorage.setItem("name", JSON.stringify(self.state.name));
            localStorage.setItem("phone", JSON.stringify(self.state.phone));
            localStorage.setItem("address", JSON.stringify(self.state.address));
            var password;
            if(self.state.toggle) password = self.state.pw2;
            else password = self.state.checkPw;
            axios.put('https://5ca5c51d3a08260014278a74.mockapi.io/usersShop/'+self.state.id,
                {
                    name: self.state.name, phone: self.state.phone,
                    address:self.state.address,pw:password
                }
            )
            .then (alert("Thay đổi thông tin thành công !"))
            window.location.reload();
        }
    }
    render() {
        var sumPrice = (arr) =>{
            return arr.reduce((total, item) => {
                return total + (parseInt(item.price) * parseInt(item.number))
            }, 0)
        }
        const order =  JSON.parse(localStorage.getItem("orderUser"));
        const statusOrder =  JSON.parse(localStorage.getItem("statusOrder"));
        const dateOrder =  JSON.parse(localStorage.getItem("dateOrder"));
        let orderUser = Object.values(order);
        const totalPrice = sumPrice(orderUser);
        const listOrder = orderUser.map( (item, index) => {
            return <tr key={index + 3}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.number}</td>
                    <td>{item.number * item.price}</td>
                    <td>{statusOrder}</td>
                </tr>
        })
        return (
            <div className="Profile">
                <div className="title">
                    <div>
                        <p>THÔNG TIN CỦA TÔI</p>
                    </div>
                </div>
                <div className="name">
                    <div>Tên</div>
                    <div>
                        <input onChange={this.getInputName} type="text" placeholder={this.state.name}></input>
                    </div>
                    <span>{this.state.nameValid}</span>
                </div>
                <div className="addr">
                    <div>Địa chỉ</div>
                    <div>
                        <input onChange={this.getInputAddr} type="text"  placeholder={this.state.address}></input>
                    </div>
                    <span>{this.state.addrValid}</span>

                </div>
                <div className="phone">
                    <div>Số điện thoại</div>
                    <div>
                        <input onChange={this.getInputPhone} type="text"  placeholder={this.state.phone}></input>
                    </div>
                    <span>{this.state.phoneValid}</span>

                </div>
                
                <div  className="pw">
                  <div>
                      <button className="changepw" onClick={this.changeToggle}><i className="fas fa-key"></i>Đổi mật khẩu</button>
                  </div>
                </div>
                { this.state.toggle 
                            ? <>
                            <div className="pw">
                                <div>Mật khẩu cũ</div>
                                <div>
                                    <input onChange={this.getInputPw} type="password"  ></input>
                                </div>
                                <span>{this.state.pwValid}</span>

                            </div>
                            <div className="pw">
                                <div>Mật khẩu mới</div>
                                <div>
                                    <input onChange={this.getInputPw2} type="password" ></input>
                                </div>
                                <span>{this.state.pw2Valid}</span>
                            </div>
                            <div className="pw">
                                <div>Nhập lại mật khẩu</div>
                                <div>
                                    <input onChange={this.getInputPw3}  type="password" ></input>
                                </div>
                                <span>{this.state.pw3Valid}</span>

                            </div>
                              </>
                            : <></>
                }
                <div className="pw">
                    <div></div>
                    <div>
                        <button onClick={this.submit} >Cập nhật</button>
                    </div>
                </div>
                <div className="title">
                    <div>
                        <p>ĐƠN HÀNG CỦA TÔI</p>
                    </div>
                </div>
                {orderUser.length ?
                    <div style={{width: "80%", margin: "0 auto"}}>
                    <p style={{padding: "10px 8px", backgroundColor: "#3FB871", border: "1px solid #ddd", color: "#fff"}}>Đơn hàng: {dateOrder}</p>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Number</th>
                                <th>Total (VNĐ)</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listOrder}
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>{totalPrice}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                :
                <div style={{padding: "10px 8px", backgroundColor: "#3FB871", border: "1px solid #ddd", color: "#fff", width: "80%", margin: "0 auto 50px auto"}}>Đơn của bạn hàng trống</div>
            }
            
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        dataList: state
    };
};
export default connect(mapStateToProps,null)(Profile);
