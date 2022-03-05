import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import { NextPage } from 'next'
import Header from 'src/components/shared/headers/Header'
import StoreMeta from 'src/components/Store/StoreMeta';
import StoreInfo from 'src/components/Store/StoreInfo';
import ProtectedRoute from 'src/hoc/ProtectedRoute'


const StorePage: NextPage = () => {

    return (
        <div>
            <Header />
            <div className="max-w-screen-xl mx-auto store-wrapper">
                <StoreMeta />
                <StoreInfo />
            </div>
        </div>
    );
};

// export default ProtectedRoute(StorePage)
export default StorePage;
