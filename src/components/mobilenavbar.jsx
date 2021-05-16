import React from 'react'
import logo from '../assets/images/usnlogo.png';
function Mobilenavbar() {
    return (
        <div className="Mobilenavbar flex-row">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
          <div className="menucartholder flex-row">
          <div className="search">
            <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className="cart" >
            <i class="fa fa-shopping-basket basketicon" aria-hidden="true" ></i>
            </div>
            <div className="menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
          </div>
        </div>
    )
}
export default Mobilenavbar;