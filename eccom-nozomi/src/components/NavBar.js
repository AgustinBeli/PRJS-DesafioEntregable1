import { useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext";
import CartWidget from "./CartWidget"


const NavBar = () => {

    const test = useContext(CartContext);
    console.log('Navbar', test);

    return (
        <div>
            <nav className="navbar navbar-dark bg-primary grid">
                <ul className="text-light text-center m-0 col-12 list-inline" data-bs-toggle="tooltip">
                    <div className="row d-flex align-items-center">
                        <Link className="col-2" to='/' style={{ textDecoration: "none", color: "white", fontSize: "50px" }}><h1 className="nav-link text-light">nozomi</h1></Link>
                        <Link className="col-4" to='/category/1' style={{ textDecoration: "none", color: "white" }}><h2 className="nav-link text-light">APPLE</h2></Link>
                        <Link className="col-4" to='/category/2' style={{ textDecoration: "none", color: "white" }}><h2 className="nav-link text-light">XIAOMI</h2></Link>
                        <Link className="col-2" to='/cart' style={{ textDecoration: "none", color: "white" }}><CartWidget /></Link>
                    </div>
                </ul>
            </nav >
        </div >
    )
}
export default NavBar