import "./Portfolio.css";

function Protfolio() {
    return (
        <section className="container portfolio" >
            <div className="portfolio__wrapper">
                <h5 className="portfolio__title">PORTFOLIO</h5>
                <h2 className="portfolio__text">Three Simple Step To Started Working Process</h2>
                <div className="portfolio__items">
                    <div className="portfolio__item">
                        <img src="images/portfolio-1.jpg" className="portfolio__item-img" />
                    </div>
                    <div className="portfolio__item">
                        <img src="images/portfolio-2.jpg" className="portfolio__item-img" />
                    </div>
                    <div className="portfolio__item">
                        <img src="images/portfolio-3.jpg" className="portfolio__item-img" />
                    </div>
                    <div className="portfolio__item">
                        <img src="images/portfolio-4.jpg" className="portfolio__item-img" />
                    </div>
                    <div className="portfolio__item">
                        <img src="images/portfolio-5.jpg" className="portfolio__item-img" />
                    </div>
                    <div className="portfolio__item">
                        <img src="images/portfolio-6.jpg" className="portfolio__item-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Protfolio