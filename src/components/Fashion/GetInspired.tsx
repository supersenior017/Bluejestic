import { Row, Col } from 'antd';
import ProductSingle from './ProductSingle';

const GetInspired = () => {
    return (
        <div className="fashion-getinspired-wrapper">
            <div className="title-wrapper">
                <h4>Get Inspired</h4>
            </div>
            <Row gutter={20}>
                <Col className="gutter-row" span={13}>
                    <ProductSingle
                        likes="120"
                        image="/assets/img/fashion/product-04.png"
                        shares="231"
                        productstyle={{marginBottom: '0px'}}
                    />
                </Col>
                <Col className="gutter-row" span={11}>
                    <ProductSingle
                        likes="120"
                        image="/assets/img/fashion/product-05.png"
                        shares="231"
                        productstyle={{marginBottom: '20px'}}
                    />
                    <ProductSingle
                        likes="120"
                        image="/assets/img/fashion/product-06.png"
                        shares="231"
                        productstyle={{marginBottom: '0px'}}
                    />
                </Col>

            </Row>
        </div>
    )
}

export default GetInspired
