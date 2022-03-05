const EmployeeSingle = ({ image, name, position }) => {
    return (
        <div className="store-about-employees-employee-wrapper">
            <div className="store-about-employee-avtar">
                <img src={image} />
            </div>
            <div className="store-about-employee-info">
                <p className="name">{name}</p>
                <h4>Position</h4>
                <p className="position">{position}</p>
                <ul>
                    <li>
                        <a href="#">
                            <img src="/assets/img/store/about/facebook.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/assets/img/store/about/twitter.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/assets/img/store/about/instagram.svg" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/assets/img/store/about/linkedin.svg" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default EmployeeSingle
