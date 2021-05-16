import React, {useState} from 'react';
import UsnChocMint from '../assets/images/usnchocmint.png';
import {FaStar} from 'react-icons/fa';

function Intro(props) {
/////////////////////////////////////
/////////////DECLARING STATE////////////////
/////////////////////////////////////
var [product] = useState([
    {
    id : Date.now(),
    title : "BLUELAB™ 100% WHEY PROTEIN REFILL BAGS",
    price4kg : "349.99",
    price1kg : "112.50",
    price400g : "56.50",
    qty:`${props.orderAmount}`,
    image:`${UsnChocMint}`
  },])
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
    const handleQuanityChangeOption1 = () =>{
       document.getElementById("price").innerText = `${product[0].price400g}`
       document.getElementById("option1").style.background = "#01b6f4";
       document.getElementById("option2").style.background = "#1129a6";
       document.getElementById("option3").style.background = "#1129a6";
         console.log("orderAmount")
     }
     const handleQuanityChangeOption2 = () =>{
        document.getElementById("price").innerText = `${product[0].price1kg}`
        document.getElementById("option2").style.background = "#01b6f4";
        document.getElementById("option1").style.background = "#1129a6";
        document.getElementById("option3").style.background = "#1129a6";
          console.log("orderAmount")
      }
      const handleQuanityChangeOption3 = () =>{
        document.getElementById("price").innerText = `${product[0].price4kg}`
        document.getElementById("option3").style.background = "#01b6f4";
        document.getElementById("option1").style.background = "#1129a6";
        document.getElementById("option2").style.background = "#1129a6";
          console.log("orderAmount")
      }
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
    const colors = {
        orange: "#f3e264",
        grey: "#303e82"
        
      };

    var reviewTotal = props.reviews.length
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

  return (
  <section className="productintro flex-row">

      <div className="mobileproductintrolayout flex-row">
     
      <div className="info">
          <h3>Products/ Lean & Fit</h3>
          <h2>BENEFITS</h2>

          <ul className="keyinfo">
              <li className="flex-row mobile-flex"><div><i class="fa fa-check checkicon" aria-hidden="true"></i></div>Increase lean muscle building</li>
              <li className="flex-row mobile-flex"><div><i class="fa fa-check checkicon" aria-hidden="true"></i></div>Enhance muscle recovery</li>
              <li className="flex-row mobile-flex"><div><i class="fa fa-check checkicon" aria-hidden="true"></i></div>Increased strength & muscle <br /> performance</li>

              <div className="macroinfoholder">

              <li className="flex-row macroinfo">
                  <div className="units"><p>1,3g</p></div>
                  <div><p>SUGAR</p></div>
              </li>

              <li className="flex-row macroinfo">
                  <div className="units"><p>45,2g</p></div>
                  <div><p>PROTEIN</p></div>
              </li>

              <li className="flex-row macroinfo">
                  <div className="units"><p>5,2g</p></div>
                  <div><p>BCAAs</p></div>
              </li>

              </div>
              <ul>
              <li className="flex-row macroinfo facts">
                  <div className="facticon1 flex-row"><i class="fa fa-exclamation-circle exclamation" aria-hidden="true"></i>
                  <p>NUTRITIONAL FACTS</p></div>
                  <div className="facticon2"><i class="fa fa-chevron-right " aria-hidden="true"></i></div>
                 
              </li>
              </ul>

          </ul>
          <div className="tags flex-row">
              <div className="tag"><p>ANYTIME OF DAY</p></div>
              <div className="tag"><p>HALAAL CERTIFIED</p></div>
              <div className="tag"><p>PROTEINS</p></div>
              <div className="tag"><p>LEAN & FIT</p></div>
          </div>
      </div>

      <div className="product" id="product">
          <img src={product[0].image} alt="" />
      </div>
      <div><h2 id="mobileproducttitle">{product[0].title}</h2></div>
      </div>

      <div className="order">

          <div><h2 id="producttitle">{product[0].title}</h2></div>

        <div className="orderDetails">
        <div className="priceReview flex-row">
              <div className="price" id="productprice">R<span id="price">{product[0].price4kg}</span></div>
              <div className="reviews">
                  <p> {props.stars.map((_, index) => {
                    return(
                    <FaStar 
                    key={index} 
                    className="staravg"
                    color={( props.avg) > index ? colors.orange : colors.grey} 
                    />    
                    )
                })}</p>
                  <p>{reviewTotal} Reviews</p>
              </div>
          </div>

          <div className="form">
              
               <select id="mySelection" onChange={props.handleInputChange} >
                   <option name="" id="">Choose An Option</option>
                   <option name="" id="" value="Chocolate">Chocolate</option>
                   <option name="" id="" value="Vanilla">Vanilla</option>
                   <option name="" id="" value="PeppermintCrisp">Peppermint Crisp</option>
                   <option name="" id="" value="ChocolateLog">Chocolate Log</option>
                   <option name="" id="" value="Bar-One">Bar-One</option>
               </select>
          </div>

          <div className="weight flex-row mobile-flex">
              <div className="option" id="option1" onClick={handleQuanityChangeOption1}>
                  <p>400g</p>
              </div>
              <div className="option" id="option2" onClick={handleQuanityChangeOption2}>
                  <p>1kg</p>
              </div>
              <div className="option " id="option3" onClick={handleQuanityChangeOption3}>
                  <p>4kg</p>
              </div>
          </div>
          
          <div className="placeorder flex-row">
              <div className="quantiy flex-row">
                  <div className="minus" id="minus"><i class="fa fa-minus" aria-hidden="true" onClick={props.handleQuanityChangeDecrement}></i></div>
                  <div className="orderamount" id="productqty">{props.orderAmount}</div>
                  <div className="plus" id="plus"><i class="fa fa-plus" aria-hidden="true" onClick={props.handleQuanityChangeIncrement}></i></div>
              </div>
              <div className="add flex-row" onClick={() => props.handleAddToBasket2(product[0])}><p>ADD TO CART</p><i class="fa fa-angle-double-right addicon" aria-hidden="true"></i></div>
          </div>
        </div>

      </div>
  </section>
  );
}

export default Intro;
