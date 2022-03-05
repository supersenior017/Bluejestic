const EventSingle = ({cover, description, location, timing, date, avtar}) => {
    return (
        <div className="store-about-store-events-single-wrapper">
            <div className="store-evnent-image">
                <img src={cover} />
            </div>
            <div className="store-evnent-info">
                <div className="event-info">
                    <div className="event-avtar">
                        <img src={avtar} />
                    </div>
                    <div className="event-details">
                        <p><span>Edifier Store</span> is invited you to an event</p>
                        <p className="description">{description}</p>
                    </div>
                </div>
                <div className="event-location">
                        <p className="location">{location}</p>
                        <p className="time">{timing}</p>
                    </div>
                    <div className="event-date">
                        <p>{date}</p>
                    </div>
                    <div className="event-going">
                        <p>Who’s Going</p>
                        <ul>
                            <li>
                                <img src="/assets/img/store/about/group-01.png" />
                            </li>
                            <li>
                                <img src="/assets/img/store/about/group-02.png" />
                            </li>
                            <li>
                                <img src="/assets/img/store/about/group-03.png" />
                            </li>
                            <li>
                                <img src="/assets/img/store/about/group-04.png" />
                            </li>
                            <li>
                                <img src="/assets/img/store/about/group-05.png" />
                            </li>
                            <li className="more">
                                <span>+5</span>
                            </li>
                        </ul>
                    </div>
                    <div className="event-action">
                        <a href="#" className="btn-blue">Going</a>
                        <a href="#" className="btn-purple">Cancel</a>
                    </div>
            </div>
        </div>
    )
}

export default EventSingle
