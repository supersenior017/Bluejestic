import { Row, Col } from 'antd';
import PostSingle from './PostSingle';

const LatestPost = () => {
    return (
        <div className="store-about-latest-post-wrapper store-card">
            <div className="d-flex justify-content-between">
                <h4 className="store-card-title">Latest Post</h4>
                <a href="#" className="see-all">See all</a>
            </div>
            <div className="post-wrapper">
                <Row>
                    <Col span={8}>
                        <PostSingle 
                            image="/assets/img/store/about/post-01.png"
                            title="Last post for a while. Stay tone for the ..."
                            comments="25"
                            likes="120K"
                            shares="231"
                        />
                    </Col>
                    <Col span={8}>
                        <PostSingle 
                            image="/assets/img/store/about/post-02.png"
                            title="Last post for a while. Stay tone for the ..."
                            comments="25"
                            likes="120K"
                            shares="231"
                        />
                    </Col>
                    <Col span={8}>
                        <PostSingle 
                            image="/assets/img/store/about/post-03.png"
                            title="Last post for a while. Stay tone for the ..."
                            comments="25"
                            likes="120K"
                            shares="231"
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default LatestPost
