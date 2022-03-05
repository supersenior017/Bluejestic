import React, { useEffect, useState } from 'react';
import { NextPage } from 'next'
import { Row, Col } from 'antd';
import LeftSidebar from 'src/components/shared/LeftSidebar'
import Header from 'src/components/shared/headers/Header'
import FeaturedProduct from 'src/components/Fashion/FeaturedProduct';
import CategorySingle from 'src/components/Fashion/CategorySingle';
import NewProductSingle from 'src/components/Fashion/NewProductSingle';
import TopPicks from 'src/components/Fashion/TopPicks';
import GetInspired from 'src/components/Fashion/GetInspired';
import PoupularBrands from 'src/components/Fashion/PoupularBrands';
import Trending from 'src/components/Fashion/Trending';
import ProtectedRoute from 'src/hoc/ProtectedRoute'

const Fashion: NextPage = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);


    return (
        <div>
            <Header />
            <div className="fashion-page-wrapper">
                <Row gutter={30}>
                    <Col className="gutter-row" span={5}>
                        <div className={scroll ? "feed-left-sidebar sticky" : "feed-left-sidebar"}>
                            <LeftSidebar />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={19}>
                        <FeaturedProduct />
                        <div className="fashion-categories-wrapper">
                            <Row gutter={12}>
                                <Col className="gutter-row" span={12}>
                                    <CategorySingle
                                        name="Women"
                                        image="/assets/img/fashion/category-01.png"
                                    />
                                </Col>
                                <Col className="gutter-row" span={12}>
                                    <CategorySingle
                                        name="Women"
                                        image="/assets/img/fashion/category-02.png"
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div className="fashion-newproduct-wrapper">
                            <Row gutter={12}>
                                <Col className="gutter-row" span={8}>
                                    <NewProductSingle
                                        title="Just in"
                                        image="/assets/img/fashion/new-product-01.png"
                                        description="Looking for new stuff?  Check out
                                        what’s fresh here."
                                    />
                                </Col>
                                <Col className="gutter-row" span={8}>
                                    <NewProductSingle
                                        title="Just in"
                                        image="/assets/img/fashion/new-product-02.png"
                                        description="Looking for new stuff?  Check out
                                        what’s fresh here."
                                    />
                                </Col>
                                <Col className="gutter-row" span={8}>
                                    <NewProductSingle
                                        title="Just in"
                                        image="/assets/img/fashion/new-product-03.png"
                                        description="Looking for new stuff?  Check out
                                        what’s fresh here."
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div>
                            <TopPicks />
                        </div>
                        <div>
                            <GetInspired />
                        </div>
                        <div>
                            <Trending />
                        </div>
                        <div>
                            <PoupularBrands />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

// export default ProtectedRoute(Fashion)
export default Fashion
