import React from 'react';
import { Tabs, Button, Menu, Dropdown } from 'antd';

const { TabPane } = Tabs;

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="#">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="#">2nd menu item</a>
      </Menu.Item>
    </Menu>
  );

const GroupSingle = ({ groupimage, groupname, grouptype, groupmembers }) => {

    return (
        <div className="group-single">
            <div className="group-single-cover">
                <img src={groupimage} />
            </div>
            <div className="group-single-info">
                <div className="group-single-name">
                    <h4><a href="#">{groupname}</a></h4>
                    <div className="action-dropdown">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <img src="/assets/img/groups/dots.svg" />
                        </a>
                    </Dropdown>
                    </div>
                </div>
                <div className="group-single-members">
                    <img src="/assets/img/groups/01.png" />
                    <img src="/assets/img/groups/02.png" />
                    <img src="/assets/img/groups/03.png" />
                    <img src="/assets/img/groups/04.png" />
                </div>
                <div className="group-single-type">
                    <p>{grouptype} Group / {groupmembers}k members</p>
                </div>
                <div className="group-single-action">
                    <Button>Join</Button>
                </div>
            </div>
        </div>
    );
};


export default GroupSingle;
