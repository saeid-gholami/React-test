import "./Works.css";

function Works() {
    return (
        <section className="container works">
            <div className="works__wrapper">
                <h5 className="works__header">HOW IT WORK</h5>
                <h2 className="works__title">
                    Three Simple Step To Started Working Process
                </h2>
                <div className="works__content">
                    <div className="works__content-item">
                        <h4 className="works__content-item-title">Research Project</h4>
                        <p className="works__content-item-text">
                        There are many variations of passages of Lorem Ipsum available
                        </p>
                    </div>
                    <div className="works__content-item">
                        <h4 className="works__content-item-title">Targeting</h4>
                        <p className="works__content-item-text">
                        There are many variations of passages of Lorem Ipsum available
                        </p>
                    </div>
                    <div className="works__content-item">
                        <h4 className="works__content-item-title">Research Project</h4>
                        <p className="works__content-item-text">
                        There are many variations of passages of Lorem Ipsum available
                        </p>
                    </div>
                </div>
                <div className="works__img">
                    <img src="images/main-img.svg" className="works__img-img"/>
                </div>
            </div>
        </section>
    )
}

export default Works