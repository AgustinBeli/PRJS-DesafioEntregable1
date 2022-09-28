import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import Currency from "../utilities/Currency";
import { createOrder } from "../utilities/firestoreFetch";

const Cart = () => {

    const test = useContext(CartContext);
    return (
        <>
            <Link to='/'><h1>Seguir comprando</h1></Link>
            {
                (test.cartList.length > 0)
                    ? <button onClick={test.clear}>Borrar todo</button>
                    : <h1>carrito vacio</h1>
            }
            {
                test.cartList.length > 0 &&
                test.cartList.map(item =>
                    <>
                        <div>
                            <img className="productImage col-2" src={item.imageItem} alt="" />
                            <p>{item.nameItem} {item.modelItem}</p>

                            <p>{item.cantItem + " item(s) /"} <Currency number={item.priceItem} /></p>
                            <p>Total: <Currency number={test.priceTotalItem(item.idItem)} /></p>
                            <p><button style={{ border: "none", background: "none" }} onClick={() => { test.removeItem(item.idItem) }}>❌</button></p>
                            <hr></hr>
                        </div>
                    </>)
            }
            {
                test.cartList.length > 0 &&
                <>
                    <p>TU PEDIDO</p>
                    <p>SUBTOTAL: <Currency number={test.subTotalPrice()} /></p>

                    <p>TOTAL: <Currency number={test.totalPrice()} /></p>

                    <button onClick={createOrder}>COMPRAR</button>
                </>
            }
        </>
    );

}

export default Cart;