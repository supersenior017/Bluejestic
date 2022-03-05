import React, { useEffect, useState } from 'react';
import { NextPage } from 'next'
import { Row, Col } from 'antd';
import LeftSidebar from 'src/components/shared/LeftSidebar'
import KautikHeader from 'src/components/shared/headers/KautikHeader'
import Header from 'src/components/shared/headers/Header'
import TopRated from 'src/components/Electronic/TopRated';
import Trending from 'src/components/Electronic/Trending';
import RecentPost from 'src/components/Electronic/RecentPost';
import ProtectedRoute from 'src/hoc/ProtectedRoute'

const Electronic: NextPage = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);


    return (
        <div>
            <Header />
            <div className="electronics-wrapper">
                <Row gutter={30}>
                    <Col className="gutter-row" span={5}>
                        <div className={scroll ? "feed-left-sidebar sticky" : "feed-left-sidebar"}>
                            <LeftSidebar />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={19}>
                        <div className="electronics-main-wrapper">
                            <Row gutter={20}>
                                <Col className="gutter-row" span={24}>
                                    <div className="main-slider">
                                        <img src="/assets/img/electronics/slide-01.png" />
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={14}>
                                    <div className="big-banner">
                                        <img src="/assets/img/electronics/banner-big.png" />
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={10}>
                                    <div className="small-banner-1">
                                        <img src="/assets/img/electronics/banner-small-01.png" />
                                    </div>
                                    <div className="small-banner-2">
                                        <img src="/assets/img/electronics/banner-small-02.png" />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="categories-wrapper">
                            <Row gutter={24}>
                                <Col className="gutter-row" span={6}>
                                    <div className="category orange">
                                        <img src="/assets/img/electronics/category/category-01.png" />
                                        <h4>Computers, Tablets & More</h4>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="category green">
                                        <img src="/assets/img/electronics/category/category-02.png" />
                                        <h4>Headphones & Portable Audio</h4>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="category blue">
                                        <img src="/assets/img/electronics/category/category-03.png" />
                                        <h4>TV, Video & Home Audio</h4>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={6}>
                                    <div className="category purple">
                                        <img src="/assets/img/electronics/category/category-04.png" />
                                        <h4>Computer Components</h4>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className="products-banner">
                            <img src="/assets/img/electronics/banner.png" />
                        </div>
                        <div className="categories-banner-big">
                            <Row gutter={24}>
                                <Col className="gutter-row" span={8}>
                                    <div className="category brown">
                                        <img src="/assets/img/electronics/category/category-05.png" />
                                        <h4>Video & PC Gaming</h4>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={8}>
                                    <div className="category gray">
                                        <img src="/assets/img/electronics/category/category-06.png" />
                                        <h4>Smartphone</h4>
                                    </div>
                                </Col>
                                <Col className="gutter-row" span={8}>
                                    <div className="category cyan">
                                        <img src="/assets/img/electronics/category/category-07.png" />
                                        <h4>Wearable Technology</h4>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        {/* <TopRated />
                        <Trending />
                        <RecentPost /> */}

                    </Col>
                </Row>
            </div>
        </div>
    )
}

// export default ProtectedRoute(Electronic)
export default Electronic
