import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {

    const add = (msj => {
        alert(`Agregaste: ${msj} ${item.name} ${item.model} al carrito.`);
    })

    return (
        <div>
            {
                item.image
                    ? <button>
                        <h4>{item.name} {item.model}</h4>
                        <img className="productImage" src={item.image} alt="" />
                        <p>{item.description}</p>
                        <h5>{item.price}</h5>
                        < ItemCount stock={5} initial={0} add={add} />
                    </button>
                    : <p>Cargando el producto...</p>
            }
        </div>
    );
}

export default ItemDetail