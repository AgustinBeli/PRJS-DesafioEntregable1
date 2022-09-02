import ItemCount from './ItemCount';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import promesa from '../utilities/promesa'

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        promesa({ datos })
            .then(result => setDatos(result))
            .catch(err => alert("ERROR"))

    }, [datos])

    return (
        <>
            <>
                <ItemList items={datos} />
            </>
        </>
    )
}

export default ItemListContainer