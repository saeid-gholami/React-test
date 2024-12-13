import "./Comments.css"

function CommentBox(props) {
    return (
        <div className="comment">
            <div className="comment__content">
                <p className="comment__body">
                    {props.comment}
                </p>
            </div>
            <div className="comment__info">
                <img src={props.userImage} className="comment__info-img" />
                <p className="comment__info-text">{props.userName}</p>
            </div>
        </div>
    )
}

export default CommentBox