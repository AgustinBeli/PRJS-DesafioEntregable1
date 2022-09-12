import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {

    const test = useContext(CartContext);

    return (
        <>
            <button onClick={test.clear}>Borrar todo</button>
            {
                test.cartList.map(item => <li>{item.name} {item.model} (cant={item.cant}) <button onClick={() => { test.removeItem(item.id) }}>Borrar</button></li>)
            }
        </>
    );

}

export default Cart;