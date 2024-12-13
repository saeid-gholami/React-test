import "./Portfolio.css";
import PortfolioImage from "./PortfolioImage";

function Protfolio() {
    return (
        <section className="container portfolio" >
            <div className="portfolio__wrapper">
                <h5 className="portfolio__title">PORTFOLIO</h5>
                <h2 className="portfolio__text">Three Simple Step To Started Working Process</h2>
                <div className="portfolio__items">
                    <PortfolioImage image="images/portfolio-1.jpg" />
                    <PortfolioImage image="images/portfolio-2.jpg" />
                    <PortfolioImage image="images/portfolio-3.jpg" />
                    <PortfolioImage image="images/portfolio-4.jpg" />
                    <PortfolioImage image="images/portfolio-5.jpg" />
                    <PortfolioImage image="images/portfolio-6.jpg" />
                </div>
            </div>
        </section>
    )
}

export default Protfolio