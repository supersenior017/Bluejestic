import React, { useState } from 'react'
import { Menu, Dropdown, Modal } from 'antd'
import { useAuth } from 'src/utils/auth'
import nookies from 'nookies'

const KautikHeader = () => {
  const [isNotificationModalVisisble, setIsNotificationModalVisisble] = useState(false)
  const [isMessageModalVisisble, setIsMessageModalVisisble] = useState(false)
  const { user, updateUser } = useAuth()

  const showNotificationModal = () => {
    setIsNotificationModalVisisble(true)
  }

  const handleNotificationCancel = () => {
    setIsNotificationModalVisisble(false)
  }

  const showMessagingModal = () => {
    setIsMessageModalVisisble(true)
  }

  const handleMessagingCancel = () => {
    setIsMessageModalVisisble(false)
  }

  const logout = () => {
    nookies.set(undefined, 'token', '', {
      path: '/',
    })
    updateUser(null)
  }

  const menu = (
    <Menu>
      <Menu className="your-account">
        <h6>Your Account</h6>
        <Menu className="your-account-links">
          <Menu.Item key="0">
            <a href="#">
              <img src="assets/img/bluejestic/profile-settings.svg" className="link-icon" /> Profile Settings
            </a>
          </Menu.Item>
          <Menu.Item key="1">
            <a onClick={logout}>
              <img src="assets/img/bluejestic/log-out.svg" className="link-icon" /> Log Out
            </a>
          </Menu.Item>
        </Menu>
      </Menu>
      <Menu className="chat-settings">
        <h6>Chat Settings</h6>
        <Menu className="chat-settings-links">
          <Menu.Item key="0" className="user-online">
            Online
          </Menu.Item>
          <Menu.Item key="1" className="user-away">
            Away
          </Menu.Item>
          <Menu.Item key="2" className="user-busy">
            Busy
          </Menu.Item>
          <Menu.Item key="3" className="user-invisible">
            Invisisble
          </Menu.Item>
        </Menu>
      </Menu>
      <Menu className="about-bluejestic">
        <h6>ABOUT BLUEJESTIC</h6>
        <Menu className="about-bluejestic-links">
          <Menu.Item key="0">
            <a href="#">Term and Conditions</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="#">Privacy</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="#">Help Center</a>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="#">FAQs</a>
          </Menu.Item>
          <Menu.Item key="3">
            <a href="#">Contact</a>
          </Menu.Item>
        </Menu>
      </Menu>
    </Menu>
  )

  return (
    <div className="main-heder-wrapper">
      <div className="main-header-inner-wrapper">
        <div className="header-top-wrapper">
          <div className="header-top-left-wrapper">
            <div className="logo-wrapper">
              <img style={{ maxWidth: '10em' }} src="assets/img/bluejestic/bluejestic_logo.svg" alt="bluejestic logo" />
            </div>
            <div className="search-wrapper">
              <img src="assets/img/search_icon.svg" alt="search" className="search-icon" />
              <input type="text" placeholder="Search" className="search-input" />
            </div>
          </div>
          <div className="header-top-right-wrapper">
            <div className="shopping-cart">
              <img src="assets/img/shopping_bag.svg" alt="shopping bag" />
            </div>
            <div className="message" onClick={showMessagingModal}>
              <img src="assets/img/message.svg" alt="message" />
              <span className="red-dot"></span>
            </div>
            <div className="notification" onClick={showNotificationModal}>
              <img src="assets/img/notification.svg" alt="notification" />
              <span className="red-dot"></span>
            </div>
            <div className="user-profile-wrapper">
              <div className="user-avtar">
                <img src="assets/img/bluejestic/user-avtar.png" />
              </div>
              <div className="user-dropdown">
                <Dropdown overlay={menu} trigger={['click']} overlayClassName="user-profile-dropdown-menu">
                  <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                    {/* {user.username} */}
                    <img src="assets/img/bluejestic/down-arrow.svg" alt="down arrow" />
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="header-menu-wrapper">
          <ul>
            <li>
              <a href="#">Fashion</a>
            </li>
            <li>
              <a href="#">Electronic</a>
            </li>
            <li>
              <a href="#">Music</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">Books</a>
            </li>
            <li>
              <a href="#">Home & Garden</a>
            </li>
            <li>
              <a href="#">Art</a>
            </li>
          </ul>
        </div>
      </div>
      <Modal
        title="Post Something"
        visible={isNotificationModalVisisble}
        onCancel={handleNotificationCancel}
        footer={null}
        width={376}
        wrapClassName="notification-modal"
        closeIcon={<img src="assets/img/feed/ic_Close.svg" />}
        closable={true}
      >
        <div className="header-modal">
          <div className="header-modal-left">
            <a href="#">Notifications</a>
          </div>
          <div className="header-modal-right">
            <a href="#">Settings</a>
            <a href="#">Mark All As Read</a>
          </div>
        </div>
        <div className="modal-content-wrapper">
          <ul>
            <li>
              <div className="user-avtar">
                <img src="assets/img/left-sidebar/profile.png" />
              </div>
              <div className="user-info">
                <p>
                  <span className="text-black">Jake Powell</span> Commented on you new{' '}
                  <span className="text-red">profile status</span>
                </p>
                <p className="time">3 hours ago</p>
              </div>
            </li>
            <li>
              <div className="user-avtar">
                <img src="assets/img/left-sidebar/profile.png" />
              </div>
              <div className="user-info">
                <p>
                  You and <span className="text-red">Diana Jameson</span> just became friends
                </p>
                <p className="time">6 hours ago</p>
              </div>
            </li>
            <li>
              <div className="user-avtar">
                <img src="assets/img/left-sidebar/profile.png" />
              </div>
              <div className="user-info">
                <p>
                  <span className="text-black">Elaine Wong</span> Commented on you photo
                </p>
                <p className="time">Yesterday at 6:53 PM</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-modal">
          <a href="#">View All Messages</a>
        </div>
      </Modal>
      <Modal
        title="Post Something"
        visible={isMessageModalVisisble}
        onCancel={handleMessagingCancel}
        footer={null}
        width={376}
        wrapClassName="messaging-modal"
        closeIcon={<img src="assets/img/feed/ic_Close.svg" />}
        closable={true}
      >
        <div className="header-modal">
          <div className="header-modal-left">
            <a href="#">Chat/Messages</a>
          </div>
          <div className="header-modal-right">
            <a href="#">Settings</a>
            <a href="#">Mark All As Read</a>
          </div>
        </div>
        <div className="modal-content-wrapper">
          <ul>
            <li>
              <div className="user-avtar">
                <img src="assets/img/left-sidebar/profile.png" />
              </div>
              <div className="user-info">
                <p className="user-name">Jake Powell</p>
                <p>Hi Vincent, It’s Jake, I just wanted to let you know that we have to reschedule...</p>
                <p className="time">3 hours ago</p>
              </div>
            </li>
            <li>
              <div className="user-avtar">
                <img src="assets/img/left-sidebar/profile.png" />
              </div>
              <div className="user-info">
                <p className="user-name">Diana Jameson</p>
                <p>Great, I’ll see you tomorrow!</p>
                <p className="time">6 hours ago</p>
              </div>
            </li>
            <li>
              <div className="user-avtar">
                <img src="assets/img/left-sidebar/profile.png" />
              </div>
              <div className="user-info">
                <p className="user-name">Elaine Wong</p>
                <p>I’ll have to check with the office on the status</p>
                <p className="time">1:20 PM Yesterday</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="footer-modal">
          <a href="#">View All Messages</a>
        </div>
      </Modal>
    </div>
  )
}

export default KautikHeader
