import { useCart } from "./store";
import styles from "./page.module.css";
export default function Cart(props) {
     const cart = useCart((state) => state.cart);
     const count = useCart((state) => state.count);
     const removeAllProduct = useCart((state) => state.removeAllProduct);
     const addProduct = useCart((state) => state.addProduct);
     const decreaseProductCount = useCart((state) => state.decreaseProductCount);
     
    return <div className="cart">
     
      <h2>Handlekurv {props.title}</h2>
      
    {/* Vi bruker map for å loope igjennom handlekurven og vise produktene på siden */}
    {/* cart er en array som inneholder produktene i handlekurven */}
    {/* Vi bruker map for å loope igjennom handlekurven og vise produktene på siden */}
    {cart.sort((a, b) => a.title?.localeCompare(b.title)).map((item) => (
      <div key={item.id}>
      
        Navn: {item.name} pris: ${(item.price * item.quantity).toFixed(2)} antall:{" "}
        <button onClick={() => decreaseProductCount(item.id)}>-</button>{item.quantity}<button onClick={() => addProduct(item)}>+</button>
      </div>
    ))}
    {cart.length > 0 && <button
            className={styles.primary}
            onClick={() => removeAllProduct()}
          >
            Fjern alt
          </button>}</div>
          

}