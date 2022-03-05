import React, { useEffect, useState } from 'react'
import { Row, Col } from 'antd'
import { useQuery } from '@apollo/client'
import MY_FEED_QUERY from 'src/graphql/queries/getMyFeed'
import FindFriends from 'src/components/Feed/FindFriends'
import PostSomething from 'src/components/Feed/PostSomething'
import NormalPost from 'src/components/Feed/NormalPost'
// import DealPost from 'src/components/Feed/DealPost'
// import DoubleDeal from 'src/components/Feed/DoubleDeal'
import HighLights from 'src/components/Feed/Highlights'
import SuggesstedGroups from 'src/components/Feed/SuggestedGroups'
import Friends from 'src/components/Feed/Friends'
import LeftSidebar from 'src/components/shared/LeftSidebar'
import Header from 'src/components/shared/headers/Header'
import ProtectedRoute from 'src/hoc/ProtectedRoute'
import useSetScroll from 'src/hooks/useSetScroll'

const NewFeedPage = () => {
  const scroll = useSetScroll()
  const { loading, error, data } = useQuery(MY_FEED_QUERY)
  const [editPost, setEditPost] = useState({ isEdit: false, content: null, id: null })

  const editPostHandler = ({ id, content, isEdit }) => {
    setEditPost({ isEdit: isEdit, content, id })
  }

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  const { myFeed: { feed }, } = data

  return (
    <div>
      <Header />
      <div className="feed-wrapper">
        <Row gutter={30}>
          <Col className="gutter-row" span={5}>
            <div className={scroll ? 'feed-left-sidebar sticky' : 'feed-left-sidebar'}>
              <LeftSidebar />
              <FindFriends />
            </div>
          </Col>
          <Col className="gutter-row" span={13}>
            <div className="feed-main-wrapper">
              <PostSomething editPost={editPost} editPostHandler={editPostHandler} />
              {feed.map((post) => (
                <NormalPost key={post.id} post={post} editPostHandler={editPostHandler} />
              ))}
              {/* <NormalPost />
              <DealPost title="TV Deals" />
              <NormalPost />
              <DealPost title="From Sportsabc" />
              <NormalPost />
              <DoubleDeal title="Deals from Sportsabc" /> */}
            </div>
          </Col>
          <Col className="gutter-row" span={6}>
            <div className={scroll ? 'feed-right-sidebar sticky' : 'feed-right-sidebar'}>
              <HighLights title="Hightlights" />
              <SuggesstedGroups title="Suggessted Group" />
              <Friends title="Friends" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default ProtectedRoute(NewFeedPage)
