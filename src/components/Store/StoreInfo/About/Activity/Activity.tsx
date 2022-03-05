import { Row, Col } from 'antd';
import ActivitySingle from './ActivitySingle';

const Activity = () => {
    return (
        <div className="store-about-activity-wrapper store-card">
            <div className="d-flex justify-content-between">
                <h4 className="store-card-title">Activity</h4>
                <a href="#" className="see-all">See all</a>
            </div>
            <div className="activity-wrapper">
                <Row>
                    <Col span={12}>
                        <ActivitySingle
                            image="/assets/img/store/about/activity.png"
                            title="I’m looking for assistant to
                            help boost sales"
                            comments="12"
                            shares="2"
                        />
                    </Col>
                    <Col span={12}>
                        <ActivitySingle
                            image="/assets/img/store/about/activity.png"
                            title="I’m looking for assistant to
                            help boost sales"
                            comments="12"
                            shares="2"
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Activity
