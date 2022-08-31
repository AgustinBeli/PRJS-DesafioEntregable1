import ItemCount from "./ItemCount"

const ItemListContainer = (item) => {
    const add = (cant) => {
        alert("agregaste " + cant + " items, al carrito")
    }
    return (
        <div>
            <p>Articulo: {item.articulo}</p>
            <p>Precio: {item.precio}</p>
            <ItemCount stock={5} initial={0} add={add} ></ItemCount>
        </div>
    )
}
export default ItemListContainer