import { Row, Col } from 'antd';
import AboutStore from '../About/AboutStore';
import Review from '../About/Review';
import PostSomething from '../../../Feed/PostSomething';
import NormalPost from '../../../Feed/NormalPost';
import DealPost from '../../../Feed/DealPost';
import SuggesstedGroups from '../../../Feed/SuggestedGroups';
import DoubleDeal from '../../../Feed/DoubleDeal';

const Feed = () => {
    return (
        <div className="store-feed-wrapper">
            <Row gutter={30}>
                <Col span={6}>
                    <AboutStore />
                    <Review />
                </Col>
                <Col span={12}>
                    <div className="feed-main-wrapper">
                        <PostSomething />
                        {/* <NormalPost />
                        <NormalPost /> */}
                        <DealPost title="TV Deals" />
                        {/* <NormalPost /> */}
                        <DealPost title="From Sportsabc" />
                        {/* <NormalPost /> */}
                        <DoubleDeal title="Deals from Sportsabc" />
                    </div>
                </Col>
                <Col span={6}>
                    <div className="feed-right-sidebar">
                        <SuggesstedGroups title="Suggessted Group" />
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Feed
