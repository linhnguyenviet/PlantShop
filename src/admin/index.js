import React, { Component } from "react";
import './index.css';
import Dashboard from "./dashboard";
import { Switch, Route, NavLink } from 'react-router-dom';
import Catalog from "./catalog";
import Customers from "./customers";
import { logOut } from '../actions';
import { connect } from 'react-redux';
import orders from "./orders";


class Admin extends Component {
    onLogOut() {
        localStorage.setItem("id", null);
        localStorage.setItem("status", false);
        localStorage.setItem("name", null);
        localStorage.setItem("cartUser", null);
        localStorage.setItem("address", null);
        localStorage.setItem("email", null);
        localStorage.setItem("phone", null);
        localStorage.setItem("username", null);
        localStorage.setItem("pw", null);
        this.props.logOut();
    }
    render() {
        return (
            <div className="adPage">
                <div className="adHeader">
                    <div>Admin</div>
                    <NavLink exact to="/" className="adLogOut" onClick={() => this.onLogOut()}> <i className="fas fa-sign-out-alt"></i> LogOut</NavLink>
                </div>
                <div className="adMain">
                    <div className="adMain_menu">
                        <NavLink exact to="/" className="adMain_menu-item" activeStyle={{ fontWeight: "500", color: "rgba(0, 0, 0, 0.87)" }}>
                            <i className="fas fa-list-alt"></i>
                            <span>Dashboard</span>
                        </NavLink>
                        <NavLink to="/orders" className="adMain_menu-item" activeStyle={{ fontWeight: "500", color: "rgba(0, 0, 0, 0.87)" }}>
                            <i className="fas fa-list-alt"></i>
                            <span>Orders</span>
                        </NavLink>
                        <NavLink to="/catalog" className="adMain_menu-item" activeStyle={{ fontWeight: "500", color: "rgba(0, 0, 0, 0.87)" }}>
                            <i className="fas fa-list-alt"></i>
                            <span>Catalog</span>
                        </NavLink>
                        <NavLink to="/customers" className="adMain_menu-item" activeStyle={{ fontWeight: "500", color: "rgba(0, 0, 0, 0.87)" }}>
                            <i className="fas fa-users"></i>
                            <span>Customers</span>
                        </NavLink>
                    </div>

                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/orders" component={orders} />
                        <Route path="/catalog" component={Catalog} />
                        <Route path="/customers" component={Customers} />
                    </Switch>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => dispatch(logOut()),
    }
}
export default connect(null, mapDispatchToProps)(Admin);
