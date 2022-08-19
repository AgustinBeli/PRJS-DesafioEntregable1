import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div>
            <header>
                <CartWidget />
                <nav className="navbar navbar-dark bg-primary">
                    <ul className="text-light">
                        <li><a href="./index.html">home</a></li>
                        <li><a href="./html/carta.html">carta</a></li>
                        <li><a href="./html/ofertas.html">ofertas</a></li>
                        <li><a href="./html/nosotros.html">nosotros</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
export default NavBar