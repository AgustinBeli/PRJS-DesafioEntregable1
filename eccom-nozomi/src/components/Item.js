import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';
import ItemCount from './ItemCount';

const Item = ({ id, name, model, image, price }) => {
    const [itemCount, setItemCount] = useState(0)
    const test = useContext(CartContext);
    const add = (cant => {
        alert(`Agregaste: ${cant} ${name} ${model} al carrito.`);
        setItemCount(cant)
        test.addItem({ id, name, model, image, price }, cant);
    })

    return (
        <div className='grid'>
            <div className='grid'>
                <h4 className='col-2'>{name} {model}</h4>
                <img className="productImage col-2" src={image} alt="" />
                <Link to={`/item/${id}`}><button>Detalles</button></Link>
                <h5 className='col-2'>{price}</h5>
                {
                    itemCount === 0
                        ? <ItemCount className='col-6' stock={5} initial={0} add={add} />
                        : <Link to='/Cart'><button>carrito</button></Link>
                }
                <hr />
            </div>

        </div>
    );
}

export default Item;




