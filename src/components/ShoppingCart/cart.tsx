import React, { useEffect, useState } from 'react';
import CartItemSingle from './cartItemSingle';
import CartSeller from './cartSeller';

const Cart = (props) => {
    return (
        <div className="cart-wrapper">
            <h2>My Bag (4 items)</h2>
            <CartSeller 
                storename="Edifier store"
                storeimg="/assets/img/shopping-cart/store-image-01.png"
                offer="Save 20% with store coupon"
            />
            <CartItemSingle 
                productname="Apple pencil"
                productimg="/assets/img/shopping-cart/product-01.png"
                productdetail="1st Genaration"
                productstyle="1st Generation"
                productsize="11"
                productcolor="White"
                productprice="$129.00"
                productdiscprice="$103.20"
            />
            <CartItemSingle 
                productname="Bose Solo 5 Tv Sound Track"
                productimg="/assets/img/shopping-cart/product-02.png"
                productdetail="Original Retail Packing"
                productstyle="1st Generation"
                productsize="11"
                productcolor="Black"
                productprice="$329.00"
                productdiscprice="$263.20"
            />
            <div className="mt-5">
            <CartSeller 
                storename="sportsabc"
                storeimg="/assets/img/shopping-cart/store-image-02.png"
                offer="Save 20% with store coupon"
            />
            <CartItemSingle 
                productname="Nike Air Max 270"
                productimg="/assets/img/shopping-cart/product-03.png"
                productdetail="Mens Runing Shoes Black 9.5"
                productstyle="Running Shoes"
                productsize="9.5"
                productcolor="A053m-black"
                productprice=""
                productdiscprice="$129.00"
            />
            <CartItemSingle 
                productname="Gildan Ultra Cotton Long Sleeve T-shirt 2-Pack"
                productimg="/assets/img/shopping-cart/product-04.png"
                productdetail="Mens Runing Shoes Black 9.5"
                productstyle="Running Shoes"
                productsize="9.5"
                productcolor="A053m-black"
                productprice=""
                productdiscprice="$329.00"
            />
            </div>
        </div>
    );
};

export default Cart;
