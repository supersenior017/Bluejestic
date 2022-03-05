import { Row, Col } from 'antd';
import TrendingSingle from './TrendingSingle';

const Trending = () => {
    return (
        <div>
            <h4>Trending</h4>
            <Row gutter={30}>
                <Col className="gutter-row" span={6}>
                    <TrendingSingle/>
                </Col>
                <Col className="gutter-row" span={6}>
                    <TrendingSingle/>
                </Col>
                <Col className="gutter-row" span={6}>
                    <TrendingSingle/>
                </Col>
            </Row>
        </div>
    )
}

export default Trending
