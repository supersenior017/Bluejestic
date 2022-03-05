const PostSingle = ({image, title, comments, likes, shares}) => {
    return (
        <div className="store-about-latest-post-single-wrapper">
            <div className="post-image">
                <img src={image} />
            </div>
            <div className="post-info">
                <h4><a href="#">{title}</a></h4>
            </div>
            <div className="post-meta">
                <ul>
                    <li>
                        <img src="/assets/img/store/about/message-black.svg" />
                        <span>{comments} Comments</span>
                    </li>
                    <li>
                        <img src="/assets/img/store/about/like-black.svg" />
                        <span>{likes} Likes</span>
                    </li>
                    <li>
                        <img src="/assets/img/store/about/share-black.svg" />
                        <span>{shares} Share</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PostSingle
