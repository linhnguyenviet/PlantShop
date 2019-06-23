import React, { Component } from "react";
import './ProductRow.css';
import { checkLogIn_edit } from '../actions';
import { connect } from 'react-redux';

class ProductRow extends Component {
    handleCart(idUser,cart,index){
        const product =  JSON.parse(localStorage.getItem("cartUser"));
        product[index] = cart ;
        this.props.stateReducers.checkLogIn.cart = product;
        console.log("+++++++", this.props.stateReducers.checkLogIn.cart);
        localStorage.setItem("cartUser", JSON.stringify(product));
        this.props.checkLogIn_edit(idUser, product);
    }
    handleDelete(idUser,index){
        const product =  JSON.parse(localStorage.getItem("cartUser"));
        product.splice(index,1);
        this.props.stateReducers.checkLogIn.cart = product;
        localStorage.setItem("cartUser", JSON.stringify(product));
        this.props.checkLogIn_edit(idUser, product);
    }
    render() {
        console.log(this.props);
        const { price, name, img, number, index} = this.props;
        const idUser =  JSON.parse(localStorage.getItem("id"));
        return (
            <tr className="ProductRow">
                <td>
                    <div><img src={img} alt="dd"></img></div>
                </td>
                <td>{name}</td>
                <td>{price} đ</td>
                <td>
                    <div className="cartNumber">
                        <button type="button" className="sub hvr-pop" disabled={parseInt(number) < 2} onClick={() => this.handleCart(idUser, { name: name, img: img, price: price, number: parseInt(number) - 1 } , index)}> <i className="fas fa-minus"></i> </button>
                        <p>{number}</p>
                        <button type="button" className="add hvr-pop" onClick={() => this.handleCart(idUser, { name: name, img: img, price: price, number: parseInt(number) + 1 } , index)}> <i className="fas fa-plus"></i> </button>
                    </div>
                </td>
                <td>{parseInt(price) * parseInt(number)} đ</td>
                <td>
                    <button type="button" className="dele hvr-pop" onClick={() => this.handleDelete(idUser, index)}> <i className="fas fa-trash-alt"></i> </button>
                </td>
            </tr>
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
        checkLogIn_edit: (id, cart) => dispatch(checkLogIn_edit(id, cart))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (ProductRow);
