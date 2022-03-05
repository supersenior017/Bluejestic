import React from 'react'
import ActivitiesItem from './ActivitiesItem'
import { Menu, Dropdown, Button } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
      <Menu.Item key="1">
          Monthly
      </Menu.Item>
      <Menu.Item key="2">
          Weekly
      </Menu.Item>
  </Menu>
);

const ActivitiesCard = () => {

  return (
    <div className="activities-wrapper">
      <div className="custom-card-header">
        <div className="bookmark-title-wrapper">
          <h2>Activities</h2>
        </div>
        <div className="selectView">          
          <Dropdown overlay={menu}>
              <Button>
                  Monthly <DownOutlined />
              </Button>
          </Dropdown>
        </div>
      </div>
      <div className="user-items">
        <ActivitiesItem url="../assets/img/summary/categories/our-team/1.jpg" name="Jake Powell" status="Commented on your new profile status" timeago="3 hours ago"/>
        <ActivitiesItem url="../assets/img/summary/categories/our-team/2.jpg"  name="Fragrance Shop" status="adds new products " timeago="10 hours ago"/>
        <ActivitiesItem url="../assets/img/summary/categories/our-team/3.jpg"  name="Jason Goldberg" status="recommends a product to you" timeago="Yesterday"/>
        <ActivitiesItem url="../assets/img/summary/categories/our-team/4.jpg"  name="Dennis William" status="recommends a product to you" timeago="2 days ago"/>
        <ActivitiesItem url="../assets/img/summary/categories/our-team/5.jpg"  name="Sarah Johnson" status="is now following you" timeago="3 days ago"/>
        <ActivitiesItem url="../assets/img/summary/categories/our-team/6.jpg"  name="Pierre Lewis" status="posted on your feed" timeago="5 days ago"/>
      </div>
    </div>
  )
}
export default ActivitiesCard;