import React from 'react';
import './productDetail.css'
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { productDetail, checkLogIn_edit } from '../actions';
import Modal from 'react-awesome-modal';
import ModalRigs from '../Modal/ModalRigs';
import ModalLogin from '../Modal/ModalLogin';


class ProductDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            srcimg: this.props.stateReducers.productDetail.img,
            number: 1,
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
    scrollToTop() {
        /* window.scrollTo(0, 0) */
        function scrolling() {
            if(window.scrollY > 220) {
                setTimeout(function() {
                    window.scrollTo(0, window.scrollY - 30);
                    scrolling();
                }, 6);
            };
        };
        scrolling();
    };
    componentDidMount() {
        this.scrollToTop();
    }

    // static getDerivedStateFromProps(nextProps){
    //     return { srcimg: nextProps.stateReducers.productDetail.img};
    // }

    render() {
        const name = this.props.stateReducers.productDetail.name;
        const img = this.props.stateReducers.productDetail.img;
        // console.log(this.props.productDetails.productDetail);
        const price = this.props.stateReducers.productDetail.price;
        const idUser =  JSON.parse(localStorage.getItem("id"));
        const status =  JSON.parse(localStorage.getItem("status"));

        return (
            <div className="productDetail container">
                <div className="collectiion_page">
                    <NavLink exact to="/">Home /</NavLink>
                    <span>{name}</span>
                </div>
                <div className="product_info">
                    <div className="product_info-gallery">
                        <div className="product_gallery-preview">
                            <img src={this.state.srcimg} alt="altImg" />
                        </div>
                        <div className="product_gallery-thumb">
                            <div className="gallery_thumb-item" onClick={() => this.handleImg(img)}>
                                <img src={img} alt="altImg" />
                            </div>
                            <div className="gallery_thumb-item" onClick={() => this.handleImg("images/spx2-5.png")}>
                                <img src="images/spx2-5.png" alt="altImg" />
                            </div>
                            <div className="gallery_thumb-item" onClick={() => this.handleImg("images/spx2-6.png")}>
                                <img src="images/spx2-6.png" alt="altImg" />
                            </div>
                            <div className="gallery_thumb-item" onClick={() => this.handleImg("images/spx2-7.png")}>
                                <img src="images/spx2-7.png" alt="altImg" />
                            </div>
                            <div className="gallery_thumb-item" onClick={() => this.handleImg("images/spx2-8.png")}>
                                <img src="images/spx2-8.png" alt="altImg" />
                            </div>
                        </div>
                    </div>
                    <div className="product_info-desc">
                        <p className="product_name"> {name} </p>
                        <p className="product_rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </p>
                        <div className="product_price">
                            <span className="product_price-current"> {price} đ </span>
                            <span className="product_price-last"> {parseInt(price) + 50000} đ </span>
                        </div>
                        <p className="product_detail">
                            Cây mọc thành bụi thưa, thân vươn thẳng với chiều cao cây trung bình từ 0,8-1,2m. Lá hình trứng, mép lá nguyên, gân lá nổi rõ, phiến rộng khoảng từ 15-20cm. Lá có màu xanh đậm ở mặt trên, quanh gân lá có màu trắng sữa; mặt dưới lá nhạt màu hơn. Lá cây dạ lam mọc cách, cuống lá dài khi rụng để lại các khía màu nâu nhạt.
                        </p>
                        <div className="product_chooseNumber">
                            <span>Số lượng: </span>
                            <button type="button" className="product_abate" disabled={this.state.number < 2} onClick={() => this.handleCount(-1)} >-</button>
                            <div className="product_number"> {this.state.number} </div>
                            <button type="button" className="product_augment" onClick={() => this.handleCount(1)} >+</button>
                        </div>
                        {
                            status ?
                            <Link to="/cart"> <button type="button" className="resultView_itemBtn" onClick={() => this.handleCart(idUser, [{name: name, img: img, price: price, number: this.state.number}])} > MUA NGAY </button> </Link>
                            :
                            <button type="button" className="resultView_itemBtn" onClick={() => this.openModal()} > MUA NGAY </button>
                        }
                        {/* modal - add to cart */}
                        {
                            status ?
                            <button type="button" className="resultView_itemBtn" onClick={() => this.handleCart(idUser, [{name: name, img: img, price: price, number: this.state.number}])} > <i className="fas fa-cart-plus"></i> THÊM VÀO GIỎ HÀNG </button>
                            :
                            <button type="button" className="resultView_itemBtn" onClick={() => this.openModal()} > <i className="fas fa-cart-plus"></i> THÊM VÀO GIỎ HÀNG </button>
                        }
                        <Modal
                            visible={this.state.visible}
                            width="810"
                            height="480"
                            effect="fadeInDown"
                            onClickAway={() => this.closeModal()}
                        >
                            {this.props.stateReducers.switchLogin ? <ModalLogin closeModal={() => this.closeModal()} indexx={img} /> : <ModalRigs indexx={img} closeModal={() => this.closeModal()} />}
                        </Modal>
                    </div>
                </div>

                <div className="product_same">
                    <p className="block_title">
                        Sản phẩm cùng loại
                    </p>
                    <hr className="block_title-hr"></hr>
                    <div className="product_same-box">
                        <Link to="/product-Detail" className="product_same-item" onClick={() => {this.scrollToTop(); this.handleImg("images/spx2-8.png"); this.props.productDetail("Cây cọ Nhật", "images/spx2-8.png", 400000)}}>
                            <div className="same-img">
                                <img src="images/spx2-8.png" alt="alt" />
                            </div>
                            <div className="same_desc">
                                <p className="same_name"> Cây Cọ Nhật </p>
                                <p className="same_rating product_rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </p>
                                <div className="same_price">
                                    <span className="same_price-current product_price-current"> 400000 đ </span>
                                    <span className="same_price-last product_price-last"> 450000 đ </span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/product-Detail" className="product_same-item" onClick={() => {this.scrollToTop(); this.handleImg("images/spx2-1.png"); this.props.productDetail("Cây Dạ Lam", "images/spx2-1.png", 250000)}}>
                            <div className="same-img">
                                <img src="images/spx2-1.png" alt="alt" />
                            </div>
                            <div className="same_desc">
                                <p className="same_name"> Cây Dạ Lam </p>
                                <p className="same_rating product_rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </p>
                                <div className="same_price">
                                    <span className="same_price-current product_price-current"> 250000 đ </span>
                                    <span className="same_price-last product_price-last">300000 đ </span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/product-Detail" className="product_same-item" onClick={() => {this.scrollToTop(); this.handleImg("images/spx2-4.png"); this.props.productDetail("Cây Cọ Ta", "images/spx2-4.png", 500000)}}>
                            <div className="same-img">
                                <img src="images/spx2-4.png" alt="alt" />
                            </div>
                            <div className="same_desc">
                                <p className="same_name"> Cây Cọ Ta </p>
                                <p className="same_rating product_rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </p>
                                <div className="same_price">
                                    <span className="same_price-current product_price-current"> 500000 đ </span>
                                    <span className="same_price-last product_price-last"> 550000 đ </span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/product-Detail" className="product_same-item" onClick={() => {this.scrollToTop(); this.handleImg("images/spx2-15.png"); this.props.productDetail("Cây Cây Cây", "images/spx2-15.png", 260000)}}>
                            <div className="same-img">
                                <img src="images/spx2-15.png" alt="alt" />
                            </div>
                            <div className="same_desc">
                                <p className="same_name"> Cây Cây Cây </p>
                                <p className="same_rating product_rating">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </p>
                                <div className="same_price">
                                    <span className="same_price-current product_price-current"> 260000 đ </span>
                                    <span className="same_price-last product_price-last"> 310000 đ </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
