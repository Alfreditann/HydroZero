

import { allProducts } from "@/data"
import AddToCart from "@/app/cartFunctions"
export default async function ProductPage({ params }) {

    const { id } = await params
    const product = allProducts.find(p => p.id.toString() === id)
    return  <div className="productPageContainer productPageContainerMobile" >
        <div><img className="productPageImage" src="../../dietWater.png"></img></div>
    <div className="productPageInfo"><h1 className="productPageTitle">{product.name}</h1>
    {product.badge && 
    <div className="productBagdeFancy">{product.badge}</div>}<h2>${product.price}</h2><p>{product.longDescription}</p>
    <div><h3>Specifications</h3>
        <ul>
            {product.specifications?.map((s) => (<li key={s.label}>{s.label}: {s.value}</li>))}
        </ul>
        </div>
        <div><h3>Ingredients</h3>
        <ul>
            {product.ingredients?.map((i) =>(<li key ={i}>{i}</li>) )}
            </ul>
          
            <AddToCart className="addToCartButton" product={product}></AddToCart></div>
            </div></div>
}
