import React from 'react'
import { Tabs, notification } from 'antd'
import { useQuery } from '@apollo/client'
import { useMutation } from '@apollo/client'
import Slider from 'react-slick'
import FriendsSingle from './FriendsSingle'
import { useAuth } from 'src/utils/auth'
import GET_USERS from 'src/graphql/queries/getUsers'
import SEND_FRIEND_REQUEST from 'src/graphql/mutations/sendFriendRequest'
import ACCEPT_FRIEND_REQUEST from 'src/graphql/mutations/acceptFriendRequest'
import MY_FEED_QUERY from 'src/graphql/queries/getMyFeed'

const { TabPane } = Tabs

const SuggestedFriends = () => {
  const { user, updateUser } = useAuth()

  const userFriendIDs = user.friends.map((friend) => friend.user.id)
  const { data } = useQuery(GET_USERS, {
    variables: {
      excludeUser: [...userFriendIDs, user.id],
      refetchQueries: [{ query: MY_FEED_QUERY }],
    },
  })

  const [addToFriend] = useMutation(SEND_FRIEND_REQUEST, {
    onCompleted: ({ sendFriendRequest }) => {
      updateUser(sendFriendRequest.user)
      notification['success']({
        message: 'Friend Request sent successfully',
        description: 'Your friend request has been sent',
      })
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const [acceptFriendRequest] = useMutation(ACCEPT_FRIEND_REQUEST, {
    onCompleted: ({ acceptFriendRequest }) => {
      updateUser(acceptFriendRequest.user)
      notification['success']({
        message: 'Friend Request accepted successfully',
        description: 'Your Friend request accepted successfully.',
      })
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 750,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  }

  return (
    <div className="friends-suggested-wrapper">
      <div className="suggested-friends-inner-wrapper">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Suggested Friends" key="1">
            <Slider {...settings} className="owl-carousel">
              {data &&
                data.users.map((user) => (
                  <div className="item" key={user.id}>
                    <FriendsSingle
                      profile="/assets/img/friends/01.png"
                      name={user.username}
                      location="Orlando, Fl"
                      friends="56"
                      stores="37"
                      buttontext="Add to Friends"
                      buttonHandler={() => addToFriend({ variables: { id: user.id } })}
                    />
                  </div>
                ))}
            </Slider>
          </TabPane>
          <TabPane tab="Friend Requests" key="2">
            <Slider {...settings} className="owl-carousel">
              {user.friends
                .filter((friend) => !friend.connectedAt && !friend.requestedByMe)
                .map((friend) => (
                  <div className="item" key={friend.id}>
                    <FriendsSingle
                      profile="/assets/img/friends/01.png"
                      name={friend.user.username}
                      userId={friend.user.id}
                      location="Orlando, Fl"
                      friends="56"
                      stores="37"
                      buttontext="Accept Request"
                      buttonHandler={() => acceptFriendRequest({ variables: { id: friend.user.id } })}
                    />
                  </div>
                ))}
            </Slider>
          </TabPane>
          <TabPane tab="Search" key="3"></TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default SuggestedFriends
