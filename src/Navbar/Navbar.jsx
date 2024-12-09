import "./Navbar.css"

function Navbar() {
    return (
        <nav className="container navbar">
            <div className="navbar__left">
                <img src="public/images/Interactive-ART.png" alt="navbar logo" />
                <ul className="navbar__list-items">
                    <li><a href="#" className="navbar__list-item-link">Home</a></li>
                    <li><a href="#" className="navbar__list-item-link">About</a></li>
                    <li><a href="#" className="navbar__list-item-link">How it work</a></li>
                    <li><a href="#" className="navbar__list-item-link">Clients</a></li>
                    <li><a href="#" className="navbar__list-item-link">Portfolio</a></li>
                </ul>
            </div>
            <div className="navbar__right">
                <button className="navbar__btn">Contact us</button>
            </div>
        </nav>
    )
}

export default Navbar