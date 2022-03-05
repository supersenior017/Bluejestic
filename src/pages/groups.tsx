import React, { useEffect, useState } from 'react';
import { NextPage } from 'next'
import { Row, Col } from 'antd';
import LeftSidebar from 'src/components/shared/LeftSidebar'
import Header from 'src/components/shared/headers/Header'
import GroupBanner from 'src/components/Groups/groupBanner';
import SuggestedGroups from 'src/components/Groups/suggestedGroups';
import AllGroups from 'src/components/Groups/allGroups';
import ProtectedRoute from 'src/hoc/ProtectedRoute'

const Groups: NextPage = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
    });
    }, []);

    return (
        <div>
            <Header />
            <div className="groups-wrapper">
                <Row gutter={30}>
                    <Col className="gutter-row" span={5}>
                        <div className={scroll ? "feed-left-sidebar sticky" : "feed-left-sidebar"}>
                            <LeftSidebar />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={19}>
                        <div className="groups-main-wrapper">
                            <GroupBanner />
                            <SuggestedGroups />
                            <AllGroups />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

// export default ProtectedRoute(Groups)
export default Groups;
