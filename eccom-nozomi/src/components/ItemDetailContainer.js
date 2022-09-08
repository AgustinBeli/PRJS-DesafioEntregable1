import { useEffect, useState } from 'react';
import { products } from '../utilities/products';
import delay from '../utilities/delay'
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [info, setInfo] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        delay(products.find(item => item.id === parseInt(idItem)))
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