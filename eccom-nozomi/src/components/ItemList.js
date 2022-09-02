import Item from "./Item";
import { products } from "../utilities/products";


const ItemList = ({ items }) => {
    return (
        <>
            {
                items
                    ? products.map(item => <Item key={item.id} name={item.name} model={item.model} image={item.image[0]} price={item.price} />)
                    : <p>no funca</p>
            }
        </>
    );
}

export default ItemList;