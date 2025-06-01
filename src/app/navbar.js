"use client"
import "./butikk.css"
import { useCart } from "./store";
import Script from "next/script"
import Cart from "./cart";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [showCart, setShowCart] = useState(false);
  
const showMenu =() =>{
    
        var x = document.getElementById("navKnapper");
        if (x.className === "NavKnapper") {
          x.className = "NavKnapper responsive";
        } else {
          x.className = "NavKnapper";
        }
      
}
    
    const count = useCart((state) => state.count);
    return <div>
        <div className="Flex-container">
        <div className="menuIcon" onClick={() => showMenu()}>ÅPNE</div>
        <div className="homeButton">
            <img className="logo" src="/Logo.png"></img>
            <div>
                <span className="hydro">Hydro</span>
                <span className="zero">Zero</span>
            </div>
        </div>
       
        <div id="navKnapper" className="NavKnapper">
            <Link href="/" className="home" >
                <h3 className="NavHoverKnapper" >Home</h3>
            </Link>
            <Link href="/ProductPage" className="home" >
                <h3 className="NavHoverKnapper" >Products</h3>
            </Link>
            <Link href="/aboutUs" className="home" >
                <h3 className="NavHoverKnapper">About us</h3>
            </Link>
            <Link href="/customersChoice" className="home" >
                <h3 className="NavHoverKnapper">Customers choice</h3>
            </Link>
        </div>

        <button className="cartButton" onClick={() => setShowCart(true)}><img className="logo cartIcon" src="/Handlekurv.png"></img>{count > 0 &&<div className="cartAmount">{count}</div>}</button>
        
    </div>
    {showCart &&
    <div>
     <button onClick={() => setShowCart(false)} className="closeCart">X</button>
    <Cart ></Cart></div>}
    </div>

}