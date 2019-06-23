import React, { Component } from "react";
import TopFooter from './TopFooter';
import BottomFooter from './BottomFooter';

class Footer extends Component {
render() {
    return (
        <div style={{background:"#313131"}} >
            <TopFooter/>
            <div style={{width:"1920", background:"gray",color:"transparent",maxHeight:"0.5px",marginBottom:"40px"}}>a</div>
            <BottomFooter/>
        </div>
    )
}
}
export default Footer
