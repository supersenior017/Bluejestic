import { Row, Col } from 'antd';
import AboutStore from './AboutStore';
import Review from './Review';
import AboutInfo from './AboutInfo/AboutInfo';
import StoreInformation from './StoreInformation/StoreInformation';
import Activity from './Activity/Activity';
import Employees from './Employees/Employees';
import RecentlyAddedProducts from './RecentlyAddedProduct/RecentlyAddedProducts';
import LatestPost from './LatestPost/LatestPost';
import StoreEvents from './StoreEvents/StoreEvents';
import Recommendations from './Recommendations/Recommendations';


const About = () => {
    return (
        <div className="store-about-wrapper">
            <Row gutter={30}>
                <Col span={6}>
                    <AboutStore />
                    <Review />
                </Col>
                <Col span={18}>
                    <AboutInfo />
                    <StoreInformation />
                    <Activity />
                    <Employees />
                    <RecentlyAddedProducts />
                    <LatestPost />
                    <StoreEvents />
                    <Recommendations />
                </Col>
            </Row>
        </div>
    )
}

export default About
