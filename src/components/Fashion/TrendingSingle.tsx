const TrendingSingle = ({image, title, time, likes, comments, badge, badgecolor}) => {
    return (
        <div className="fashion-trending-single-wrapper">
            <div className="fashion-trending-image">
                <img src={image} />
            </div>
            <div className="fashion-trending-content">
                <div className="fashion-trending-badge" style={badgecolor}>
                    <span>{badge}</span>
                </div>
                <div className="fashion-trending-title">
                    <p>{title}</p>
                </div>
                <div className="fashion-trending-meta">
                    <ul>
                        <li><img src="/assets/img/fashion/clock-svg.svg" /> {time}</li>
                        <li><img src="/assets/img/fashion/like-svg.svg" /> {likes}</li>
                        <li><img src="/assets/img/fashion/comment-svg.svg" /> {comments}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TrendingSingle
