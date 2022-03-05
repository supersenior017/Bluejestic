import React from 'react'
import { Tabs, Row, Col } from 'antd'
import { useAuth } from 'src/utils/auth'
import FriendsSingle from './FriendsSingle'
import { useMutation } from '@apollo/client'
import UN_FRIEND_MUTATION from 'src/graphql/mutations/unFriend'
import { notification } from 'antd'
const { TabPane } = Tabs
import MY_FEED_QUERY from 'src/graphql/queries/getMyFeed'

const AllFriends = () => {
  const { user, updateUser } = useAuth()

  const [unFriend] = useMutation(UN_FRIEND_MUTATION, {
    onCompleted: ({ unFriend }) => {
      updateUser(unFriend.user)
      notification['success']({
        message: 'Un Friend successfully',
        description: 'Your Friend request accepted successfully.',
      })
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const unFriendHandler = (userId) => {
    unFriend({ variables: { id: userId }, refetchQueries: [{ query: MY_FEED_QUERY }] })
  }

  return (
    <div className="all-friends-wrapper">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="All Friends" key="1">
          <Row gutter={30}>
            {user.friends
              .filter((friend) => friend.connectedAt)
              .map((friend) => (
                <Col key={friend.id} className="gutter-row" span={8}>
                  <FriendsSingle
                    profile="/assets/img/friends/01.png"
                    name={friend.user.username}
                    userId={friend.user.id}
                    location="Orlando, Fl"
                    friends="56"
                    stores="37"
                    buttontext="Unfriend"
                    buttonHandler={() => unFriendHandler(friend.user.id)}
                  />
                </Col>
              ))}
          </Row>
        </TabPane>
        <TabPane tab="Recently Added" key="2">
          <Row gutter={30}>
            {/* {user.friends
              .filter((friend) => friend.connectedAt)
              .map((friend) => (
                <Col key={friend.id} className="gutter-row" span={8}>
                  <FriendsSingle
                    profile="/assets/img/friends/01.png"
                    name={friend.user.username}
                    userId={friend.user.id}
                    location="Orlando, Fl"
                    friends="56"
                    stores="37"
                    buttontext="Unfriend"
                  />
                </Col>
              ))} */}
          </Row>
        </TabPane>
        <TabPane tab="Family" key="3">
          <Row gutter={30}>
            {/* {user.friends
              .filter((friend) => friend.connectedAt)
              .map((friend) => (
                <Col key={friend.id} className="gutter-row" span={8}>
                  <FriendsSingle
                    profile="/assets/img/friends/01.png"
                    name={friend.user.username}
                    userId={friend.user.id}
                    location="Orlando, Fl"
                    friends="56"
                    stores="37"
                    buttontext="Unfriend"
                  />
                </Col>
              ))} */}
          </Row>
        </TabPane>
      </Tabs>
    </div>
  )
}

export default AllFriends
