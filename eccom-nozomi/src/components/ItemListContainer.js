import { useEffect, useState } from 'react';
import { products } from '../utilities/products';
import delay from '../utilities/delay'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        delay(products.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setData(result))
            .catch(err => alert(err))
    }, [data])

    return (
        <>
            {
                <>
                    <ItemList items={data} />
                </>
            }
        </>
    )
}

export default ItemListContainer