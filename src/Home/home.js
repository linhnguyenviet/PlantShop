import React, { Component } from "react";
import { Slide } from 'react-slideshow-image';
import './home.css';
import banner from './banner.png'
import Product from './Product';
import SmallProduct from './SmallProduct';
import { connect } from 'react-redux';
import Modal from 'react-awesome-modal';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
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
        this.openModal();
    }
    render() {
        const data = this.props.todoList.data;
        const slideImages = [
            'https://wheelandbarrow.com.au/images/category_banner/DSC_0227.jpg',
            'https://vuoncayviet.com/data/items/1149/cay-canh-lam-qua-tang-de-thuong.jpg',
            'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/59807963_2259809167605604_8093574928227368960_o.jpg?_nc_cat=106&_nc_eui2=AeGhnUJ1E0hmiZ9uzAY4N5dRDxTLs3cUdE2y2jVC4HXKK8_uY28nYK3IPu7qebdaC48xRP0cNSkxG-8j_MVCaUMkRxBJZ6hs-yVHDmX7rr4onw&_nc_oc=AQmR45_degqH_mHvp94QVBKkhsoRzQz7zEcxg0rcp-G48w7P9wClF77XVvW0LpZ7_CJCIvwqDzW3DiRKSHkYx4x0&_nc_ht=scontent.fsgn2-3.fna&oh=f7a9405da735fe49cf6fca3f0faf11bd&oe=5D85DFFF'
          ];
        const properties = {
            duration: 2500,
            transitionDuration: 1000,
            infinite: true,
            indicators: true,
            arrows: true
        }
        return (
            <div className="home">
                <Slide {...properties}>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                        </div>
                    </div>
                </Slide>

                <Modal
                    visible={this.state.visible}
                    width="810"
                    height="450"
                    effect="fadeInDown"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="modal_box">
                        <div className="modal_header">
                            <p>Chào mừng bạn đã đến với Green Shop</p>
                            <div>
                                
                            </div>
                        </div>
                        <div className="modal_body">
                                <Product info={data[2]} sale="30%" box="boxA small"></Product>
                                <Product info={data[5]} box="boxB small"></Product>
                                <Product info={data[3]} sale="10%" box="boxC small"></Product>
                        </div>
                    </div>
                </Modal>

                <div className="hotProduct container">
                    <p className="blockTitle">
                        Sản phẩm nổi bật
                    </p>
                    <hr />
                    <div className="hotProduct_ct">
                        <div className="hotProduct_item">
                            <div className="wrapper">
                                <Product info={data[2]} box="boxA big"></Product>
                                <Product info={data[5]} box="boxB big"></Product>
                                <Product info={data[3]} sale="30%" box="boxC small"></Product>
                                <Product info={data[4]} box="boxD small"></Product>
                                <Product info={data[1]} sale="50%" box="boxE small"></Product>
                                <Product info={data[11]} box="boxF small"></Product>
                            </div>

                        </div>
                    </div>
                    <div className="hotProduct_ct2">
                        <div className="titleWrap">
                            <div>
                                <p className="blockTitle">
                                    Sản phẩm mua nhiều
                                </p>
                                <hr />
                            </div>
                            <div>
                                <p className="blockTitle 2">
                                    Sản phẩm khuyến mại
                                </p>
                                <hr />
                            </div>

                        </div>
                        <div className="wrapper2">
                            <div className="box1 small">
                                <SmallProduct info={data[7]} sale="30%" ></SmallProduct>
                                <SmallProduct info={data[8]}></SmallProduct>
                                <SmallProduct info={data[6]}></SmallProduct>
                                <SmallProduct info={data[4]} sale="40%" ></SmallProduct>
                                <SmallProduct info={data[13]}></SmallProduct>
                            </div>
                            <div className="titleWrap titleWrap2 ">
                                        <div>
                                            <p className="blockTitle">
                                                Sản phẩm mua nhiều
                                            </p>
                                            <hr/>
                                        </div>
                                        <div>
                                            <p className="blockTitle 2">
                                                Sản phẩm khuyến mại
                                            </p>
                                            <hr/>
                                        </div>
                                    </div>      
                            <Product info={data[12]} box="box2 small"></Product>
                            <Product info={data[14]} sale="30%" box="box3 small"></Product>
                            <Product info={data[1]} box="box4 small"></Product>
                            <Product info={data[7]} sale="15%" box="box5 small"></Product>
                            <Product info={data[6]} box="box6 small"></Product>
                            <Product info={data[3]} sale="25%" box="box7 small"></Product>
                        </div>
                    </div>
                    <div className="banner">
                        <img src={banner} alt="alr"></img>
                    </div>
                    <div className="hotProduct_ct3">
                        <p className="blockTitle">
                            Sản phẩm mới
                        </p>
                        <hr />
                        <div className="wrapper3">
                            <Product info={data[5]} box="box0 small"></Product>
                            <Product info={data[7]} box="box1--edit small"></Product>
                            <Product info={data[5]} box="box2 small"></Product>
                            <Product info={data[4]} box="box3 small"></Product>
                            <Product info={data[2]} box="box4 small"></Product>
                            <Product info={data[11]} box="box5 small"></Product>
                            <Product info={data[10]} box="box6 small"></Product>
                            <Product info={data[3]} box="box7 small"></Product>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        todoList: state
    };
};

export default connect(mapStateToProps, null)(Home);
