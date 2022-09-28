import { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';
import { firestoreFetchOne } from '../utilities/firestoreFetch';

const ItemDetailContainer = () => {
    const [info, setInfo] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
        firestoreFetchOne(idItem)
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