import { useEffect, useState } from "react";

const ItemCount = ({ stock = 0, initial = 0, add }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(initial);
    }, []);

    const removeItem = () => {
        if (count > initial) {
            setCount(count - 1)
        };
    }
    const addItem = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    return (
        <>
            <button onClick={removeItem}>-</button>
            <span> {count} </span>
            <button onClick={addItem}>+</button>
            <span> </span>
            {
                count
                    ? <button onClick={() => add(count)}> agregar </button>
                    : <button disabled={true}> agregar </button>
            }
        </>
    )
}
export default ItemCount;