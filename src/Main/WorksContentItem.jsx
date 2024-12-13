import "./Works.css";

function WorksContentItem(props) {
    return (
        <div className="works__content-item">
            <h4 className="works__content-item-title">{props.title}</h4>
            <p className="works__content-item-text">
                {props.desc}
            </p>
        </div>
    )
}

export default WorksContentItem