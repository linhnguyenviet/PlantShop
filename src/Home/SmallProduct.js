import React, { Component } from "react";
import './SmallProduct.css';
import { Link } from "react-router-dom";
import { productDetail, checkLogIn_edit } from '../actions';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';
import ModalRigs from '../Modal/ModalRigs';
import ModalLogin from '../Modal/ModalLogin';

class SmallProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    handleImg(img) {
        this.setState({
            srcimg: img
        })
    }
    handleCount(number) {
        let count = this.state.number;
        this.setState({
            number: count += number
        })
    }
    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }

    handleCart(idUser,cart){
        var findIndex = (products, name) => {
            var result = -1;
            products.forEach((product, index) => {
                if (product.name === name) {
                    result = index;
                }
            });
            return result;
        }
        var indexProduct;
        console.log(cart[0].name);
        var products =  JSON.parse(localStorage.getItem("cartUser"));
        indexProduct = findIndex(products, cart[0].name);
        console.log(indexProduct);
        if(indexProduct !== -1){
            products[indexProduct].number = parseInt(products[indexProduct].number) + parseInt(cart[0].number);
        }
        else {products= products.concat(cart);}
        localStorage.setItem("cartUser", JSON.stringify(products));
        this.props.checkLogIn_edit(idUser, products);
    }


    render() {
        const data = this.props.info;
        var image, name, price;
        if (data !== undefined) {
            image = data.img;
            name = data.name;
            price = data.price;
        }
        const idUser =  JSON.parse(localStorage.getItem("id"));
        const status =  JSON.parse(localStorage.getItem("status"));
        return (
            <div className="blockBox">
                <Link to="/product-Detail" className={`SmallProduct`} onClick={() => this.props.productDetail(name, image, price)} title={name}>
                    <div className="smallContainer">
                        <div className="smallContainer__img">
                            <img src={image} alt="ggg" />
                        </div>
                        <div className="smallContainer__text">
                            <div>
                                <span> {name}
                                </span>
                            </div>
                            <div>
                                <span>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </span>
                            </div>
                            <div>
                                <span>{price}</span>
                            </div>
                        </div>
                    </div>
                </Link>
                <div className="productSmall_hover">
                    {
                        status ?
                            <button type="button" title="Thêm vào giỏ hàng" onClick={() => this.handleCart(idUser, [{ name: name, img: image, price: price, number: 1 }])} > <i className="fas fa-cart-plus"></i> </button>
                            :
                            <button type="button" onClick={() => this.openModal()} title="Thêm vào giỏ hàng"> <i className="fas fa-cart-plus"></i> </button>
                    }
                </div>
                <Modal
                    visible={this.state.visible}
                    width="810"
                    height="480"
                    effect="fadeInDown"
                    onClickAway={() => this.closeModal()}
                >
                    {this.props.stateReducers.switchLogin ? <ModalLogin closeModal={() => this.closeModal()} indexx={image} /> : <ModalRigs indexx={image} closeModal={() => this.closeModal()}/>}
                </Modal>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        stateReducers: state
    };
};
const mapDispatchToProps = dispatch => {
    return {
        productDetail: (name, img, price) => dispatch(productDetail(name, img, price)),
        checkLogIn_edit: (id, cart) => dispatch(checkLogIn_edit(id, cart))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SmallProduct);
