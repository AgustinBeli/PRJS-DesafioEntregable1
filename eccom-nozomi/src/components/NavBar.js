import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"


const NavBar = () => {
    return (
        <div className="grid">
            <nav className="navbar navbar-dark bg-primary grid">
                <Link className="col-6" to='/' style={{ textDecoration: "none", color: "white" }}><CartWidget /></Link>
                <ul className="text-light text-center m-0 col-6 list-inline" data-bs-toggle="tooltip">
                    <div className="row">
                        <Link className="col" to='/category/1' style={{ textDecoration: "none", color: "white" }}><h2 className="nav-link text-light">APPLE</h2></Link>
                        <Link className="col" to='/category/2' style={{ textDecoration: "none", color: "white" }}><h2 className="nav-link text-light">XIAOMI</h2></Link>
                    </div>
                </ul>
            </nav >
        </div >
    )
}
export default NavBar