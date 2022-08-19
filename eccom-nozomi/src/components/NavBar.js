import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <CartWidget />
                <ul className="text-light">
                    <li><a className="text-light" href="./index.html">home</a></li>
                    <li><a className="text-light" href="./html/carta.html">carta</a></li>
                    <li><a className="text-light" href="./html/ofertas.html">ofertas</a></li>
                    <li><a className="text-light" href="./html/nosotros.html">nosotros</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar