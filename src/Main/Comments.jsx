import "./Comments.css"

function Comments() {
    return (
        <section className="person__comments">
            <div className="container comments__wrapper">
                <h2 className="comments__header">You’re in a good hand</h2>
                <p className="comments__text">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                </p>
                <div className="cmments__container">
                    <div className="comments">
                        <div className="comment">
                            <div className="comment__content">
                                <p className="comment__body">
                                    Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.
                                </p>
                            </div>
                            <div className="comment__info">
                                <img src="public/images/person-1.png" className="comment__info-img" />
                                <p className="comment__info-text">Martin Jones, Creative Cons</p>
                            </div>
                        </div>
                        <div className="comment">
                            <div className="comment__content">
                                <p className="comment__body">
                                    Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.
                                </p>
                            </div>
                            <div className="comment__info">
                                <img src="public/images/person-2.png" className="comment__info-img" />
                                <p className="comment__info-text">Martin Jones, Creative Cons</p>
                            </div>
                        </div>
                        <div className="comment">
                            <div className="comment__content">
                                <p className="comment__body">
                                    Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined.
                                </p>
                            </div>
                            <div className="comment__info">
                                <img src="public/images/person-3.png" className="comment__info-img" />
                                <p className="comment__info-text">Martin Jones, Creative Cons</p>
                            </div>
                        </div>
                    </div>
                    <div className="companies">
                        <img src="public/images/logo-1.svg" className="companies__logo" />
                        <img src="public/images/logo-2.svg" className="companies__logo" />
                        <img src="public/images/logo-3.svg" className="companies__logo" />
                        <img src="public/images/logo-4.svg" className="companies__logo" />
                        <img src="public/images/logo-5.svg" className="companies__logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comments