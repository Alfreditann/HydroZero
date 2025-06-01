"use client";
import Link from "next/link";
import { allProducts } from "@/data";
import Footer from "./Footer";

import { useState } from "react";

export default function Home() {
  //Dette er en array med produkter som vi bruker for å vise produktene på siden



  const [filteredProducts, setProducts] = useState(
    allProducts.filter(product => product.id === 501 || product.id === 502 || product.id === 504));
  //useCart er en custom hook som vi bruker for å få tilgang til handlekurven og vi henter funksjonene til handlekurven
  //addProduct er en funksjon som vi bruker for å legge til produkter i handlekurven



  // const promotedProducts = [];
  // promotedProducts.push(products.find(f => f.id === 501));
  // promotedProducts.push(products.find(asdf => product.id === 505));
  // promotedProducts.push(...products.filter(f => f.description.includes("Celebrating")))

  function showAllProducts() {
    setProducts(allProducts);
  }
  function showFilteredProducts(filter) {
    setProducts(allProducts.filter(product => product.category === filter))
  }
  return (
    <div className="pageContainer">
      <div className="heroImgContainer">
        <img className="heroImg" src="./hero.png"></img>
      </div>
      <div className="heroTextContainer">
        <h2 className="heroTitle">Why We Started Hydro Zero</h2>
        <p className="heroP">We’ve always loved water—pure, simple, and essential. But we knew it could be better. That’s why we created Hydro Zero: to make water even more refreshing, more balanced, and more beneficial. Clean hydration, reimagined for modern living.</p>
        <h2 className="productTitle">New releases </h2>
      </div>
      <main >
        {/* <button onClick={showAllProducts}>Show all</button>
        <button onClick={() => showFilteredProducts("limited")}>Show Limited</button>
        <button onClick={() => showFilteredProducts("premium")}>Show Premium</button> */}
        <div className="productCardContainer">
          {/* Vi bruker map for å loope igjennom produktene og vise dem på siden */}
          {filteredProducts.map((product) => (
            <Link key={product.id} className="productCardLink" href={{
              pathname: '/product/' + product.id,
            }}><div className="productCard">
                <img className="productCardPicture" src="./dietWater.png"></img>
                <div className="productBadgeContainer"><div className="productBadge"><h3 className="productBagdeText">{product.badge}</h3></div></div>
                <h3 className="ProductInfo">
                  {product.name}
                </h3>

                <p className="ProductInfo">${product.price}</p>


              </div></Link>
          ))}
          <div className ="footerTextContainer">
          <h2 className="footerTextTitle" >Our mission</h2>
          <p className="footerText">At Diet Water, our mission is simple: to repackage ordinary water as an extraordinary product that costs more while providing the same hydration as regular water. We believe in the power of perception, marketing, and people's willingness to pay premium prices for basic necessities when they have a fancy label.</p>
          </div>
        </div>
      </main>
      
    </div>
  );
}
