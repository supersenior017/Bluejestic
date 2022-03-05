const GroupSingle = ({ cover, groupname}) => {
    return (
        <div className="user-profile-group-single">
            <div className="group-wrapper">
                <div className="group-cover">
                    <div className="cover" style={{backgroundImage: `url(${cover})`}}></div>
                    <div className="group-info">
                        <h5><a href="#">{groupname}</a></h5>
                    </div>
                </div>
                <div className="group-meta">
                    <div className="group-meta-info">
                        <ul>
                            <li><img src="/assets/img/user-profile/group-01.png" /></li>
                            <li><img src="/assets/img/user-profile/group-02.png" /></li>
                            <li><img src="/assets/img/user-profile/group-03.png" /></li>
                            <li><img src="/assets/img/user-profile/group-04.png" /></li>
                        </ul>
                        <p>Public Group / 2k Members</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GroupSingle
