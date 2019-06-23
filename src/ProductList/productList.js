import React from 'react';
import { Route, NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchProducts, filterColor, filterSpecies, filterPrice, sort,search, pagination, pagination1 } from '../actions';
import heading from './heading.png';
import './productList.css';
import ResultViewGrid from './resultView/resultViewGrid';
import ResultViewList from './resultView/resultViewList';

class ProductList extends React.Component {
    handleChangeShow = (event) =>{
        this.props.pagination1(event.target.value);
        this.props.pagination(1)
    }
    componentDidMount() {
        this.props.fetchProducts();
    }
    selectAll = () => {
        this.props.search("C");
        this.props.filterSpecies("");
        this.props.pagination(1);
    }
    render() {
        return (
                <div className="wrapper">
                    <div className="container collectiion_page">
                        <NavLink exact to="/">Home /</NavLink>
                        <span>Danh sách sản phẩm</span>
                    </div>
                    <div className="product container">
                        <div className="menu-left">
                            <div className="filterSpecies">
                                <p className="block_title">
                                    Danh mục sản phẩm
                                </p>
                                <hr className="block_title-hr"></hr>
                                <div>
                                    <label className="filter_item" htmlFor="allPrices" >
                                        <input id="allPrices" type="radio" name="species" value="" className="hidden" defaultChecked onChange={this.selectAll } />
                                        <span className="label"></span>
                                        Tất cả
                                    </label>
                                    <label className="filter_item" htmlFor="chautreo" >
                                        <input id="chautreo" type="radio" name="species" value="chautreo" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterSpecies("chautreo")}} />
                                        <span className="label"></span>
                                        Cây chậu treo
                                    </label>
                                    <label className="filter_item" htmlFor="cohoa" >
                                        <input id="cohoa" type="radio" name="species" value="cohoa" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterSpecies("cohoa")}} />
                                        <span className="label"></span>
                                        Cây cỏ hoa
                                    </label>
                                    <label className="filter_item" htmlFor="dayleo" >
                                        <input id="dayleo" type="radio" name="species" value="dayleo" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterSpecies("dayleo")}} />
                                        <span className="label"></span>
                                        Cây dây leo
                                    </label>
                                    <label className="filter_item" htmlFor="deban" >
                                        <input id="deban" type="radio" name="species" value="deban" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterSpecies("deban")}} />
                                        <span className="label"></span>
                                        Cây để bàn
                                    </label>
                                    <label className="filter_item" htmlFor="mayman" >
                                        <input id="mayman" type="radio" name="species" value="mayman" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterSpecies("mayman")}} />
                                        <span className="label"></span>
                                        Cây may mắn
                                    </label>
                                    <label className="filter_item" htmlFor="trangtri" >
                                        <input id="trangtri" type="radio" name="species" value="trangtri" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterSpecies("trangtri")}} />
                                        <span className="label"></span>
                                        Cây trang tri
                                    </label>
                                    <label className="filter_item" htmlFor="noithat" >
                                        <input id="noithat" type="radio" name="species" value="noithat" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterSpecies("noithat")}} />
                                        <span className="label"></span>
                                        Cây nội thất
                                    </label>
                                </div>
                            </div>
                            <div className="filterPrice">
                                <p className="block_title">
                                    Tìm theo giá
                                </p>
                                <hr className="block_title-hr"></hr>
                                <div>
                                    <label className="filter_item" htmlFor="allPrice" >
                                        <input id="allPrice" type="radio" name="price" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterPrice(0,2000000)}} defaultChecked />
                                        <span className="label"></span>
                                        Tất cả
                                    </label>
                                    <label className="filter_item" htmlFor="twoFour" >
                                        <input id="twoFour" type="radio" name="price" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterPrice(200000,400000)}} />
                                        <span className="label"></span>
                                        200.000 Đ-400.000 Đ
                                    </label>
                                    <label className="filter_item" htmlFor="fourSix" >
                                        <input id="fourSix" type="radio" name="price" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterPrice(400000,600000)}} />
                                        <span className="label"></span>
                                        400.000 Đ-600.000 Đ
                                    </label>
                                    <label className="filter_item" htmlFor="sixEight" >
                                        <input id="sixEight" type="radio" name="price" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterPrice(600000,800000)}} />
                                        <span className="label"></span>
                                        600.000 Đ-800.000 Đ
                                    </label>
                                    <label className="filter_item" htmlFor="eightTen" >
                                        <input id="eightTen" type="radio" name="price" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterPrice(800000,1000000)}} />
                                        <span className="label"></span>
                                        800.000 Đ-1.000.000 Đ
                                    </label>
                                    <label className="filter_item" htmlFor="tenTwenty" >
                                        <input id="tenTwenty" type="radio" name="price" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterPrice(1000000,2000000)}} />
                                        <span className="label"></span>
                                        1.000.000 Đ-2.000.000 Đ
                                    </label>
                                </div>
                            </div>
                            <div className="filterColor">
                                <p className="block_title">
                                    Tìm theo màu
                        </p>
                                <hr className="block_title-hr"></hr>
                                <div>
                                    <label className="filter_item" htmlFor="xanhcay" >
                                        <input id="xanhcay" type="radio" name="color" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterColor("#98cb4a")}} />
                                        Xanh cây
                                        <span className="label"></span>
                                    </label>
                                    <label className="filter_item" htmlFor="docam" >
                                        <input id="docam" type="radio" name="color" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterColor("#f76d3c")}} />
                                        Đỏ cam
                                        <span className="label"></span>
                                    </label>
                                    <label className="filter_item" htmlFor="tim" >
                                        <input id="tim" type="radio" name="color" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterColor("#913ccd")}} />
                                        Tím
                                        <span className="label"></span>
                                    </label>
                                    <label className="filter_item" htmlFor="xanhtroi" >
                                        <input id="xanhtroi" type="radio" name="color" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterColor("#5481e6")}} />
                                        Xanh trời
                                        <span className="label"></span>
                                    </label>
                                    <label className="filter_item" htmlFor="vang" >
                                        <input id="vang" type="radio" name="color" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterColor("#f7d842")}} />
                                        Vàng
                                        <span className="label"></span>
                                    </label>
                                    <label className="filter_item" htmlFor="hong" >
                                        <input id="hong" type="radio" name="color" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterColor("#f15f74")}} />
                                        Hồng
                                        <span className="label"></span>
                                    </label>
                                    <label className="filter_item" htmlFor="allColor" >
                                        <input id="allColor" type="radio" name="color" className="hidden" onChange={() => {this.props.pagination(1); this.props.filterColor("")}} defaultChecked />
                                        Tất cả
                                        <span className="label"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="displayProduct">
                            <div className="displayHeading">
                                <div className="headingImg">
                                    <img src={heading} alt="heading" />
                                </div>
                                <div className="headingNav">
                                    <div>
                                        <NavLink exact to="/product" activeStyle={{color: "#59b586"}} className="view_product">
                                            <i className="fas fa-th"></i>
                                        </NavLink>
                                        <NavLink exact to="/product/listView" activeStyle={{color: "#59b586"}} className="view_product">
                                            <i className="fas fa-list"></i>
                                        </NavLink>
                                    </div>
                                    <div>
                                        <div className="sort_product">
                                            <span>Sắp xếp theo</span>
                                            <select onChange={event => this.props.sortProduct(event.target.value)}>
                                                <option value="name"> Tên sản phẩm </option>
                                                <option value="price"> Giá sản phẩm </option>
                                            </select>
                                        </div>
                                        <div className="sort_product">
                                            <span>Show</span>
                                            <select onChange={this.handleChangeShow}>
                                                <option value="6"> 6 </option>
                                                <option value="12"> 12 </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="resultView">
                                <Route exact path="/product" component={ResultViewGrid} />
                                <Route path="/product/:listView" component={ResultViewList} />
                            </div>

                        </div>
                    </div>
                </div>
        )
    }
}



const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        filterColor: (color) => dispatch(filterColor(color)),
        filterPrice: (min, max) => dispatch(filterPrice(min, max)),
        filterSpecies: (species) => dispatch(filterSpecies(species)),
        sortProduct: (data) => dispatch(sort(data)),
        search: (name) => dispatch(search(name)),
        pagination: (number) => dispatch(pagination(number)),
        pagination1: (number) => dispatch(pagination1(number))
    }
}

export default connect(null, mapDispatchToProps)(ProductList);