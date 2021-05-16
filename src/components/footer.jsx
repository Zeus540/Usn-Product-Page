import React from 'react'
import Eftsecure from '../assets/images/eftsecure.png';
import Ozowwhite from '../assets/images/ozowwhite.png';
import Peachpayment from '../assets/images/peachpayment.png';
import Visamastercard from '../assets/images/visamastercard.png';
import Visacheckout from '../assets/images/visacheckout.png';

function Footer() {
    return (
        <div className="flex-column footerholder">
           <div className="flex-row footerholderinner">
           <div className="col1">
                <h1>HEADQUATERS</h1>
               <div className="address">
               <p>BUILDING C 2ND FLOOR,</p>
                <p>SOUTHDOWNS OFFICE PARK,</p>
                <p>21 KAREE STREET, IRENE EXT 54,</p>
                <p>PRETORIA 0157</p>
               </div>
                <p><span>Tel:</span> 0861 111 876</p>
                <p>info@usn.co.za</p> 
            </div>
            <div className="col2">
                <h1>GENERAL</h1>
             <div className="footerinfo">
                <p>Privacy Policy</p>
                <p>Website Ts & Cs</p>
                <p>Shopping Ts & Cs</p>
                <p>Online Shop FAQ</p>
             </div>
            </div>
            <div className="col3">
                <h1>QUALITY</h1>
               <div className="footerinfo">
               <p>USN Quality</p>
                <p>Halaal</p>
                <p>HFL/WADA Certification</p>
                <p>Independent Test Results</p>
               </div>
            </div>
            <div className="col4 flex-column">
                <h1>CAREERS</h1>
                <div className="footerinfo">
                <p>Join USN</p>
                <div>
                    <h1>GET THE LASTEST DEALS</h1>
                    <form action="" className="flex-column">
                        <input type="text" placeholder="John Smith"/>
                        <input type="email" name="" id="" placeholder="Johnsmith@gmail.com"/>
                        <button type="submit">Sumbit</button>
                    </form>
                </div>
                </div>
            </div>
           </div>
        <div className=" flex-row paymentandcopy">
            <div className="paymenticons flex-row">
            <div>
                <img src={Peachpayment} alt="" className="peach"/>
            </div>
            <div>
                <img src={Visacheckout} alt="" className="paymenticon"/>
            </div>
            <div>
                <img src={Visamastercard} alt="" className="paymenticon"/>
            </div>
            <div>
                <img src={Eftsecure} alt="" className="paymenticon"/>
            </div>
            <div>
                <img src={Ozowwhite} alt="" className="paymenticon"/>
            </div>
            </div>
            <div className="copy">
                <p>&copy; Ultimate Sports Nutrition 2021</p>
            </div>
        </div>
        </div>
    )
}
export default Footer;