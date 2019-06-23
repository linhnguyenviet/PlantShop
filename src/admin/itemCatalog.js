import React, { Component } from "react";
import { connect } from 'react-redux';
import { actDeleteProductRequest, actEditProductRequest } from '../actions';

class ItemsCatalog extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.priceRef = React.createRef();
        this.imgRef = React.createRef();
        this.detailRef = React.createRef();
        this.speciesRef = React.createRef();
        this.colorRef = React.createRef();
    }
    onEdit(id) {
        if (confirm('Bạn muốn lưu thay đổi:' +  " " +this.nameRef.current.value)) { // eslint-disable-line
            let nameEdit = this.nameRef.current.value;
            let priceEdit = this.priceRef.current.value;
            let imgEdit = this.imgRef.current.value;
            let detailEdit = this.detailRef.current.value;
            let speciesEdit = this.speciesRef.current.value;
            let colorEdit = this.colorRef.current.value;
            console.log(nameEdit);
            this.props.editProduct(id, { name: nameEdit, price: priceEdit, img: imgEdit, detail: detailEdit, species: speciesEdit, color: colorEdit });
        }
        else{
            this.nameRef.current.value = this.props.name;
            this.priceRef.current.value = this.props.price;
            this.imgRef.current.value = this.props.img;
            this.detailRef.current.value = this.props.detail;
            this.speciesRef.current.value = this.props.species;
            this.colorRef.current.value = this.props.color;
        }

    }
    onDelete = (id, name) => {
        if (confirm('Bạn chắc chắn muốn xoá:' + ' ' + name)) { // eslint-disable-line
            this.props.DeleteUser(id);
        }
    }

    render() {
        const {index, id, name, price, img, detail, species, color} = this.props;
        return (
            <tr>
                <td>{parseInt(index) + 1}</td>
                <td>
                    {/* {item.name} */}
                    <input defaultValue={name} ref={this.nameRef} type="text" />
                </td>
                <td> <input defaultValue={price} ref={this.priceRef} type="number" /> </td>
                <td>
                    <select defaultValue={img} ref={this.imgRef}>
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
                </td>
                <td> <input defaultValue={detail} ref={this.detailRef} type="text" /> </td>
                <td>
                    <select defaultValue={species} ref={this.speciesRef}>
                        <option value="chautreo">Cây chậu treo</option>
                        <option value="cohoa">Cây cỏ hoa</option>
                        <option value="dayleo">Cây dây leo</option>
                        <option value="deban">Cây để bàn</option>
                        <option value="mayman">Cây may mắn</option>
                        <option value="trangtri">Cây trang trí</option>
                        <option value="noithat">Cây nội thất</option>
                    </select>
                </td>
                <td>
                    <select defaultValue={color} ref={this.colorRef}>
                        <option value="#98cb4a">Xanh Lá</option>
                        <option value="#f76d3c">Đỏ Cam</option>
                        <option value="#913ccd">Tím</option>
                        <option value="#5481e6">Xanh Trời</option>
                        <option value="#f7d842">Vàng</option>
                        <option value="#f15f74">Hồng</option>
                    </select>
                </td>
                <td>
                    <button type="button" className="catalogBtn btn_delete" onClick={() => this.onDelete(id, name)}> <i className="fas fa-trash-alt"></i> </button>
                    <button type="button" className="catalogBtn btn_edit" onClick={() => this.onEdit(id)}> <i className="fas fa-pencil-alt"></i> </button>
                </td>

            </tr>
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
        DeleteUser: (id) => dispatch(actDeleteProductRequest(id)),
        editProduct: (id, data) => dispatch(actEditProductRequest(id, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemsCatalog);
