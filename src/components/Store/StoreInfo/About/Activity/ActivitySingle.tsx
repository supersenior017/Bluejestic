const ActivitySingle = ({image, title, comments, shares}) => {
    return (
        <div className="store-about-activity-single-wrapper">
            <div className="store-about-activity-image">
                <img src={image} />
            </div>
            <div className="store-about-activity-info">
                <p>{title}</p>
                <div className="meta-info">
                    <p>{comments} Comments</p>
                    <p>{shares} Shares</p>
                </div>
            </div>
        </div>
    )
}

export default ActivitySingle
