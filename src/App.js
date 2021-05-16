import React, {useState} from 'react';
import Navbar from './components/navbar';
import ProductIntro from './components/productintro';
import ProductOverview from './components/productoverview';
import Footer from './components/footer';
import UsnChoc from './assets/images/usnchoc.png';
import UsnVanilla from './assets/images/usnvanilla.png';
import UsnBarOne from './assets/images/usnbarone.png';
import UsnChocLog from './assets/images/usnchoclog.png';
import UsnChocMint from './assets/images/usnchocmint.png';

function App() {

   
/////////////////////////////////////
/////////////DECLARING STATE////////////////
/////////////////////////////////////
var [basket, setbasket] = useState([])
var [orderAmount, setOrderAmount] = useState(1)
var [hoverValue, sethoverValue] = useState(undefined);
var [currentValue, setCurrentValue] = useState();
var [reviews, setreviews] = useState([
  {
  id : Date.now(),
  title : "Kong Yijun",
  rating : 1,
  message : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos iure amet id. Velit doloribus vitae temporibus ratione excepturi, veritatis aliquid quo laudantium placeat voluptatum vel accusamus harum blanditiis"
},
{
  id : Date.now(),
  title : "Kong Yijun",
  rating : 3,
  message : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos iure amet id. Velit doloribus vitae temporibus ratione excepturi, veritatis aliquid quo laudantium placeat voluptatum vel accusamus harum blanditiis"
},
{
  id : Date.now(),
  title : "Kong Yijun",
  rating : 2,
  message : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos iure amet id. Velit doloribus vitae temporibus ratione excepturi, veritatis aliquid quo laudantium placeat voluptatum vel accusamus harum blanditiis"
}

])
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
function show(){
  document.getElementById("basket").style.display="flex"
  console.log("hey")
  setTimeout(() => {
    document.getElementById("basket").style.display="none"
     
   }, 2000);
}
/////////////////////////////////////
/////////////HANDLE STATE UPDATES////////////////
/////////////////////////////////////
const handleAddToBasket = (relatedProducts,index) =>{ 
  var NewBasketItem = {
    id : Date.now(),
    title : `${relatedProducts[index].title}`,
    price : `R ${relatedProducts[index].price}`,
    qty : 1,
    image : `${relatedProducts[index].image}`
  } 
  setbasket([...basket,NewBasketItem])
  show()
  console.log(relatedProducts[index])
  };

  const handleAddToBasket2 = (product) =>{ 
  var price = document.getElementById("price").innerText
    var NewBasketItem = {
      id : Date.now(),
      title : `${product.title}`,
      price : `${price}`,
      qty : `${orderAmount}`,
      image : `${product.image}`
    } 
    setbasket([...basket,NewBasketItem])
    show()
    };

  const handleDeleteFromBasket = (index) =>{
    var NewBasket = basket
    NewBasket.splice(index, 1)
    console.log(NewBasket)
    setbasket([...NewBasket])
  };
  const handleRating = value =>{
    setCurrentValue(value)  
  };
  
  const handleMouseOver = value  =>{
    sethoverValue(value )
  };
    
  const handleMouseLeave = () =>{
    sethoverValue(undefined)
  };

  const handleFormSubmit= (e) =>{
    e.preventDefault()
     var title = document.getElementById("title").value
     var message = document.getElementById("message").value
    
     const review = {
      id : Date.now(),
      title : title,
      rating :currentValue,
      message : message
     }
  
     if(title === "" ){
      alert("title")
     }if(message === ""){
      alert("message")
     }if(title && message !== ""){
  
      setreviews(
        [...reviews,review]
        
       )
       document.getElementById("title").value = ""
       document.getElementById("message").value = ""
     }
   
    };

    const handleQuanityChangeDecrement = () =>{
      if(orderAmount > 1){
       setOrderAmount(orderAmount - 1)
       console.log(orderAmount)
      }
   }

   const handleQuanityChangeIncrement = (e) =>{
      
        setOrderAmount(orderAmount + 1)
        console.log(orderAmount)
       
    }
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
      const handleInputChange = e => {
  
          var product = document.getElementById("product")
          var selectElement = e.target;
          var value = selectElement.value;
  
          if(value === "Chocolate" ){
                 product.innerHTML = `<img src=${UsnChoc} alt="" />`
             }
             if(value === "Vanilla" ){
                 product.innerHTML = `<img src=${UsnVanilla} alt="" />`
             }
             if(value === "PeppermintCrisp" ){
                 product.innerHTML = `<img src=${UsnChocMint} alt="" />`
             }
             if(value === "ChocolateLog" ){
                 product.innerHTML = `<img src=${UsnChocLog} alt="" />`
             }
             if(value === "Bar-One" ){
                 product.innerHTML = `<img src=${UsnBarOne} alt="" />`
             }
         
      }
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
var total = 0;

for(let i = 0; i < reviews.length; i++){
  var average = reviews[i].rating
  total += reviews[i].rating
  var avg = Math.round(total / reviews.length)

}
const stars = Array(5).fill(0);
/////////////////////////////////////
/////////////////////////////////////
/////////////////////////////////////
  return (
    <div className="App">
     <Navbar handleDeleteFromBasket={handleDeleteFromBasket} basket={basket}/>
     <ProductIntro 
     orderAmount={orderAmount} 
     handleInputChange={handleInputChange} 
     handleQuanityChangeDecrement={handleQuanityChangeDecrement} 
     handleQuanityChangeIncrement={handleQuanityChangeIncrement}
     reviews={reviews}
     avg={avg}
     stars={stars}
     handleAddToBasket2={handleAddToBasket2}/>

     <ProductOverview 
     reviews={reviews} 
     setreviews={setreviews}
     handleFormSubmit={handleFormSubmit}
     currentValue={currentValue} 
     setcurrentValue={setCurrentValue} 
     handleRating={handleRating}
     handleMouseOver={handleMouseOver}
     handleMouseLeave={handleMouseLeave}
     hoverValue={hoverValue}
     stars={stars}
     handleAddToBasket={handleAddToBasket}
     />
      <Footer/>
    </div>
  );

}

export default App;
