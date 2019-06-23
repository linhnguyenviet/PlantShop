import React, { Component } from "react";
import './catalog.css';
import { fetchProducts, actAddProductRequest } from '../actions';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';
import ItemsCatalog from "./itemCatalog";


class Catalog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.nameRef = React.createRef();
        this.priceRef = React.createRef();
        this.imgRef = React.createRef();
        this.detailRef = React.createRef();
        this.speciesRef = React.createRef();
        this.colorRef = React.createRef();
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
    componentDidMount() {
        this.props.fetchProducts();
    }
    addProduct(){
        let name = this.nameRef.current.value;
        let price = this.priceRef.current.value;
        let img = this.imgRef.current.value;
        let detail = this.detailRef.current.value;
        let species = this.speciesRef.current.value;
        let color = this.colorRef.current.value;
        this.props.addProduct({name: name, price: price, img: img, detail: detail, species: species, color: color})
    }
    render() {
        const listProduct = this.props.stateReducers.data.map((item, index) => {
            return <ItemsCatalog key={item.id + index} index={index} {...item} id={item.id} />
        });
        return (
            <div className="adMain_content catalog_content">
                <button className="catalogBtn btn_add" onClick={() => this.openModal()}>New Product</button>
                <Modal
                    visible={this.state.visible}
                    width="810"
                    height="450"
                    effect="fadeInDown"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="modalAdd">
                        <div className="modalAdd_header">
                            New Product
                        </div>
                        <div className="modalAdd_body">
                            <div className="modalAdd_input">
                                <label > Name </label>
                                <input type="text" ref={this.nameRef}/>
                            </div>
                            <div className="modalAdd_input">
                                <label > Price VNĐ</label>
                                <input type="number"  ref={this.priceRef}/>
                            </div>
                            <div className="modalAdd_input">
                                <label > Images </label>
                                <select  ref={this.imgRef}>
                                    <option value="/images/spx2-1.png">Hình 1</option>
                                    <option value="/images/spx2-2.png">Hình 2</option>
                                    <option value="/images/spx2-3.png">Hình 3</option>
                                    <option value="/images/spx2-4.png">Hình 4</option>
                                    <option value="/images/spx2-5.png">Hình 5</option>
                                    <option value="/images/spx2-6.png">Hình 6</option>
                                    <option value="/images/spx2-7.png">Hình 7</option>
                                    <option value="/images/spx2-8.png">Hình 8</option>
                                    <option value="/images/spx2-9.png">Hình 9</option>
                                    <option value="/images/spx2-10.png">Hình 10</option>
                                    <option value="/images/spx2-11.png">Hình 11</option>
                                    <option value="/images/spx2-12.png">Hình 12</option>
                                    <option value="/images/spx2-13.png">Hình 13</option>
                                    <option value="/images/spx2-14.png">Hình 14</option>
                                    <option value="/images/spx2-15.png">Hình 15</option>
                                </select>
                            </div>
                            <div className="modalAdd_input">
                                <label > Detail </label>
                                <input type="text"  ref={this.detailRef}/>
                            </div>
                            <div className="modalAdd_input">
                                <label > Species </label>
                                <select  ref={this.speciesRef}>
                                    <option value="chautreo">Cây chậu treo</option>
                                    <option value="cohoa">Cây cỏ hoa</option>
                                    <option value="dayleo">Cây dây leo</option>
                                    <option value="deban">Cây để bàn</option>
                                    <option value="mayman">Cây may mắn</option>
                                    <option value="trangtri">Cây trang trí</option>
                                    <option value="noithat">Cây nội thất</option>
                                </select>
                            </div>
                            <div className="modalAdd_input">
                                <label > Color </label>
                                <select  ref={this.colorRef}>
                                    <option value="#98cb4a">Xanh Lá</option>
                                    <option value="#f76d3c">Đỏ Cam</option>
                                    <option value="#913ccd">Tím</option>
                                    <option value="#5481e6">Xanh Trời</option>
                                    <option value="#f7d842">Vàng</option>
                                    <option value="#f15f74">Hồng</option>
                                </select>
                            </div>
                        </div>
                        <div className="modalAdd_btn">
                            <button type="button" className="catalogBtn modalAdd_btn-regis" onClick={() => { this.closeModal(); this.addProduct()}}>ADD</button>
                            <button type="button" className="catalogBtn modalAdd_btn-cancel" onClick={() => this.closeModal()}> Cancel</button>
                        </div>
                    </div>
                </Modal>
                <table id="customers">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price VNĐ</th>
                            <th>Images</th>
                            <th>Detail</th>
                            <th>Species</th>
                            <th>Color</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listProduct}
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
        fetchProducts: () => dispatch(fetchProducts()),
        addProduct: (data) => dispatch(actAddProductRequest(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
