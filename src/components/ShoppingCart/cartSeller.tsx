import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'antd';

const CartSeller = ({storename, storeimg, offer}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="cart-seller-wrapper">
           <div className="cart-seller-info-left">
               <p>Seller</p>
               <div className="cart-seller-info">
                   <img src={storeimg} className="store-image" />
                   <h4>{storename}</h4>
               </div>
           </div>
           <div className="cart-seller-info-right">
               <a href="#" onClick={showModal}>{offer} <img src="/assets/img/shopping-cart/orange-arrow.svg" /></a>
            </div>
            <Modal
                title="Promotion Code"
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
                width={539}
                wrapClassName="promotion-code-modal"
                closeIcon={<img src="/assets/img/shopping-cart/ic_Close.svg" />}
            >   
                <div className="store-name">
                    <img src="/assets/img/shopping-cart/store-image-01.png" />
                    <h4>Edifier store</h4>
                </div>
                <p>Offers you 20% off with promotion code! Don’t forget to apply it now! </p>
                <p className="promo-code">Promo Code: EDI20</p>
                <div className="modal-action">
                <Button  type="primary" className="btn-border">No thanks</Button>
                <Button  type="primary" className="btn-fill">Apply</Button>
                </div>
            </Modal>
        </div>
    );
};

export default CartSeller;
