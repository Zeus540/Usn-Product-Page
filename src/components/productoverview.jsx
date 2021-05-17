import React,{useState} from 'react';
import XTS from '../assets/images/XTS.png';
import UsnChocMint from '../assets/images/usnchocmint.png';
import Plant from '../assets/images/Plant.png';
import {FaStar} from 'react-icons/fa';


function ProductOverview(props) {
/////////////////////////////////////
/////////////DECLARING STATE////////////////
/////////////////////////////////////
  var [toggleDropDown1, settoggleDropDown1] = useState(false);
  var [toggleDropDown2, settoggleDropDown2] = useState(false);
  var [toggleDropDown3, settoggleDropDown3] = useState(false);
  var [relatedProducts] = useState([
    {
      id : Date.now(),
      title : "XTS HYPERDRIVE",
      price : "200.00",
      image : `${XTS}`,
      rating : 4,
      qty : 1,
      f1: "Reduces the risk of cramping",
      f2: "Replenishes electrolytes & minerals",
      f3: "Provides energy for prolonged performance",
    } ,
    {
      id : Date.now(),
      title : "BLUELAB™ 100% WHEY PROTEIN REFILL BAGS",
      price : "349.99",
      image : `${UsnChocMint}`,
      rating : 5,
      qty : 1,
      f1: "Increase lean muscle building",
      f2: "Enhance muscle recovery",
      f3: "Increased strength & muscle performance",
    } ,  
    {
      id : Date.now(),
      title : "BLUELAB™ 100% PLANT PROTEIN",
      price : "250.00",
      image : `${Plant}`,
      rating : 2,
      qty : 1,
      f1: "Increased lean muscle mass",
      f2: "Enhanced muscle recovery",
      f3: "Vegan & vegetarian friendly",
      f4: " Gluten Free"
    }       
  ])
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

/////////////////////////////////////
/////////////HANDLE STATE UPDATES////////////////
/////////////////////////////////////
  const handleDropdownChange1= (e) =>{
   if(toggleDropDown1 === false){
    document.getElementById("productoverviewdropdown1").style.display = "block";
    settoggleDropDown1(
      toggleDropDown1 = true
    )
   }else{
    document.getElementById("productoverviewdropdown1").style.display = "none";
    settoggleDropDown1(
      toggleDropDown1 = false
    )
    console.log(toggleDropDown1)
   }
};

  const handleDropdownChange2= (e) =>{
   if(toggleDropDown2 === false){
    document.getElementById("dropdown2").style.display = "block";
    settoggleDropDown2(
      toggleDropDown2 = true
    )
   }else{
    document.getElementById("dropdown2").style.display = "none";
    settoggleDropDown2(
      toggleDropDown2 = false
    )
    console.log(toggleDropDown2)
   }
};

const handleDropdownChange3 = (e) =>{
  if(toggleDropDown3 === false){
   document.getElementById("dropdown3").style.display = "block";
   settoggleDropDown3(
     toggleDropDown3 = true
   )
  }else{
   document.getElementById("dropdown3").style.display = "none";
   settoggleDropDown3(
     toggleDropDown2 = false
   )
  }
};
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
var reviewTotal = props.reviews.length
const stars = Array(5).fill(0);
const colors = {
  orange: "#001689",
  grey: "#c8cde4"
  
};
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////

  return (
    
  <section className="productoverview flex-row">
    <div className="productdetails " >
    <div className="productinfoholder " onClick={handleDropdownChange1}>
    <div className="productoverviewholder">
      <div className="productoverviewheading flex-row r-border mobile-flex">
        <h2>PRODUCT OVERVIEW</h2>
        <i class="fa fa-chevron-down dropdownicon" aria-hidden="true" ></i>
      </div>
      <div className="productoverviewdropdown" id="productoverviewdropdown1">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos iure amet id. Velit doloribus vitae temporibus ratione excepturi, veritatis aliquid quo laudantium placeat voluptatum vel accusamus harum blanditiis possimus quod nostrum itaque in provident. Non repellendus culpa, recusandae suscipit deserunt reiciendis distinctio corporis aliquid adipisci libero accusantium eaque ut deleniti.</p>
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos iure amet id. Velit doloribus vitae temporibus ratione excepturi, veritatis aliquid quo laudantium placeat voluptatum vel accusamus harum blanditiis possimus quod nostrum itaque in provident. Non repellendus culpa, recusandae suscipit deserunt reiciendis distinctio corporis aliquid adipisci libero accusantium eaque ut deleniti.</p>
      </div>
    </div>
 
</div>

    <div className="productinfoholder"  onClick={handleDropdownChange2}>
    <div className="productoverviewholder">
      <div className="productoverviewheading flex-row mobile-flex">
        <h2>SUGGESTED USE</h2>
        <i class="fa fa-chevron-down dropdownicon" aria-hidden="true"></i>
      </div>
      <div className="productoverviewdropdown " id="dropdown2">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos iure amet id. Velit doloribus vitae temporibus ratione excepturi, veritatis aliquid quo laudantium placeat voluptatum vel accusamus harum blanditiis possimus quod nostrum itaque in provident. Non repellendus culpa, recusandae suscipit deserunt reiciendis distinctio corporis aliquid adipisci libero accusantium eaque ut deleniti.</p>
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos iure amet id. Velit doloribus vitae temporibus ratione excepturi, veritatis aliquid quo laudantium placeat voluptatum vel accusamus harum blanditiis possimus quod nostrum itaque in provident. Non repellendus culpa, recusandae suscipit deserunt reiciendis distinctio corporis aliquid adipisci libero accusantium eaque ut deleniti.</p>
      </div>
    </div>
    </div>

    <div className="productinfoholder" onClick={handleDropdownChange3}>
    <div className="productoverviewholder">
      <div className="productoverviewheading flex-row mobile-flex"  >
        <h2>KEY INGREDIENTS</h2>
        <i class="fa fa-chevron-down dropdownicon" aria-hidden="true"></i>
      </div>
      <div className="productoverviewdropdown" id="dropdown3">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos iure amet id. Velit doloribus vitae temporibus ratione excepturi, veritatis aliquid quo laudantium placeat voluptatum vel accusamus harum blanditiis possimus quod nostrum itaque in provident. Non repellendus culpa, recusandae suscipit deserunt reiciendis distinctio corporis aliquid adipisci libero accusantium eaque ut deleniti.</p>
        <br />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos iure amet id. Velit doloribus vitae temporibus ratione excepturi, veritatis aliquid quo laudantium placeat voluptatum vel accusamus harum blanditiis possimus quod nostrum itaque in provident. Non repellendus culpa, recusandae suscipit deserunt reiciendis distinctio corporis aliquid adipisci libero accusantium eaque ut deleniti.</p>
      </div>
    </div>
    </div>

    <div className="productinfoholder">
    <div className="productoverviewholder">
      <div className="productoverviewheading flex-row">
        <h2>RELATED PRODUCTS</h2>
      </div>
   <div className="flex-row relatedproductcardholder">
   {relatedProducts.map((_,index) =>{
     return(
       <div key={index} className="relatedproductcard">
        <div className="cartandtitleholder flex-row">
         <h1 className="relatedproducttitle">{relatedProducts[index].title}</h1>
         <button className="cartbutton" onClick={() => props.handleAddToBasket(relatedProducts,index)}><i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
        </div>
         <div className="priceandratingholder flex-row">
         <h1 className="relatedproductprice">R{relatedProducts[index].price}</h1>
         <p className="relatedproductrating"> 
         {props.stars.map((_, key) => {
                    return(
                    
                    <FaStar 
                    key={key} 
                    className="staravg"
                    color={(relatedProducts[index].rating) > key ? colors.orange : colors.grey}
                   
                    />
                    
                    )
                })}</p>
         </div>
         <img className="relatedproductimg" src={relatedProducts[index].image} alt={relatedProducts[index].title} />
         <ul className="relatedproductlist">
           <li><h1>{relatedProducts[index].f1}</h1></li>
           <li><h1>{relatedProducts[index].f2}</h1></li>
           <li><h1>{relatedProducts[index].f3}</h1></li>
           <li>{<h1>{relatedProducts[index].f4}</h1>}</li>
         </ul>
       </div>
     )
   })}
   </div>
    </div>
    </div>

    </div>

 <div className="reviews">
 <h2>REVIEWS</h2>
 <form className=" flex-column">

  <div className="starrating flex-row">
    {stars.map((_, index) => {
        return(
         
          <FaStar 
          key={index} 
          className="star"
          color={(props.hoverValue || props.currentValue) > index ? colors.orange : colors.grey}
          onClick={() => props.handleRating(index + 1)}
          onMouseOver={() => props.handleMouseOver(index + 1)}
          onMouseLeave={() => props.handleMouseLeave(undefined)}
          />
          
        )
    })}
  </div>

 <div className="reviewamount">
 {reviewTotal} Reviews
 </div>
 <p id="titleerror">Please Enter a Title Above</p>
   <input type="text" name="title"  placeholder="Title" id="title" required/>
   
   <p id="messageerror">Please Enter FeedBack Below</p>
   <textarea name="Message"  cols="30" rows="10" placeholder="Message" id="message"  required></textarea>
   
   <button type="submit" className="submitbutton"  onClick={props.handleFormSubmit}>Submit</button>
 </form>

  {props.reviews.map((_, key) => {
    return(
     <div key={key} className="review">
        <p className="catch">Best Flavours!</p>
        {stars.map((_, index) => {
        return(
         
          <FaStar 
          key={index} 
          className="star"
          color={(props.reviews[key].rating) > index ? colors.orange : colors.grey}
        
          />
          
        )
    })}
       <p className="message">{props.reviews[key].message}</p>
       <p className="title">{props.reviews[key].title}</p>
     </div>
    )
})}


 </div>
  </section>
  );
}

export default ProductOverview;





