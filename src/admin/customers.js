import React, { Component } from "react";
import { connect } from 'react-redux';
import { actDeleteUserRequest } from '../actions';

class Customers extends Component {
    onDeleteUser(id, name){
        if (confirm('Bạn chắc chắn muốn xoá:' + ' ' + name)) { // eslint-disable-line
            this.props.deleteUser(id);
        }
    }

    render() {
        const listUsers = this.props.stateReducers.dataUsers.map((item, index) => {
            return  <tr key={index + 10}>
                        <td>{parseInt(index) + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.address}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.username}</td>
                        <td>
                            <button type="button" className="catalogBtn btn_delete" onClick={() => this.onDeleteUser(item.id, item.name)}> <i className="fas fa-trash-alt"></i> </button>
                        </td>
                    </tr>
        });
        return (
            <div className="adMain_content customers_content">
                <table id="customers">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Users</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers}
                    </tbody>
                </table>

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
        deleteUser: (id) => dispatch(actDeleteUserRequest(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Customers);
