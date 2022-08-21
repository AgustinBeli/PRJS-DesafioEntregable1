import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="grid">
            <nav className="navbar navbar-dark bg-primary grid">
                <CartWidget />
                <ul className="text-light text-center m-0 col-10 list-inline" data-bs-toggle="tooltip">
                    <div className="row">
                        <li className="col"><a className="nav-link text-light" href="./index.html">home</a></li>
                        <li className="col"><a className="nav-link text-light" href="./html/carta.html">carta</a></li>
                        <li className="col"><a className="nav-link text-light" href="./html/ofertas.html">ofertas</a></li>
                        <li className="col"><a className="nav-link text-light" href="./html/nosotros.html">nosotros</a></li>
                    </div>

                </ul>
            </nav>
        </div>
    )
}
export default NavBar