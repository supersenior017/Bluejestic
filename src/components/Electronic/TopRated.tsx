import { Row, Col } from 'antd';
import ProductSingle from './ProductSingle';

const TopRated = () => {
    return (
        <div className="top-rated-wrapper">
            <h4>Top Rated</h4>
            <ProductSingle 
                productimage="/assets/img/elecronics/product-01.png"
                productname="TOZO T6 True Wireless Earbuds Bluetooth"
                price="$ 125.00"
                discprice="$ 35.00"
                likes="3"
                comments="1"
                shares="2"
            />
            <ProductSingle 
                productimage="/assets/img/elecronics/product-02.png"
                productname="TOZO T10 Bluetooth 5.0 Wireless Earbuds with Wireless Charging "
                price="$ 125.00"
                discprice="$ 21.00"
                likes="3"
                comments="1"
                shares="2"
            />
            <ProductSingle 
                productimage="/assets/img/elecronics/product-03.png"
                productname="Anker Portable Charger, PowerCore Slim 10000 Power Bank, 10000mAh "
                price="$ 125.00"
                discprice="$ 21.00"
                likes="3"
                comments="1"
                shares="2"
            />
        </div>
    )
}

export default TopRated
