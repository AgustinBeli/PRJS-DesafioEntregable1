import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item, cant) => {
        let found = cartList.find(product => product.idItem === item.id);
        if (found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imageItem: item.image,
                    nameItem: item.name,
                    modelItem: item.model,
                    priceItem: item.price,
                    cantItem: cant
                }
            ]);
        } else {
            found.cantItem += cant;
            setCartList([
                ...cartList
            ]);
        }
    }

    const clear = () => {
        setCartList([])
    }

    const removeItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id)
        setCartList(result)
    }

    const priceTotalItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].priceItem * cartList[index].cantItem;
    }

    const subTotalPrice = () => {
        let subTotalItem = cartList.map(item => priceTotalItem(item.idItem));
        return subTotalItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const totalPrice = () => {
        return subTotalPrice();
    }

    const cantTotalITem = () => {
        let cantTotal = cartList.map(item => item.cantItem);
        return cantTotal.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return (
        <CartContext.Provider value={{ cartList, addItem, removeItem, clear, priceTotalItem, subTotalPrice, totalPrice, cantTotalITem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;