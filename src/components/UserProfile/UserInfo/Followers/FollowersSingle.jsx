const FollowersSingle = ({image, name, location}) => {
    return (
        <div className="user-profile-followes-follower-single-wrapper">
            <div className="follower-image">
                <img src={image} />
            </div>
            <div className="follower-info">
                <h4><a href="#">{name}</a></h4>
                <p><img src="/assets/img/store/followers/location.svg" /> {location}</p>
            </div>
        </div>
    )
}

export default FollowersSingle
