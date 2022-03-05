import { Row, Col } from 'antd';

const StoreInformation = () => {
    return (
        <div className="store-about-store-information-wrapper store-card">

            <Row>
                <Col span={10}>
                    <div className="store-information">
                        <h4 className="store-card-title">Store Information</h4>
                        <p className="location">Location:</p>
                        <address>
                            123 Main St <br />
                            Boston, Massachusetts 02111 <br />
                            Tel: (555)123-4567
                        </address>
                    </div>
                </Col>
                <Col span={6}>
                    <div className="on-bluejestic">
                        <h4 className="store-card-title">On Bluejestic</h4>
                        <p>May 2020</p>
                    </div>
                </Col>
                <Col span={8}>
                    <div className="social-networks">
                    <h4 className="store-card-title">Social Networks</h4>
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
                </Col>
            </Row>
        </div>
    )
}

export default StoreInformation
