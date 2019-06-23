import React, { Component } from "react";
import { connect } from 'react-redux';
import { actEditStatusOrderUserRequest } from '../actions';

class ItemOrders extends Component {
    constructor(props){
        super(props);
        this.status = React.createRef();
    }
    handleEdit(id, name) {
        if (confirm('Bạn muốn lưu thay đổi trạng thái đơn hàng của' +  " " + name)) { // eslint-disable-line
            this.props.editStatusOrder(id, {statusOrder: this.status.current.value})
        }
        else{
            this.status.current.value = this.props.statusOrder;
        }
    }

    render() {
        var sumPrice = (arr) =>{
            return arr.reduce((total, item) => {
                return total + (parseInt(item.price) * parseInt(item.number))
            }, 0)
        }
        const {id, index, name, address, phone, order, statusOrder} = this.props;
        const totalPrice = sumPrice(Object.values(JSON.parse(order)));
        const listOrder = (Object.values(JSON.parse(order))).map((item, indexx) => {
            return <tr key={indexx + 3}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.number}</td>
                    <td>{item.number * item.price}</td>
                </tr>
        })
        return (
            <div>
                <div>
                <p style={{padding: "10px 8px", backgroundColor: "#3FB871 ", border: "1px solid #ddd", color: "#fff"}}>Order {index + 1}:</p>
                <p style={{padding: "10px 8px", backgroundColor: "#3FB871 ", borderLeft: "1px solid #ddd", color: "#fff", borderRight: "1px solid #ddd"}}>{name + " - " +address + " - " + phone}</p>
                <table id="customers">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Number</th>
                            <th>Total (VNĐ)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listOrder}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
                <div style={{marginBottom: "40px"}}>
                    <button className="catalogBtn btn_add" onClick={() => { this.handleEdit(id, name) }}>Enter</button>
                    <select style={{padding: "10px", border: "1px solid #3FB871 ", marginLeft: "10px"}} defaultValue={statusOrder} ref={this.status}>
                        <option value="Ordered">Ordered</option>
                        <option value="Cancelled">Cancelled</option>
                        <option value="Delivered">Delivered</option>
                    </select>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        stateReducers: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        editStatusOrder: (id, data) => dispatch(actEditStatusOrderUserRequest(id, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemOrders);
