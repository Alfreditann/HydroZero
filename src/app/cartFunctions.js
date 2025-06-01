"use client"
import { useCart } from "./store";
export default function AddToCart(props) {
 
  console.log(props.product)
    const addProduct = useCart((state) => state.addProduct);
    return  <button className="buyButton"       
    onClick={() => addProduct(props.product)}>
    Buy
  </button>

}