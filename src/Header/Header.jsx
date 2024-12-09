import "./Header.css"

function Header() {
    return (
        <header className="container header">
            <div className="header__wrapper">
                <div className="header__wrapper-left">
                    <h2 className="header__left-title">
                        Create a new generation website for your business.
                    </h2>
                    <p className="header__left-text">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't
                    </p>
                    <div className="header__left-btns">
                        <button className="header__left-btn">Contact us</button>
                        <button className="header__left-btn">See our works</button>
                    </div>
                </div>
                <div className="header__wrapper-right">
                    <img src="public/images/header-img.svg" alt="header image" />
                </div>
            </div>
        </header>
    )
}

export default Header