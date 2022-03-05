import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import { Row, Col } from 'antd'
import LeftSidebar from 'src/components/shared/LeftSidebar'
import Header from 'src/components/shared/headers/Header'
import FriendsHero from 'src/components/Friends/FriendsHero'
import SuggestedFriends from 'src/components/Friends/SuggestedFriends'
import AllFriends from 'src/components/Friends/AllFriends'
import ProtectedRoute from 'src/hoc/ProtectedRoute'

const FriendsPage: NextPage = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50)
    })
  }, [])

  return (
    <div>
      <Header />
      <div className="stores-wrapper">
        <Row gutter={30}>
          <Col className="gutter-row" span={5}>
            <div className={scroll ? 'feed-left-sidebar sticky' : 'feed-left-sidebar'}>
              <LeftSidebar />
            </div>
          </Col>
          <Col className="gutter-row" span={19}>
            <div className="stores-main-wrapper">
              <FriendsHero />
              <SuggestedFriends />
              <AllFriends />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProtectedRoute(FriendsPage)
