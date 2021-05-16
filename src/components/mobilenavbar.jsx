import React, {useState} from 'react';
import logo from '../assets/images/usnlogo.png';
function Mobilenavbar(props) {
    var [basketOpen, setbasketOpen] = useState(false)

    const handleShowBaskets = () =>{
       if(basketOpen === false){
        document.getElementById("basketmobile").style.display = "flex"
        setbasketOpen(true)
       }else{
        document.getElementById("basketmobile").style.display = "none"
        setbasketOpen(false)
       }
       
     };
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