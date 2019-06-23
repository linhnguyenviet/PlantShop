import React from 'react';
import Main from './main';
import Admin from './admin';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            display: "none"
        }
    }
    scrollToTop() {
        /* window.scrollTo(0, 0) */
        if(window.scrollY < 100) {
            this.setState({display: "none"})
        }
        else{
            this.setState({display: "inline-block"})
        }
        function scrolling() {
            if(window.scrollY > 0) {
                setTimeout(function() {
                    window.scrollTo(0, window.scrollY - 30);
                    scrolling();
                }, 6);
            };
        };
        scrolling();
    };

    render() {
        const username =  JSON.parse(localStorage.getItem("username"));
        return (
            <div className="App">
                {(username !== "adminn") ? <Main/> : <Admin/>}
                <button className="toTop_btn" title="Lên đầu trang" style={{display: this.state.display}} onClick={ () => this.scrollToTop()}> <i className="fas fa-arrow-up"></i> </button>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        stateReducers: state
    }
}
export default connect(mapStateToProps, null) (App);
