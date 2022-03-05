const ActivitySingle = ({image, name, description, storeimage, storename, comments, shares}) => {
    return (
        <div className="user-profile-activity-single">
            <div className="activity-image">
                <img src={image} alt="img" />
            </div>
            <div className="activity-content">
                <h5>{name}</h5>
                <p>{description}</p>
                <div className="activity-store">
                    <img src={storeimage} alt="" />
                    <p>{storename}</p>
                </div>
                <div className="activity-meta">
                    <p>{comments} comments</p>
                    <p>{shares} Shares</p>
                </div>
            </div>
        </div>
    )
}

export default ActivitySingle
