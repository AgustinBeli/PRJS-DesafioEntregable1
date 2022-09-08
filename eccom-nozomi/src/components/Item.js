import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const Item = ({ id, name, model, image, price }) => {

    const add = (msj => {
        alert(`Agregaste: ${msj} ${name} ${model} al carrito.`);
    })

    return (
        <div className='grid'>
            <div className='grid'>
                <h4 className='col-2'>{name} {model}</h4>
                <img className="productImage col-2" src={image} alt="" />
                <Link to={`/item/${id}`}><button>Detalles</button></Link>
                <h5 className='col-2'>{price}</h5>
                <ItemCount className='col-6' stock={5} initial={0} add={add}></ItemCount>
                <hr />
            </div>

        </div>
    );
}

export default Item;




