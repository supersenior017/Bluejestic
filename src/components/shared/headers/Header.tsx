import React, { useState } from 'react'
import { Menu, Dropdown, Modal } from 'antd'
import { useAuth } from 'src/utils/auth'
import nookies from 'nookies'

const Header = () => {
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
              <img src="/assets/img/bluejestic/profile-settings.svg" className="link-icon" /> Profile Settings
            </a>
          </Menu.Item>
          <Menu.Item key="1">
            <a onClick={logout}>
              <img src="/assets/img/bluejestic/log-out.svg" className="link-icon" /> Log Out
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
    <div className="bg-gradient-to-r from-blue to-purple py-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-11 gap-4">
          <div className="col-span-2">
            <img style={{ maxWidth: '10em' }} src="/assets/img/bluejestic/bluejestic_logo.svg" alt="bluejestic logo" />
          </div>
          <div className="col-span-3 relative">
            <input type="text" placeholder="Search" className="border-transparent rounded-full h-16 w-100 py-8 px-8" />
            <div className="absolute right-6 top-4">
              <img src="/assets/img/search_icon.svg" alt="search" className="search-icon" />
            </div>
          </div>
          <div className="col-end-12 col-span-3 flex flex-row gap-x-8 items-center justify-end">
            <div>
              <img src="/assets/img/shopping_bag.svg" alt="shopping bag" />
            </div>
            <div onClick={showMessagingModal}>
              <img src="/assets/img/message.svg" alt="message" />
              <span className="red-dot"></span>
            </div>
            <div onClick={showNotificationModal}>
              <img src="/assets/img/notification.svg" alt="notification" />
              <span className="red-dot"></span>
            </div>
            <div className="flex flex-row gap-x-6 items-center">
              <div>
                <img src="/assets/img/bluejestic/user-avtar.png" />
              </div>
              <div>
                <Dropdown overlay={menu} trigger={['click']} overlayClassName="user-profile-dropdown-menu">
                  <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                    {/* {user.username} */}
                    <img src="/assets/img/bluejestic/down-arrow.svg" alt="down arrow" />
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <ul className="flex flex-row gap-x-8 items-center w-100 col-span-full pt-8">
            <li>
              <a href="#" className="text-white text-2xl">
                Fashion
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-2xl">
                Electronic
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-2xl">
                Music
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-2xl">
                Kids
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-2xl">
                Books
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-2xl">
                Home & Garden
              </a>
            </li>
            <li>
              <a href="#" className="text-white text-2xl">
                Art
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
