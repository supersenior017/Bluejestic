import React, { useEffect, useState } from 'react';
import { NextPage } from 'next'
import { Row, Col } from 'antd';
import LeftSidebar from 'src/components/shared/LeftSidebar'
import Header from 'src/components/shared/headers/Header'
import FeaturedBooks from 'src/components/Books/FeaturedBooks';
import Categories from 'src/components/Books/Categories';
import PopularNow from 'src/components/Books/PopularNow';
import BookOfMonth from 'src/components/Books/BookOfMonth';
import NewRelease from 'src/components/Books/NewRelease';
import ChildrenBooks from 'src/components/Books/ChildrenBooks';
import BestSellers from 'src/components/Books/BestSellers';
import PopularBooks from 'src/components/Books/PopularBooks';

const BooksPage: NextPage = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <div>
             <Header />
             <div className="books-wrapper">
                <Row gutter={30}>
                    <Col className="gutter-row" span={5}>
                        <div className={scroll ? "feed-left-sidebar sticky" : "feed-left-sidebar"}>
                            <LeftSidebar />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={19}>
                        <div className="books-main-wrapper">
                            <FeaturedBooks />
                            <Categories />
                            <Row gutter={17}>
                                <Col className="gutter-row" span={17}>
                                    <PopularNow />
                                    <BookOfMonth />
                                    <NewRelease />
                                    <ChildrenBooks />
                                </Col>
                                <Col className="gutter-row" span={7}>
                                    <BestSellers />
                                    <PopularBooks />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

// export default ProtectedRoute(BooksPage)
export default BooksPage
