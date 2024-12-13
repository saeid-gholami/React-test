import "./Portfolio.css";

function PortfolioImage(props) {
    return (
        <div className="portfolio__item">
            <img src={props.image} className="portfolio__item-img" />
        </div>
    )
}

export default PortfolioImage