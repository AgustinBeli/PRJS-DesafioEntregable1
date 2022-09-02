import ItemCount from "./ItemCount";

const Item = ({ id, name, model, price, image }) => {
    const add = (msj) => {
        alert("Agregaste al carrito: " + msj + " " + name + " " + model);
    }
    return (
        <>
            <h4>{id} {name} {model}</h4>
            <img src={image} alt=""></img>
            <p>${price}</p>
            <ItemCount stock={5} initial={0} add={add} />
            <hr></hr>
        </>
    );

}
export default Item