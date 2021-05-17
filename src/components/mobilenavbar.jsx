import React, {useState} from 'react';
import logo from '../assets/images/usnlogo.png';
import LeanAndFit from '../assets/images/leanandfit.jpg';
import Endurance from '../assets/images/endurance.jpg';
import HardCore from '../assets/images/hardcore.jpg';
import Weightloss from '../assets/images/weightloss.jpg';
function Mobilenavbar(props) {
    var [basketOpen, setbasketOpen] = useState(false)
    var [menuOpen, setmenuOpen] = useState(false)
    var [blogOpen, setblogOpen] = useState(false)
    var [goalsOpen, setgoalsOpen] = useState(false)
    var [shopOpen, setshopOpen] = useState(false)

    const handleShowBaskets = () =>{
       if(basketOpen === false){
        document.getElementById("basketmobile").style.display = "flex"
        setbasketOpen(true)
       }else{
        document.getElementById("basketmobile").style.display = "none"
        setbasketOpen(false)
       }
       
     };

     const OpenMenu = () =>{
      if(menuOpen === false){
        document.getElementById("sidemenu").style.right = "0"
        setmenuOpen(true)
       }else{
        document.getElementById("sidemenu").style.right = "-100%"
        setmenuOpen(false)
       }
     }

     
     const handleblogOpen = () =>{
      if(blogOpen === false){
        document.getElementById("dropdown-blog").style.display = "block"
        setblogOpen(true)
       }else{
        document.getElementById("dropdown-blog").style.display = "none"
        setblogOpen(false)
       }
     }

     
     const handlegoalsOpen = () =>{
      if(goalsOpen === false){
        document.getElementById("dropdown-goals").style.display = "block"
        setgoalsOpen(true)
       }else{
        document.getElementById("dropdown-goals").style.display = "none"
        setgoalsOpen(false)
       }
     }

     
     const handleshopOpen = () =>{
      if(shopOpen === false){
        document.getElementById("dropdown-shop").style.display = "block"
        setshopOpen(true)
       }else{
        document.getElementById("dropdown-shop").style.display = "none"
        setshopOpen(false)
       }
     }

    return (
        <div className="Mobilenavbar flex-row">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
          <div className="menucartholder flex-row">
          <div className="search">
            <i class="fa fa-search" aria-hidden="true"></i>
            </div>
            <div className="cart"  onClick={() => handleShowBaskets()}>
            <i class="fa fa-shopping-basket basketicon" aria-hidden="true" ></i>
            </div>
            <div id="basketmobile" className="basket flex-column" >
            <div className="basketlist">
            {props.basket.map((_,index) =>{
                return (
                    <div key={index} className="flex-row basketitem">
                          <img src={props.basket[index].image} alt={props.basket[index].title} />
                      <div className="desc flex-column">
                      <p>{props.basket[index].title}</p>
                        <div className="priceandqty flex-row">
                        <p className="qty">{props.basket[index].qty}</p>
                        <p className="x">&nbsp;x &nbsp;</p> 
                        <p className="price">{props.basket[index].price}</p>
                       
                        </div>
                      </div>

                      <i class="far fa-times-circle deleteicon" onClick={() => props.handleDeleteFromBasket(index)}></i>
                      
                    </div>
                )
            })}
            </div>
            <button >View basket</button>
            <button >Checkout</button>
            </div>
            <div className="menu" onClick={() => OpenMenu()}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="sidemenu" id="sidemenu">
              <ul className="menu-list">
              <li className="flex-row dropdown-menu" onClick={() => handleshopOpen()}>SHOP<i class="fa fa-chevron-down dropdownicon" aria-hidden="true"></i></li>
              <ul className="dropdown-shop" id="dropdown-shop">
                <li><h1>By Goal</h1></li>
                <li>Endurance</li>
                <li>Hardcore</li>
                <li>Lean Muscle</li>
                <li>Weightloss</li>
                <li><h1>By Category</h1></li>
                <li>Endurance</li>
                <li>Hardcore</li>
                <li>Lean Muscle</li>
                <li>Weightloss</li>
              </ul>
              <li className="flex-row dropdown-menu" onClick={() => handlegoalsOpen()} >GOALS<i class="fa fa-chevron-down dropdownicon" aria-hidden="true"></i></li>
              <ul className="dropdown-goals" id="dropdown-goals">
                <li ><img src={Weightloss} alt="" /> <h1>Weightloss</h1></li>
                <li><img src={LeanAndFit} alt="" /><h1>Lean Muscle</h1></li>
                <li><img src={HardCore} alt="" /><h1>HardCore</h1></li>
                <li><img src={Endurance} alt="" /><h1>Endurance</h1></li>
               
              </ul>
              <li className="flex-row dropdown-menu" onClick={() => handleblogOpen()}>BLOG<i class="fa fa-chevron-down dropdownicon" aria-hidden="true"></i></li>
              <ul className="dropdown-blog" id="dropdown-blog">
                <li><h1>Blog</h1></li>
                <li>Endurance</li>
                <li>Hardcore</li>
                <li>Lean Muscle</li>
                <li>Weightloss</li>
              </ul>
              <li className="flex-row dropdown-menu" >BMC</li>
              <li className="flex-row dropdown-menu" >OFFERS</li>
              </ul>
            </div>
          </div>
        </div>
    )
}
export default Mobilenavbar;