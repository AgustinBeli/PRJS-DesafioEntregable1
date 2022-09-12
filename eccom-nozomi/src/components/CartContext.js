import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, cant) => {
        const newItem = {
            ...item,
            cant: cant
        }
        if (!isOnCart(item.id)) {
            setCartList([...cartList, newItem])
        } else {
            const newItems = cartList.map(prod => {
                if (prod.id === item.id) {
                    const newItem = {
                        ...prod,
                        cant: cant + prod.cant
                    }
                    return newItem
                } else {
                    return prod
                }
            })
            setCartList(newItems)
        }
    }

    const isOnCart = (id) => {
        return cartList.some(prod => prod.id === id)
    }
    const removeItem = (id) => {
        let newCartList = cartList.filter(item => item.id !== id)
        setCartList(newCartList)
    }

    const clear = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{ cartList, addItem, removeItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;