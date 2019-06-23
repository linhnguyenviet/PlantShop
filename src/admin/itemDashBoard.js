import React, { Component } from "react";
import { connect } from 'react-redux';

class ItemDashBoard extends Component {
    render() {
        var sumPrice = (arr) =>{
            return arr.reduce((total, item) => {
                return total + (parseInt(item.price) * parseInt(item.number))
            }, 0)
        }
        var sumNumber = (arr) =>{
            return arr.reduce((total, item) => {
                return total + parseInt(item.number);
            }, 0)
        }
        const {dateOrder, order} = this.props;
        const totalPrice = sumPrice(Object.values(JSON.parse(order)));
        const totalNumber = sumNumber(Object.values(JSON.parse(order)));
        return (
            <div className="mutiList_item">
                <div>
                    <p className="mutiList_item-text">{dateOrder}</p>
                    <p className="mutiList_item-desc">{totalNumber} item</p>
                </div>
                <div className="mutiList_item-total"> {totalPrice} đ </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        stateReducers: state
    }
}
export default connect(mapStateToProps, null)(ItemDashBoard);
