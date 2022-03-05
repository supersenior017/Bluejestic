import { Row, Col } from 'antd';
import Product from './Product';


const RecentlyAddedProducts = () => {
    return (
        <div className="store-about-recently-added-products-wrapper store-card">
            <div className="d-flex justify-content-between">
                <h4 className="store-card-title">Recently added products</h4>
                <a href="#" className="see-all">See all</a>
            </div>

            <div className="products-wrapper">
                <Row gutter={30}>
                    <Col span={8}>
                        <Product
                            image="/assets/img/store/about/product.png"
                            productname="Sony BDP-S6700 4K Upscaling 3D Streaming Home Theater Blu-Ray"
                            price="$ 125.00"
                            discountprice="$ 89.00"
                        />
                    </Col>
                    <Col span={8}>
                    <Product
                            image="/assets/img/store/about/product.png"
                            productname="Sony BDP-S6700 4K Upscaling 3D Streaming Home Theater Blu-Ray"
                            price="$ 125.00"
                            discountprice="$ 89.00"
                        />
                    </Col>
                    <Col span={8}>
                    <Product
                            image="/assets/img/store/about/product.png"
                            productname="Sony BDP-S6700 4K Upscaling 3D Streaming Home Theater Blu-Ray"
                            price="$ 125.00"
                            discountprice="$ 89.00"
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default RecentlyAddedProducts
