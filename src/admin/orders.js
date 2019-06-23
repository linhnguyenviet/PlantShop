import React, { Component } from "react";
import { connect } from 'react-redux';
import ItemOrders from "./itemOrders";

class Orders extends Component {
    render() {
        const listOrdersRequest = this.props.stateReducers.dataUsers.filter(item => {
            return item.order !== "{}"
        })
        const listOrders = listOrdersRequest.map((item, index) => {
            return <ItemOrders key={index} index={index} {...item}/>
        });
        return (
            <div className="adMain_content order_content">
                {listOrders}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        stateReducers: state
    }
}
export default connect(mapStateToProps, null)(Orders);
