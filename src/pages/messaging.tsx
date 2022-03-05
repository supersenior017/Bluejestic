import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { Row, Col } from 'antd'
import LeftSidebar from 'src/components/shared/LeftSidebar'
import Header from 'src/components/shared/headers/Header'
import OnlineUsers from 'src/components/Messaging/onlineUsers'
import ChatBox from 'src/components/Messaging/chatBox'
import ProtectedRoute from 'src/hoc/ProtectedRoute'

const MessagingPage: NextPage = () => {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
    });
    }, []);

    return (
        <div>
            <Header />
            <div className="messaging-wrapper">
                <Row gutter={30}>
                    <Col className="gutter-row" span={5}>
                        <div className={scroll ? "feed-left-sidebar sticky" : "feed-left-sidebar"}>
                            <LeftSidebar />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={7}>
                        <div className="messaging-online-chats">
                            <OnlineUsers />
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <ChatBox />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default MessagingPage;
