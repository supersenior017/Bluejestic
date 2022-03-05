import React, { useState } from 'react'
import Link from 'next/link'

const NavMenu = ({index}) => {
  const icon_color=["#888888","#888888","#888888","#888888","#888888","#888888"];
  icon_color[index-1]="#FFFFFF";
  
  return (
    <div className="left-sidebar-navigation-wrapper">
      <div className="left-sidebar-title">ACCOUNT DETAILS</div>      
      <ul>
        <li className={(index==1)?"link-overview active-item":"link-overview"}   >
          <Link href="/summary/overview">
            <a >
              <span className="nav-icon">
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.24481 13.7815L8.23795 9.89137L11.6521 12.5733L14.5812 8.79297" stroke={icon_color[0]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="17.9954" cy="3.20052" r="1.9222" stroke={icon_color[0]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.9245 2.12012H5.65673C2.64529 2.12012 0.778015 4.25284 0.778015 7.26428V15.3467C0.778015 18.3581 2.60868 20.4817 5.65673 20.4817H14.2609C17.2723 20.4817 19.1396 18.3581 19.1396 15.3467V8.30776" stroke={icon_color[0]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="nav-text">Overview</span>
            </a>
          </Link>
        </li>
        <li className={(index==2)?"link-orders active-item":"link-orders"} >
          <Link href="/summary/orders">
            <a >
              <span className="nav-icon">
                <svg width="21" height="22" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path  fillRule="evenodd" clipRule="evenodd" d="M14.2126 20.222H5.86477C2.79841 20.222 0.446004 19.1144 1.1142 14.6567L1.89223 8.61555C2.30413 6.3913 3.72289 5.54004 4.96774 5.54004H15.1462C16.4094 5.54004 17.7458 6.45537 18.2217 8.61555L18.9998 14.6567C19.5673 18.611 17.279 20.222 14.2126 20.222Z" stroke={icon_color[1]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path  d="M14.3499 5.32041C14.3499 2.93433 12.4156 1.00004 10.0295 1.00004V1.00004C8.88053 0.99517 7.77692 1.4482 6.96273 2.25895C6.14854 3.06971 5.69085 4.17139 5.69086 5.32041H5.69086" stroke={icon_color[1]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path  d="M12.9952 9.82388H12.9494" stroke={icon_color[1]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path  d="M7.16457 9.82388H7.1188" stroke={icon_color[1]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="nav-text">Orders</span>
            </a>
          </Link>
        </li>
        <li className={(index==3)?"link-giftcard active-item":"link-giftcard"}            >
          <Link href="/summary/giftcard">
            <a >
              <span className="nav-icon">
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 9.87019L17.26 8.28019C17.5 8.07019 17.73 7.80019 17.9 7.50019C18.73 6.07019 18.24 4.23019 16.8 3.40019C15.94 2.90019 14.93 2.90019 14.08 3.26019L14.09 3.25019L13.21 3.64019L13.1 2.68019L13.09 2.69019C13 1.78019 12.47 0.900194 11.61 0.400194C10.9182 0.00493285 10.0984 -0.101248 9.32872 0.104741C8.55907 0.31073 7.90187 0.81223 7.5 1.50019C7.33 1.80019 7.22 2.13019 7.16 2.45019L4.41 0.870194C3.45 0.320194 2.23 0.640194 1.68 1.60019L0.18 4.20019C0.113839 4.31349 0.0709071 4.43884 0.05371 4.56891C0.0365129 4.69898 0.045395 4.83117 0.079838 4.95777C0.114281 5.08438 0.173595 5.20285 0.254318 5.30628C0.335042 5.40971 0.435558 5.49603 0.55 5.56019L2.28 6.56019L6.5 9.00019H0V19.0002C0 19.5306 0.210714 20.0393 0.585786 20.4144C0.960859 20.7895 1.46957 21.0002 2 21.0002H18C19.11 21.0002 20 20.1102 20 19.0002V13.8702L20.73 12.6002C21.28 11.6402 20.96 10.4202 20 9.87019ZM14.44 5.50019C14.71 5.00019 15.33 4.86019 15.8 5.13019C16.28 5.41019 16.45 6.00019 16.17 6.50019C15.89 7.00019 15.28 7.14019 14.8 6.87019C14.33 6.59019 14.16 6.00019 14.44 5.50019ZM12.07 7.60019L19 11.6002L18 13.3302L11.07 9.33019L12.07 7.60019ZM9 19.0002H2V11.0002H9V19.0002ZM9.34 8.33019L2.41 4.33019L3.41 2.60019L10.34 6.60019L9.34 8.33019ZM9.61 3.87019C9.13 3.59019 8.97 3.00019 9.24 2.50019C9.5 2.00019 10.13 1.86019 10.61 2.13019C11.09 2.41019 11.25 3.00019 10.97 3.50019C10.7 4.00019 10.09 4.14019 9.61 3.87019ZM11 19.0002V11.6002L18 15.6402V19.0002H11Z"  fill={icon_color[2]} />
                </svg>
              </span>
              <span className="nav-text">Gift Card</span>
            </a>
          </Link>
        </li>
        <li className={(index==4)?"link-wallets active-item":"link-wallets"}       >
          <Link href="/summary/wallets">
            <a >
              <span className="nav-icon">
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 9V5H3C2.46957 5 1.96086 4.78929 1.58579 4.41421C1.21071 4.03914 1 3.53043 1 3C1 1.9 1.9 1 3 1H15V5" stroke={icon_color[3]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M1 3V15C1 16.1 1.9 17 3 17H17V13" stroke={icon_color[3]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 9C14.4696 9 13.9609 9.21071 13.5858 9.58579C13.2107 9.96086 13 10.4696 13 11C13 12.1 13.9 13 15 13H19V9H15Z" stroke={icon_color[3]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="nav-text">Wallets</span>
            </a>
          </Link>
        </li>
        <li className={(index==5)?"link-help active-item":"link-help"}       >
          <Link href="/summary/help">
            <a >
              <span className="nav-icon">
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g >
                    <path d="M12.7162 14.2236H5.49622" stroke={icon_color[4]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12.7162 10.0371H5.49622" stroke={icon_color[4]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.25134 5.86035H5.49634" stroke={icon_color[4]} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path fillRule="evenodd" stroke={icon_color[4]} clipRule="evenodd" d="M12.9086 0.75C12.9086 0.75 5.23161 0.754 5.21961 0.754C2.45961 0.771 0.75061 2.587 0.75061 5.357V14.553C0.75061 17.337 2.47261 19.16 5.25661 19.16C5.25661 19.16 12.9326 19.157 12.9456 19.157C15.7056 19.14 17.4156 17.323 17.4156 14.553V5.357C17.4156 2.573 15.6926 0.75 12.9086 0.75Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                </svg>
              </span>
              <span className="nav-text">Help</span>
            </a>
          </Link>
        </li>
        <li className={(index==6)?"link-profile active-item":"link-profile"}       >
          <Link href="/summary/profile">
          <a >
              <span className="nav-icon">
                <svg width="21" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g >
                    <path stroke={icon_color[5]} fillRule="evenodd" clipRule="evenodd" d="M18.8067 6.62386L18.1842 5.54377C17.6577 4.62985 16.4907 4.31456 15.5755 4.83896V4.83896C15.1399 5.09559 14.6201 5.1684 14.1307 5.04133C13.6413 4.91427 13.2226 4.59776 12.9668 4.16162C12.8023 3.88439 12.7139 3.56864 12.7105 3.24628V3.24628C12.7254 2.72947 12.5304 2.22865 12.17 1.85791C11.8096 1.48718 11.3145 1.27811 10.7975 1.27832H9.5435C9.03697 1.27831 8.55131 1.48016 8.194 1.83919C7.83669 2.19822 7.63717 2.68484 7.63961 3.19136V3.19136C7.6246 4.23717 6.77248 5.07706 5.72657 5.07695C5.40421 5.0736 5.08846 4.98519 4.81123 4.82065V4.82065C3.89606 4.29626 2.72911 4.61154 2.20254 5.52546L1.53435 6.62386C1.00841 7.53664 1.3194 8.70285 2.23 9.23255V9.23255C2.8219 9.57428 3.18653 10.2058 3.18653 10.8893C3.18653 11.5728 2.8219 12.2043 2.23 12.5461V12.5461C1.32056 13.0722 1.00923 14.2356 1.53435 15.1456V15.1456L2.16593 16.2348C2.41265 16.68 2.8266 17.0085 3.31619 17.1477C3.80578 17.2868 4.33064 17.2251 4.77462 16.9763V16.9763C5.21108 16.7216 5.73119 16.6518 6.21934 16.7824C6.70749 16.9131 7.12324 17.2333 7.37416 17.6719C7.5387 17.9491 7.62711 18.2649 7.63046 18.5872V18.5872C7.63046 19.6438 8.48696 20.5003 9.5435 20.5003H10.7975C11.8505 20.5003 12.7055 19.6494 12.7105 18.5964V18.5964C12.7081 18.0883 12.9089 17.6003 13.2682 17.241C13.6275 16.8817 14.1155 16.6809 14.6236 16.6834C14.9452 16.692 15.2596 16.78 15.5389 16.9396V16.9396C16.4517 17.4656 17.6179 17.1546 18.1476 16.244V16.244L18.8067 15.1456C19.0618 14.7077 19.1318 14.1863 19.0012 13.6966C18.8706 13.207 18.5502 12.7896 18.111 12.5369V12.5369C17.6718 12.2842 17.3514 11.8668 17.2208 11.3772C17.0902 10.8875 17.1603 10.3661 17.4154 9.92821C17.5812 9.63858 17.8214 9.39844 18.111 9.23255V9.23255C19.0161 8.70314 19.3264 7.54374 18.8067 6.63301V6.63301V6.62386Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle stroke={icon_color[5]} cx="10.1751" cy="10.8891" r="2.63616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                </svg>
              </span>
              <span className="nav-text">Profile</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavMenu
