import { Row, Col } from 'antd';
import ProductSingle from './ProductSingle';

const TopPicks = () => {
    return (
        <div className="fashion-toppicks-wrapper">
            <div className="title-wrapper">
                <h4>Top Picks For You</h4>
            </div>
            <Row gutter={18}>
                <Col className="gutter-row" span={7}>
                    <ProductSingle
                        likes="120"
                        image="/assets/img/fashion/product-01.png"
                        shares="231"
                        productstyle={{marginBottom: '0px'}}
                    />
                </Col>
                <Col className="gutter-row" span={7}>
                    <ProductSingle
                        likes="120"
                        image="/assets/img/fashion/product-02.png"
                        shares="231"
                        productstyle={{marginBottom: '0px'}}
                    />
                </Col>
                <Col className="gutter-row" span={10}>
                    <ProductSingle
                        likes="120"
                        image="/assets/img/fashion/product-03.png"
                        shares="231"
                        productstyle={{marginBottom: '0px'}}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default TopPicks
