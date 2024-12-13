import ShowImage from "./ShowImage"
import "./Comments.css"
import CommentBox from "./CommentsBox"

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
                        <CommentBox
                            comment="Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined."
                            userImage="images/person-1.png"
                            userName="Martin Jones, Creative Cons"
                        />
                        <CommentBox
                            comment="Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined."
                            userImage="images/person-2.png"
                            userName="Saeid Gholami, west Tehran"
                        />
                        <CommentBox
                            comment="Life before Company was very chaotic we got a lot of phone calls, a lot of mistyped orders. So with Company, the ability to see the order directly from the customer makes it so streamlined."
                            userImage="images/person-3.png"
                            userName="Sajad Babaei, Lahijan Guilan"
                        />
                    </div>
                    <div className="companies">
                        <ShowImage image="images/logo-1.svg" />
                        <ShowImage image="images/logo-2.svg" />
                        <ShowImage image="images/logo-3.svg" />
                        <ShowImage image="images/logo-4.svg" />
                        <ShowImage image="images/logo-5.svg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comments