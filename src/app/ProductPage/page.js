"use client"
import { allProducts } from "@/data";
import { useState } from "react";
import Link from "next/link";


export default function ProductPage() {
    const filters = ["Limited", "Premium", "Seasonal","Specialty","Wellness"]

    const [activeFilter, setActiveFilter] = useState(
        "showAll"
    )
    const [filteredProducts, setProducts] = useState(
        allProducts.filter(product => allProducts.filter(product => product.id === 501 || product.id === 502 || product.id === 504)));

    function showAllProducts() {
        setProducts(allProducts);
        setActiveFilter("showAll")
    }

    function showFilteredProducts(filter) {
        setActiveFilter(filter)
        setProducts(allProducts.filter(product => product.category === filter))
    }
    return <div>
        <div className="ProductsHeader">
            <h1 className="ProductsTitle">Diet water collection</h1>
        </div>
        <div className="sortContainer">
            <button className={activeFilter == "showAll" ? "sortButtons activeButton" : "sortButtons"} onClick={showAllProducts}>Show all</button>
            {filters.map((filter) => (
            <button key={filter.toLocaleLowerCase()} onClick={() => showFilteredProducts(filter.toLocaleLowerCase())} className={activeFilter == filter.toLocaleLowerCase() ? "sortButtons activeButton" : "sortButtons"}>{filter} </button>
            ))}
           
        </div>
        <div className="productCardContainer">
            {filteredProducts.map((product) => (
                <Link key={product.id} className="productCardLink" href={{
                    pathname: '/product/' + product.id,
                }}><div className="productCard">
                        <img className="productCardPicture" src="./dietWater.png"></img>
                        {product.badge &&
                        <div className="productBadgeContainer"><div className="productBadge"><h3 className="productBagdeText">{product.badge}</h3></div></div>
                        }<h3 className="ProductInfo">
                            {product.name}
                        </h3>

                        <p className="ProductInfo">${product.price}</p>


                    </div></Link>
            ))}
        </div>
    </div>
}