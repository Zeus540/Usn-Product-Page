import React from 'react';


function Basket(props) {


    return (
        <div className="basket flex-column" id="basket">
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
    )
}
export default Basket;