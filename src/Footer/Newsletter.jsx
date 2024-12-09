import "./Newsletter.css"

function Newsletter() {
    return (
        <section className="newsletter">
            <div className="container">
                <div className="newsletter__wrapper">
                    <h3 className="newsletter__text">Create a new generation website for your business.</h3>
                    <div className="newsletter__email">
                        <input type="text" className="newsletter__txt" placeholder="Email address" />
                        <button className="newsletter__btn">
                            <img src="public/images/right-arrow.svg"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Newsletter