import React from 'react'
import { Menu, Dropdown } from 'antd'

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="#">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="#">2nd menu item</a>
    </Menu.Item>
  </Menu>
)

const FriendsSingle = ({ profile, name, userId, friends, location, stores, buttontext, buttonHandler }) => {
  return (
    <div className="friends-single-wrapper">
      <div className="friends-single-inner-wrapper">
        <div className="friend-info">
          <div className="friend-avtar">
            <img src={profile} />
          </div>
          <h5>{name}</h5>
          <p>{location}</p>
          <div className="action-dropdown">
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                <img src="/assets/img/groups/dots.svg" />
              </a>
            </Dropdown>
          </div>
        </div>
        <div className="friend-details">
          <div className="friend-friends">
            <h5>{name}</h5>
            <p>Friends</p>
          </div>
          <div className="friend-stores">
            <h5>{stores}</h5>
            <p>Stores</p>
          </div>
        </div>
        <div className="friend-btn">
          <button className="btn-friend" onClick={buttonHandler}>
            {buttontext}
          </button>
        </div>
      </div>
    </div>
  )
}

export default FriendsSingle
