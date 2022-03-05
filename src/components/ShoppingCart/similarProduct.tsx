import React, { useEffect, useState } from 'react';
import SimilarProductSingle from './similarProductSingle';
import Slider from 'react-slick';

const SimilarProduct = (props) => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 750,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    return (
        <div className="cart-similar-product-wrapper">
            <h2>You may also like</h2>
            <Slider {...settings} className="similar-product-slider">
                <div className="item">
                    <SimilarProductSingle
                        storeimg="/assets/img/shopping-cart/store-image-03.png"
                        storename="Ele"
                        productimage="/assets/img/shopping-cart/similar-01.png"
                        productname="LG CX Consumer Series 77 4K UHD Smart OLED"
                        productprice="$1,096.00"
                    />
                </div>
                <div className="item">
                    <SimilarProductSingle
                        storeimg="/assets/img/shopping-cart/store-image-03.png"
                        storename="Youstore"
                        productimage="/assets/img/shopping-cart/similar-02.png"
                        productname="TCL 55R635 55 inch 6-SERIES 4K QLED..."
                        productprice="$799.99"
                    />
                </div>
                <div className="item">
                    <SimilarProductSingle
                        storeimg="/assets/img/shopping-cart/store-image-03.png"
                        storename="Youstore"
                        productimage="/assets/img/shopping-cart/similar-01.png"
                        productname="Samsung 85 Class Q60T Series QLED 4K"
                        productprice="$1,979.99"
                    />
                </div>
                <div className="item">
                    <SimilarProductSingle
                        storeimg="/assets/img/shopping-cart/store-image-03.png"
                        storename="Youstore"
                        productimage="/assets/img/shopping-cart/similar-01.png"
                        productname="Samsung 85 Class Q60T Series QLED 4K"
                        productprice="$1,979.99"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default SimilarProduct;
