import React, {useState} from 'react';
import '../scss/navbar.scss';
import Mobilenavbar from './mobilenavbar';
import logo from '../assets/images/usnlogo.png';
import LeanAndFit from '../assets/images/leanandfit.jpg';
import Endurance from '../assets/images/endurance.jpg';
import HardCore from '../assets/images/hardcore.jpg';
import Weightloss from '../assets/images/weightloss.jpg';
import Basket from './basket';

function Navbar(props) {
       
/////////////////////////////////////
/////////////DECLARING STATE////////////////
/////////////////////////////////////
    var [basketOpen, setbasketOpen] = useState(false)

    const handleShowBasket = () =>{
       if(basketOpen === false){
        document.getElementById("basket").style.display = "flex"
        setbasketOpen(true)
       }else{
        document.getElementById("basket").style.display = "none"
        setbasketOpen(false)
       }
       
     };
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

/////////////////////////////////////
////////////Menu Toggles///////////////
/////////////////////////////////////
    const handleDropDownMouseEnter = () =>{
       var productdropdown = document.getElementById("productdropdown");
       productdropdown.style.opacity="1"
       productdropdown.style.display="flex"
    }
    const handleDropDownMouseLeave = () =>{
        var productdropdown = document.getElementById("productdropdown");
        productdropdown.style.opacity="0"
        productdropdown.style.display="none"
     }
     
    const handleDropDownMouseEnter2 = () =>{
        var goalsdropdown = document.getElementById("goalsdropdown");
        goalsdropdown.style.opacity="1"
        goalsdropdown.style.display="flex"
      
     }

     const handleDropDownMouseLeave2 = () =>{
         var goalsdropdown = document.getElementById("goalsdropdown");
         goalsdropdown.style.opacity="0"
         goalsdropdown.style.display="none"
      }
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

  return (
   <div className="sticky">
<Mobilenavbar 
basket={props.basket} 
handleDeleteFromBasket={props.handleDeleteFromBasket}/>
<section className="navbar flex-row">

<div className="menu flex-row">

<div className="logo">
    <img src={logo} alt="usn"  width="100%"/>
 </div>

    <ul className="flex-row">
        <li><i class="fa fa-home" aria-hidden="true"></i></li>
        <li className="flex-row dropdown-menu" id="productsmenu" onMouseLeave={handleDropDownMouseLeave} onMouseEnter={handleDropDownMouseEnter}>PRODUCTS<i class="fa fa-chevron-down dropdownicon" aria-hidden="true"></i>
        </li>
        <div className="productdropdown flex-row" id="productdropdown" onMouseLeave={handleDropDownMouseLeave} onMouseEnter={handleDropDownMouseEnter}>
            <ul>
                <li>111</li>
                <li>111</li>
                <li>111</li>
             </ul>
             <ul>
                <li>111</li>
                <li>111</li>
                <li>111</li>
             </ul>
             <ul>
                <li>111</li>
                <li>111</li>
                <li>111</li>
             </ul>
        </div>
        <li className="flex-row dropdown-menu" onMouseLeave={handleDropDownMouseLeave2} onMouseEnter={handleDropDownMouseEnter2}>GOALS<i class="fa fa-chevron-down dropdownicon" aria-hidden="true"></i></li>
        <div className="goalsdropdown flex-row" id="goalsdropdown" onMouseLeave={handleDropDownMouseLeave2} onMouseEnter={handleDropDownMouseEnter2}>
            <ul className="flex-row">
                <li>
                    <div className="imgholder">
                    <img src={Weightloss} alt=""  width="100%" />
                    <h1>Weightloss</h1>
                    </div>
                </li>
                <li>
                <div className="imgholder">
                <img src={LeanAndFit} alt=""  width="100%"/>
                <h1>Lean Muscle</h1>
                </div>
                </li>
                <li>
                <div className="imgholder">
                <img src={HardCore} alt=""  width="100%"/>
                <h1>Hardcore</h1>
                </div>
                </li>
                <li>
                <div className="imgholder">
                <img src={Endurance} alt=""  width="100%"/>
                <h1>Endurance</h1>
                </div>
                </li>
             </ul>
        </div>
        <li>BLOG</li>
        <li>BMC</li>
    </ul>
</div>

<div className="secondaryMenu">
     <ul className="flex-row">
        <li><i class="fa fa-search" aria-hidden="true"></i></li>
        <li className="red">SALE</li>
        <li className="basketholder" onClick={() => handleShowBasket()}>
            <div >
            <i class="fa fa-shopping-basket basketicon" aria-hidden="true" ></i>
            CART
            </div>
        </li>
        <Basket className="basket" handleDeleteFromBasket={props.handleDeleteFromBasket} basket={props.basket}/>
        <li><i class="fa fa-user usericon" aria-hidden="true"></i>LOGIN</li>
    </ul>
</div>
</section>
   </div>
  );
}

export default Navbar;
