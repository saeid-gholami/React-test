import "./Works.css";
import WorksContentItem from "./WorksContentItem";

function Works() {
    return (
        <section className="container works">
            <div className="works__wrapper">
                <h5 className="works__header">HOW IT WORK</h5>
                <h2 className="works__title">
                    Three Simple Step To Started Working Process
                </h2>
                <div className="works__content">
                    <WorksContentItem
                        title="Research Project"
                        desc="There are many variations of passages of Lorem Ipsum available"
                    />
                    <WorksContentItem
                        title="Targeting"
                        desc="There are many variations of passages of Lorem Ipsum available"
                    />
                    <WorksContentItem
                        title="Research Project"
                        desc="There are many variations of passages of Lorem Ipsum available"
                    />
                </div>
                <div className="works__img">
                    <img src="images/main-img.svg" className="works__img-img" />
                </div>
            </div>
        </section>
    )
}

export default Works