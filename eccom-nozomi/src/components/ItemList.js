import Item from "./Item";

const ItemList = ({ items }) => {

    return (
        <>
            {
                items.length > 0
                    ? items.map(item => <Item key={item.id} name={item.name} model={item.model} image={item.image} price={item.price} />)
                    : <p>Cargando productos...</p>
            }
        </>
    )
}

export default ItemList;