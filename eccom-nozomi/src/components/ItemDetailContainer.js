import { useEffect, useState } from 'react';
import { products } from '../utilities/products';
import delay from '../utilities/delay'
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        delay(products[0])
            .then(result => setInfo(result))
            .catch(err => alert(err))
    }, [])

    return (
        <>
            {
                <>
                    <ItemDetail item={info} />
                </>
            }
        </>
    )
}

export default ItemDetailContainer;