import { Row, Col } from 'antd';
import Categories from './Categories';
import Colors from './Colors';
import Brand from './Brand';
import Condition from './Condition';
import PriceRange from './PriceRange';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import AllProducts from './AllProducts/AllProducts';

const Store = () => {
    return (
        <div className="store-store-wrapper">
            <Row gutter={30}>
                <Col span={6}>
                    <Categories />
                    <Colors />
                    <Brand />
                    <Condition />
                    <PriceRange />
                </Col>
                <Col span={18}>
                    <FeaturedProducts />
                    <AllProducts />
                </Col>
            </Row>
        </div>
    )
}

export default Store
