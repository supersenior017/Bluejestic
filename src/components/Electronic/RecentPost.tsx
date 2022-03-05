import { Row, Col } from 'antd';

const RecentPost = () => {
    return (
        <div>
            <Row gutter={30}>
                <Col className="gutter-row" span={8}>
                    <h4>What's New</h4>
                </Col>
                <Col className="gutter-row" span={8}>
                    <h4>Recent Post</h4>
                </Col>
            </Row>
        </div>
    )
}

export default RecentPost
