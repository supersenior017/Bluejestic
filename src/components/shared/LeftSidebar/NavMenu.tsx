import React, { useState } from 'react'
import Link from 'next/link'

const NavMenu = (props) => {
  const [isNotificationModalVisisble, setIsNotificationModalVisisble] = useState(false)
  const [isMessageModalVisisble, setIsMessageModalVisisble] = useState(false)

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

  return (
    <div className="left-sidebar-navigation-wrapper">
      <ul>
        <li className="link-feed">
          <Link href="/feed">
            <a>
              <span className="nav-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 12H7C9.20914 12 11 13.7909 11 16V18C11 20.2091 9.20914 22 7 22H6C3.79086 22 2 20.2091 2 18V16C2 13.7909 3.79086 12 6 12ZM6 14C4.89543 14 4 14.8954 4 16V18C4 19.1046 4.89543 20 6 20H7C8.10457 20 9 19.1046 9 18V16C9 14.8954 8.10457 14 7 14H6ZM5.5 2C7.433 2 9 3.567 9 5.5V6.5C9 8.433 7.433 10 5.5 10C3.567 10 2 8.433 2 6.5V5.5C2 3.567 3.567 2 5.5 2ZM5.5 4C4.67157 4 4 4.67157 4 5.5V6.5C4 7.32843 4.67157 8 5.5 8C6.32843 8 7 7.32843 7 6.5V5.5C7 4.67157 6.32843 4 5.5 4ZM17 11H18C20.2091 11 22 12.7909 22 15V18C22 20.2091 20.2091 22 18 22H17C14.7909 22 13 20.2091 13 18V15C13 12.7909 14.7909 11 17 11ZM17 13C15.8954 13 15 13.8954 15 15V18C15 19.1046 15.8954 20 17 20H18C19.1046 20 20 19.1046 20 18V15C20 13.8954 19.1046 13 18 13H17ZM14.5 2H18.5C20.433 2 22 3.567 22 5.5C22 7.433 20.433 9 18.5 9H14.5C12.567 9 11 7.433 11 5.5C11 3.567 12.567 2 14.5 2ZM14.5 4C13.6716 4 13 4.67157 13 5.5C13 6.32843 13.6716 7 14.5 7H18.5C19.3284 7 20 6.32843 20 5.5C20 4.67157 19.3284 4 18.5 4H14.5Z"
                    fill="#556EE6"
                  />
                </svg>
              </span>
              <span className="nav-text">Feed</span>
            </a>
          </Link>
        </li>
        <li className="link-stores">
          <Link href="/stores">
            <a>
              <span className="nav-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.1 10.3H18.7119C17.9814 10.3 17.3089 10.041 16.7941 9.61064C16.2794 10.041 15.6069 10.3 14.8764 10.3H13.9175C13.187 10.3 12.5145 10.041 11.9998 9.61064C11.485 10.041 10.8125 10.3 10.082 10.3H9.12314C8.39262 10.3 7.72016 10.041 7.20539 9.61064C6.69062 10.041 6.01816 10.3 5.28764 10.3H4.9V20H9V14C9 13.4477 9.44772 13 10 13H14.5C15.0523 13 15.5 13.4477 15.5 14V20H19.1V10.3ZM21.1 9.5819V20.1C21.1 21.1493 20.2493 22 19.2 22H4.8C3.75066 22 2.9 21.1493 2.9 20.1V9.58212C2.34798 9.0918 2 8.38994 2 7.60282C2 7.34632 2.03806 7.09127 2.11291 6.84536L3.15635 3.41758C3.41268 2.5755 4.18943 2 5.06966 2H18.9299C19.8101 2 20.5869 2.5755 20.8432 3.41758L21.8866 6.84536C22.1978 7.86756 21.8518 8.91213 21.1 9.5819ZM13.5 20V15H11V20H13.5ZM19.9733 7.42778L18.9299 4H5.06966L4.02623 7.42778C4.00877 7.48513 4 7.54393 4 7.60282C4 7.9732 4.34818 8.3 4.8082 8.3H5.28764C5.80817 8.3 6.20539 7.92717 6.20539 7.5C6.20539 6.16667 8.20539 6.16667 8.20539 7.5C8.20539 7.92717 8.60261 8.3 9.12314 8.3H10.082C10.6025 8.3 10.9998 7.92717 10.9998 7.5C10.9998 6.16667 12.9998 6.16667 12.9998 7.5C12.9998 7.92717 13.397 8.3 13.9175 8.3H14.8764C15.3969 8.3 15.7941 7.92717 15.7941 7.5C15.7941 6.16667 17.7941 6.16667 17.7941 7.5C17.7941 7.92717 18.1914 8.3 18.7119 8.3H19.1913C19.272 8.3 19.3521 8.28947 19.4291 8.26883C19.855 8.15461 20.0792 7.77574 19.9733 7.42778Z"
                    fill="#556EE6"
                  />
                </svg>
              </span>
              <span className="nav-text">Stores</span>
            </a>
          </Link>
        </li>
        <li className="link-friends">
          <Link href="/friends">
            <a>
              <span className="nav-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
                  <path
                    className="stroke"
                    d="M9.5 10C11.433 10 13 8.433 13 6.5C13 4.567 11.433 3 9.5 3C7.567 3 6 4.567 6 6.5C6 8.433 7.567 10 9.5 10Z"
                    stroke="#556EE6"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="stroke"
                    d="M16.304 3.5C17.3204 4.11245 18.0002 5.22685 18.0002 6.5C18.0002 7.77315 17.3204 8.88755 16.304 9.5"
                    stroke="#556EE6"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="stroke"
                    d="M2 20.4V21H17V20.4C17 18.1598 17 17.0397 16.5641 16.184C16.1806 15.4314 15.5686 14.8195 14.816 14.436C13.9603 14 12.8402 14 10.6 14H8.4C6.1598 14 5.0397 14 4.18404 14.436C3.43139 14.8195 2.81947 15.4314 2.43598 16.184C2 17.0397 2 18.1598 2 20.4Z"
                    stroke="#556EE6"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    className="stroke"
                    d="M22 21.0001V20.4001C22 18.1599 22 17.0398 21.564 16.1841C21.1805 15.4315 20.5686 14.8195 19.8159 14.436"
                    stroke="#556EE6"
                    strokeWidth="2.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="nav-text">Friends</span>
            </a>
          </Link>
        </li>
        <li className="link-groups">
          <a href="#">
            <span className="nav-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 7C10.3431 7 9 5.65685 9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4C15 5.65685 13.6569 7 12 7ZM12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C11.4477 3 11 3.44772 11 4C11 4.55228 11.4477 5 12 5ZM11 7H13C14.6569 7 16 8.34315 16 10V11C16 12.6569 14.6569 14 13 14H11C9.34315 14 8 12.6569 8 11V10C8 8.34315 9.34315 7 11 7ZM11 9C10.4477 9 10 9.44771 10 10V11C10 11.5523 10.4477 12 11 12H13C13.5523 12 14 11.5523 14 11V10C14 9.44771 13.5523 9 13 9H11ZM19 16C17.3431 16 16 14.6569 16 13C16 11.3431 17.3431 10 19 10C20.6569 10 22 11.3431 22 13C22 14.6569 20.6569 16 19 16ZM19 14C19.5523 14 20 13.5523 20 13C20 12.4477 19.5523 12 19 12C18.4477 12 18 12.4477 18 13C18 13.5523 18.4477 14 19 14ZM18 16H20C21.6569 16 23 17.3431 23 19V20C23 21.6569 21.6569 23 20 23H18C16.3431 23 15 21.6569 15 20V19C15 17.3431 16.3431 16 18 16ZM18 18C17.4477 18 17 18.4477 17 19V20C17 20.5523 17.4477 21 18 21H20C20.5523 21 21 20.5523 21 20V19C21 18.4477 20.5523 18 20 18H18ZM5 16C3.34315 16 2 14.6569 2 13C2 11.3431 3.34315 10 5 10C6.65685 10 8 11.3431 8 13C8 14.6569 6.65685 16 5 16ZM5 14C5.55228 14 6 13.5523 6 13C6 12.4477 5.55228 12 5 12C4.44772 12 4 12.4477 4 13C4 13.5523 4.44772 14 5 14ZM4 16H6C7.65685 16 9 17.3431 9 19V20C9 21.6569 7.65685 23 6 23H4C2.34315 23 1 21.6569 1 20V19C1 17.3431 2.34315 16 4 16ZM4 18C3.44772 18 3 18.4477 3 19V20C3 20.5523 3.44772 21 4 21H6C6.55228 21 7 20.5523 7 20V19C7 18.4477 6.55228 18 6 18H4Z"
                  fill="#556EE6"
                />
              </svg>
            </span>
            <span className="nav-text">Groups</span>
          </a>
        </li>
        <li className="link-favourite">
          <a href="#">
            <span className="nav-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
                <path
                  className="stroke"
                  d="M7.5 4C4.46244 4 2 6.46245 2 9.5C2 15 8.5 20 12 21.1631C15.5 20 22 15 22 9.5C22 6.46245 19.5375 4 16.5 4C14.6399 4 12.9954 4.92345 12 6.3369C11.0046 4.92345 9.36015 4 7.5 4Z"
                  stroke="#556EE6"
                  strokeWidth="2.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="nav-text">Favourites</span>
          </a>
        </li>
        {/* <li className="link-notification" onClick={showNotificationModal}>
                    <a href="#">
                        <span className="nav-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.8181 17.4546H20.7272V8.72728C20.7272 3.91528 16.8119 0 11.9999 0C7.18794 0 3.27266 3.91528 3.27266 8.72728V17.4546H2.18174C1.57846 17.4546 1.09082 17.9422 1.09082 18.5455C1.09082 19.1488 1.57846 19.6364 2.18174 19.6364H3.27266H7.6363C7.6363 22.0429 9.59338 24 11.9999 24C14.4065 24 16.3636 22.0429 16.3636 19.6364H20.7272H21.8181C22.4214 19.6364 22.9091 19.1487 22.9091 18.5454C22.9091 17.9422 22.4214 17.4546 21.8181 17.4546ZM11.9999 21.8182C10.7967 21.8182 9.81815 20.8396 9.81815 19.6364H14.1818C14.1817 20.8396 13.2032 21.8182 11.9999 21.8182ZM18.5454 17.4546H16.3636H7.6363H5.45451V8.72728C5.45451 5.11748 8.39015 2.18184 11.9999 2.18184C15.6097 2.18184 18.5454 5.11748 18.5454 8.72728V17.4546Z" fill="#556EE6" />
                            </svg>

                        </span>
                        <span className="nav-text">
                        <span>8</span> Notifications
                        </span>
                    </a>
                </li>
                <li className="link-messaging" onClick={showMessagingModal}>
                    <a href="#">
                        <span className="nav-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01" />
                                <path className="stroke" d="M16.501 18.9981H11.001V14.9981H18.001V10.998H22.001V18.9981H19.501L18.001 20.4981L16.501 18.9981Z" stroke="#556EE6" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path className="stroke" d="M2.00098 3H18.001V15H8.50098L6.50098 17L4.50098 15H2.00098V3Z" stroke="#556EE6" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path className="stroke" d="M6 10.998H9" stroke="#556EE6" strokeWidth="2.33333" strokeLinecap="round" />
                                <path className="stroke" d="M6 7.00195H12" stroke="#556EE6" strokeWidth="2.33333" strokeLinecap="round" />
                            </svg>

                        </span>
                        <span className="nav-text">
                            <span>8</span> Messaging
                        </span>
                    </a>
                </li> */}
      </ul>
    </div>
  )
}

export default NavMenu
