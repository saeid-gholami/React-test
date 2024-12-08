import "./App.css"

function App() {
    return (
        <div>
            <div className="navbar">
                <div className="navbar__items">
                    <ul className="navbar__items-ul">
                        <li><a href="#" className="navbar__items-link">Home</a></li>
                        <li><a href="#" className="navbar__items-link">Products</a></li>
                        <li><a href="#" className="navbar__items-link">Services</a></li>
                        <li><a href="#" className="navbar__items-link">Search</a></li>
                        <li><a href="#" className="navbar__items-link">Log in</a></li>
                        <li><a href="#" className="navbar__items-link">About us</a></li>
                    </ul>
                </div>
                <div className="navbar__logo">
                    <h1 className="navbar__logo-title">Saeid Gholami</h1>
                    <img src="public/vite.svg" alt="navbar logo" />
                </div>
            </div>
        </div>
    )
}

export default App;