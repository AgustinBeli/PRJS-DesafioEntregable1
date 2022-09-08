import ItemCount from './ItemCount';

const Item = ({ id, name, model, image, price }) => {

    const add = (msj => {
        alert(`Agregaste: ${msj} ${name} ${model} al carrito`);
    })

    return (
        <div>
            <h4>{id} {name} {model}</h4>
            <img className="productImage" src={image} alt="" />
            <h5>{price}</h5>
            < ItemCount stock={5} initial={0} add={add} />
        </div>
    );
}

export default Item;




