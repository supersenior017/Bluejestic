import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import AlexHeader from '../../components/shared/headers/AlexHeader';
import LeftSidebar from '../../components/shared/left-sidebar/LeftSidebar';
import HeroSlider from './HeroSlider';
import PopularStores from './PopularStores';
import StoreCategories from './StoreCategories';
import SuggestedStores from './SuggestedStores';
import AllStores from './AllStores';
import KautikHeader from '../../components/shared/headers/KautikHeader';

const NewStore = (props) => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <div>
            <KautikHeader />
            <div className="stores-wrapper">
                <Row gutter={30}>
                    <Col className="gutter-row" span={5}>
                        <div className={scroll ? "feed-left-sidebar sticky" : "feed-left-sidebar"}>
                            <LeftSidebar />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={19}>
                        <div className="stores-main-wrapper">
                            <HeroSlider />
                            <SuggestedStores />
                            <StoreCategories />
                            <PopularStores />
                            <AllStores />
                            <div className="stores-load-more">
                                <a href="#">Load more</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};


export default NewStore;
