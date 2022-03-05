import { Row, Col } from 'antd';
import Product from './Product';

const FeaturedProducts = () => {
    return (
        <div className="store-store-featured-products-wrapper store-card">
            <h4 className="store-card-title">Featured products</h4>
            <div className="store-feature-product-wrapper">
                <Row gutter={30}>
                    <Col span={10}>
                        <Product 
                            image="/assets/img/store/about/featured-01.png"
                            comments="25"
                            likes="120k"
                            shares="231"
                        />
                    </Col>
                    <Col span={7}>
                        <Product 
                            image="/assets/img/store/about/featured-02.png"
                            comments="25"
                            likes="120k"
                            shares="231"
                        />
                        <Product 
                            image="/assets/img/store/about/featured-03.png"
                            comments="25"
                            likes="120k"
                            shares="231"
                        />
                    </Col>
                    <Col span={7}>
                        <Product 
                            image="/assets/img/store/about/featured-04.png"
                            comments="25"
                            likes="120k"
                            shares="231"
                        />
                        <Product 
                            image="/assets/img/store/about/featured-05.png"
                            comments="25"
                            likes="120k"
                            shares="231"
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default FeaturedProducts
