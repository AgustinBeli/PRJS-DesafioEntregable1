import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { firestoreFetch } from '../utilities/firestoreFetch'

const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setData(result))
    }, [idCategory])

    useEffect(() => {
        return (() => {
            setData([]);
        })
    }, []);

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