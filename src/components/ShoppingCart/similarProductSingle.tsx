import React, { useEffect, useState } from 'react';
import {Button } from 'antd';

const SimilarProductSingle = ({storeimg, storename, productimage, productname, productprice}) => {
    return (
        <div className="cart-similar-product-single-wrapper">
           <div className="store-name">
               <img src={storeimg} />
               <h5>{storename}</h5>
           </div>
           <div className="product-info">
               <img src={productimage} />
               <h5 className="product-name"><a href="#">{productname}</a></h5>
               <h5 className="product-prcie">{productprice}</h5>
           </div>
           <div className="product-action">
               <Button  type="primary" shape="round">Add to Cart</Button>
           </div>
        </div>
    );
};

export default SimilarProductSingle;
