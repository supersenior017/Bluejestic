import { Row, Col } from 'antd';
import ProductListView from './ProductListView';


const ListView = () => {
    return (
        <div className="store-store-all-products-list-view-wrapper">
            <Row>
                <Col span={24}>
                    <ProductListView
                        image="/assets/img/store/about/product.png"
                        productname="Sony BDP-S6700 4K Upscaling 3D
                        Streaming Home Theater Blu-Ray"
                        price="$ 125.00"
                        discountprice="$ 89.00"
                        comments="1k"
                        likes="3k"
                        shares="2k"
                    />
                </Col>
                <Col span={24}>
                    <ProductListView
                        image="/assets/img/store/about/product.png"
                        productname="Sony BDP-S6700 4K Upscaling 3D
                        Streaming Home Theater Blu-Ray"
                        price="$ 125.00"
                        discountprice="$ 89.00"
                        comments="1k"
                        likes="3k"
                        shares="2k"
                    />
                </Col>
                <Col span={24}>
                    <ProductListView
                        image="/assets/img/store/about/product.png"
                        productname="Sony BDP-S6700 4K Upscaling 3D
                        Streaming Home Theater Blu-Ray"
                        price="$ 125.00"
                        discountprice="$ 89.00"
                        comments="1k"
                        likes="3k"
                        shares="2k"
                    />
                </Col>
                <Col span={24}>
                    <ProductListView
                        image="/assets/img/store/about/product.png"
                        productname="Sony BDP-S6700 4K Upscaling 3D
                        Streaming Home Theater Blu-Ray"
                        price="$ 125.00"
                        discountprice="$ 89.00"
                        comments="1k"
                        likes="3k"
                        shares="2k"
                    />
                </Col>
                <Col span={24}>
                    <ProductListView
                        image="/assets/img/store/about/product.png"
                        productname="Sony BDP-S6700 4K Upscaling 3D
                        Streaming Home Theater Blu-Ray"
                        price="$ 125.00"
                        discountprice="$ 89.00"
                        comments="1k"
                        likes="3k"
                        shares="2k"
                    />
                </Col>
            </Row>
        </div>
    )
}

export default ListView
