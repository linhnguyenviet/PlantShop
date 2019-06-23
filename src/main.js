import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Home/home';
import ProductList from './ProductList/productList';
import Login from './Login/Login';
import Regis from './Login/Regis';
import Cart from './Cart/Cart';
import CheckOut from './CheckOut/CheckOut';
import ProductDetail from './ProductDetail/productDetail';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import { connect } from 'react-redux';
import { fetchProducts, checkLogIn, search, logOut } from './actions'
import './NavBar.css';
import './App.css';
import './TopHeader.css';
import image from './Image/Image/image.png';
import image2 from './Image/Image/image2.png';
import './HeaderImg.css';
import NotFound404 from './NotFound/notFound404';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            toggle: false,
            searchEnter:false,
            toggleSearch:false,
            reload:""
        }
    }
    componentDidMount() {
        this.props.fetchProducts();
    }
    getSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    scrollToTop() {
        /* window.scrollTo(0, 0) */
        function scrolling() {
            if (window.scrollY > 0) {
                setTimeout(function () {
                    window.scrollTo(0, window.scrollY - 30);
                    scrolling();
                }, 6);
            };
        };
        scrolling();
    };
    toggleMenu = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    toggleSearch = () => {
        this.setState({
            toggleSearch:!this.state.toggleSearch
        })
    }
    logOut = () => {
        this.setState({reload:""})
        localStorage.setItem("id", null);
        localStorage.setItem("status", false);
        localStorage.setItem("name", null);
        localStorage.setItem("cartUser", null);
        localStorage.setItem("address", null);
        localStorage.setItem("email", null);
        localStorage.setItem("phone", null);
        localStorage.setItem("username", null);
        localStorage.setItem("pw", null);
    }
    render() {
        const name =  JSON.parse(localStorage.getItem("name"));
        const status =  JSON.parse(localStorage.getItem("status"));
        console.log(status)
        var sumPrice = (arr) =>{
            if(arr.length) 
            return arr.reduce((total, item) => {
                if(item !== null)
                return total + parseInt(item.number);
                return total;
            }, 0)
            return 0;
        }
        const total = JSON.parse(localStorage.getItem("cartUser"));
        var totalProduct;
        if(total!=null)
         totalProduct = sumPrice(total);
        else   totalProduct =0;;
        // if(this.state.searchEnter) 
        // return <Redirect to='/product'/>
         return (
            <div className="App">
                <div className="TopHeader">
                    <div className="TopHeader-inner">
                        <span>Open time 8:00 -18:00 Monday - Sunday</span>
                        <span> </span>
                        <Link to="/"> <i className="fab fa-facebook-f" /> </Link>
                        <Link to="/"> <i className="fab fa-twitter" /> </Link>
                        <Link to="/"> <i className="fab fa-linkedin-in" /> </Link>
                        <Link to="/"> <i className="fab fa-instagram" /> </Link>
                        <div className="TopHeader-login">
                        {!status
                            ?  <>
                                <Link to="/login"><i className="fas fa-user"> </i>Đăng nhập</Link>
                                <Link to="/regis"><i className="fas fa-user-plus"></i>Đăng kí</Link>
                                </>
                            : <>
                                <Link to="/profile"><i className="fas fa-user"> </i>{name}</Link>
                                <Link to="/" onClick={this.logOut}><i className="fas fa-user-plus"></i>Log out</Link>
                                </>
                        }
                        </div>
                    </div>

                </div>
                <div className="HeaderImg">
                    <div className="HeaderImg-wrap">
                        <img src={image} alt="dfsf" />
                        <img src={image2} alt="dfd " />
                        <div className="HeaderImg-wrapInner">
                            <div className="HeaderImg-inner">
                                <span> <i className="fas fa-phone"> </i> HỖ TRỢ : 091270929 -091270929 </span>
                                <form action="/action_page.php">
                                    <input onChange={this.getSearch} onKeyPress = {(e) => {
                                        if(e.key === 'Enter')
                                        {
                                            this.props.search(this.state.search);
                                            this.setState({
                                                searchEnter:true
                                            })
                                        }
                                        }} type="text" placeholder="  Tìm kiếm.." name="search" />
                                        
                                    <button onClick ={(e) => {
                                        this.props.search(this.state.search);
                                        e.preventDefault();
                                        }} >
                                     <Link to="/product">  <i className="fa fa-search" /></Link></button>
                                </form>
                            </div>

                            <div className="HeaderImg-cart">
                                <Link to="/cart"> <i className="fas fa-shopping-basket"> {" "} <p> Giỏ hàng <span className="number">{totalProduct}</span></p> </i></Link>
                            </div>
                        </div>
                    </div>
                </div>         
                 <div className="NavBar">
                    <ul >
                        <li className="toggleIcon">
                        <span onClick={this.toggleMenu} > <i  className="fas fa-bars"></i> </span>
                        </li>
                        <li>
                            <Link to="/">TRANG CHỦ</Link>
                        </li>
                        <li>
                            <Link to="/product">SẢN PHẨM</Link>
                        </li>
                        <li>
                            <Link to="/contact">LIÊN HỆ</Link>
                        </li>
                        { (this.state.toggleSearch) 
                        ? <li className="search--sm">
                            <input onChange={this.getSearch} type="text" placeholder="  Tìm kiếm.." name="search"  />
                            <button onClick ={(e) => {
                                        this.props.search(this.state.search);
                                        e.preventDefault();

                                        }} >
                                     <Link to="/product" >  <i className="fas fa-arrow-right" /></Link></button>
                        </li>
                        : null
                        }
                        
                        <li className="search__icon" onClick={this.toggleSearch}>
                            <i  className="fa fa-search"></i>
                        </li>
                        <li className="cart--sm">
                            <Link to="/cart"> <i className="fas fa-shopping-basket"> <span className="number--sm">{totalProduct}</span> </i></Link>
                        </li>

                    </ul>
                </div>
                {
                    !this.state.toggle 
                    ? null
                    :<div className="NavBar--sm">
                    <ul >
                        <li>
                            <Link to="/">TRANG CHỦ</Link>
                        </li>
                        <li>
                            <Link to="/product">SẢN PHẨM</Link>
                        </li>
                        <li>
                            <Link to="/contact">LIÊN HỆ</Link>
                        </li>
                        
                    </ul>
                </div>
            }
                <div className="main">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/product" component={ProductList} />
                        <Route path="/login" component={Login} />
                        <Route path="/regis" component={Regis} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/checkout" component={CheckOut} />
                        <Route exact path="/product-Detail" component={ProductDetail} />
                        <Route exact path="/profile" component={Profile} />
                        <Route component={NotFound404} />
                    </Switch>
                </div>
                <Footer></Footer>
                <button className="toTop_btn" title="Lên đầu trang" onClick={() => this.scrollToTop()}> <i className="fas fa-arrow-up"></i> </button>
            </div>

        );
    }
}

const mapStateToProps = state => {
    return {
        dataList: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        checkLogIn: (status,name,cart) => dispatch(checkLogIn(status,name,cart)),
        logOut: () => dispatch(logOut()),
        search: (name) => dispatch(search(name))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Main);