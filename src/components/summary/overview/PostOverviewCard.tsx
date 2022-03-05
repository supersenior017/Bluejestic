import React from 'react'
import PostOverviewItem from './PostOverviewItem';
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

const PostOverviewCard = () => {

  return (
    <div className="postoverview-wrapper">
      <div className="custom-card-header">
        <div className="bookmark-title-wrapper">
          <h2>Post Overview</h2>
        </div>
        <div className="selectView">     
          <Dropdown overlay={menu}>
              <Button>
                  Monthly <DownOutlined />
              </Button>
          </Dropdown>
        </div>
      </div>
      <div className="graph-items">
        <PostOverviewItem kind="Post" count="1254" rise={11}/>
        <PostOverviewItem kind="Like" count="8K" rise={97}/>
        <PostOverviewItem kind="Comments" count="1254" rise={-23}/>
        <PostOverviewItem kind="New Followers" count="2.1K" rise={11}/>
        <PostOverviewItem kind="Following" count="89" rise={14}/>        
      </div>
    </div>
  )
}
export default PostOverviewCard;