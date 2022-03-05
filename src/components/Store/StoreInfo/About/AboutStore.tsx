const AboutStore = () => {
    return (
        <div className="store-about-about-store-wrapper store-card">
            <ul>
                <li>
                    <p>Products</p>
                    <span>50</span>
                </li>
                <li>
                    <p>Followers</p>
                    <span>698</span>
                </li>
                <li>
                    <p>Following</p>
                    <span>57</span>
                </li>
                <li>
                    <p>Events</p>
                    <span>5</span>
                </li>
                <li>
                    <p>Post</p>
                    <span>10</span>
                </li>
            </ul>
            <a href="#" className="btn-blue"><img src="/assets/img/store/about/follow.svg" /> Follow</a>
            <a href="#" className="btn-purple"><img src="/assets/img/store/about/message.svg" /> Message</a>
        </div>
    )
}

export default AboutStore
