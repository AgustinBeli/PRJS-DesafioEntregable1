import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import Currency from '../utilities/Currency';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    const add = (cant) => {
        alert(`Agregaste: ${cant} ${item.name} ${item.model} al carrito.`);
        setItemCount(cant);
        test.addItem(item, cant);
    }

    return (
        <div>
            {
                item && item.image
                    ? <button>
                        <h4>{item.name} {item.model}</h4>
                        <img className="productImage" src={item.image} alt="" />
                        <p>{item.description}</p>
                        <h5><Currency number={item.price} /></h5>
                        {
                            itemCount === 0
                                ? <ItemCount stock={5} initial={0} add={add} />
                                : <Link to='/Cart'><button>carrito</button></Link>
                        }
                    </button>
                    : <p>Cargando el producto...</p>
            }
        </div>
    );
}

export default ItemDetail