import React, { useEffect, useState } from 'react';
import { Button, Menu, Dropdown, Input, Modal, Radio, Space, Checkbox  } from 'antd';
import User from './user';
import NewUser from './new-user';
import NewGroup from './new-group';

const { TextArea } = Input;

const OnlineUsers = (props) => {

    const [isNewChatModalVisible, setIsNewChatModalVisible] = useState(false);
    const [isInviteModalVisible, setIsInviteModalVisible] = useState(false);
    const [isGroupModalVisible, setIsGroupModalVisible] = useState(false);

    const [groupType, setGroupType] = useState(1);

    const showNewChatModal = () => {
        setIsNewChatModalVisible(true);
    };

    const showInviteModal = () => {
        setIsInviteModalVisible(true);
    };

    const showGroupModal = () => {
        setIsGroupModalVisible(true);
    };

    const handleCancel = () => {
        setIsNewChatModalVisible(false);
        setIsInviteModalVisible(false);
        setIsGroupModalVisible(false);
    };

    const onGroupTypeChange = (e) => {
        console.log('radio checked', e.target.value);
        setGroupType(e.target.value)
      };

    const menu = (
        <Menu>
            <Menu.Item>
                <a rel="noopener noreferrer" href="#" onClick={showNewChatModal}>
                    New Chat
                </a>
            </Menu.Item>
            <Menu.Item>
                <a rel="noopener noreferrer" href="#" onClick={showGroupModal}>
                    Create Group
                </a>
            </Menu.Item>
            <Menu.Item>
                <a rel="noopener noreferrer" href="#" onClick={showInviteModal}>
                    Invite Others
                </a>
            </Menu.Item>
        </Menu>
    );


    return (
        <div className="messaging-online-users">
            <div className="messaging-online-users-header">
                <div className="title">
                    <h4>Chats</h4>
                    <span className="notify">8</span>
                </div>
                <Dropdown trigger={['click']} overlay={menu} overlayClassName="new-chat-dropdown" placement="bottomRight">
                    <Button>+ New Chat</Button>
                </Dropdown>
            </div>
            <div className="messaging-search">
                <Input placeholder="Search" />
            </div>
            <div className="messing-online-users-list">
                <User
                    userimage="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                    username="Catherine Robinson"
                    userstatus="Online"
                    usermessage="Contrary to popular belief...."
                    usertime="5mini ago"
                    userpendingmessage="8"
                />
                <User
                    userimage="https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                    username="Christina Torres"
                    userstatus="Last active  1hr ago"
                    usermessage="Contrary to popular belief...."
                    usertime="5mini ago"
                    userpendingmessage="8"
                />
                <User
                    userimage="https://images.unsplash.com/photo-1562003349-2483c92da7b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    username="Catherine Robinson"
                    userstatus="Online"
                    usermessage="Contrary to popular belief...."
                    usertime="1hr ago"
                    userpendingmessage="2"
                />
                <User
                    userimage="data:image/jpeg;base64,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"
                    username="Catherine Robinson"
                    userstatus="Online"
                    usermessage="Contrary to popular belief...."
                    usertime="5mini ago"
                    userpendingmessage="8"
                />
                <User
                    userimage="https://static.billboard.com/files/2020/03/Joe-Diffie-2020-cr-Crystal-K-Martel-billboard-1548-1585338296-compressed.jpg"
                    username="Catherine Robinson"
                    userstatus="Online"
                    usermessage="Contrary to popular belief...."
                    usertime="5mini ago"
                    userpendingmessage="8"
                />
                <User
                    userimage="https://i.pinimg.com/originals/3c/10/db/3c10dbbcc4925031bb10d8cccf650c37.jpg"
                    username="Catherine Robinson"
                    userstatus="Online"
                    usermessage="Contrary to popular belief...."
                    usertime="5mini ago"
                    userpendingmessage="8"
                />
                <User
                    userimage="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                    username="Catherine Robinson"
                    userstatus="Online"
                    usermessage="Contrary to popular belief...."
                    usertime="5mini ago"
                    userpendingmessage="8"
                />
                <User
                    userimage="https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                    username="Christina Torres"
                    userstatus="Last active  1hr ago"
                    usermessage="Contrary to popular belief...."
                    usertime="5mini ago"
                    userpendingmessage="8"
                />
                <User
                    userimage="https://images.unsplash.com/photo-1562003349-2483c92da7b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    username="Catherine Robinson"
                    userstatus="Online"
                    usermessage="Contrary to popular belief...."
                    usertime="1hr ago"
                    userpendingmessage="2"
                />
                <User
                    userimage="data:image/jpeg;base64,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"
                    username="Catherine Robinson"
                    userstatus="Online"
                    usermessage="Contrary to popular belief...."
                    usertime="5mini ago"
                    userpendingmessage="8"
                />
                <User
                    userimage="https://static.billboard.com/files/2020/03/Joe-Diffie-2020-cr-Crystal-K-Martel-billboard-1548-1585338296-compressed.jpg"
                    username="Catherine Robinson"
                    userstatus="Online"
                    usermessage="Contrary to popular belief...."
                    usertime="5mini ago"
                    userpendingmessage="8"
                />
                <User
                    userimage="https://i.pinimg.com/originals/3c/10/db/3c10dbbcc4925031bb10d8cccf650c37.jpg"
                    username="Catherine Robinson"
                    userstatus="Online"
                    usermessage="Contrary to popular belief...."
                    usertime="5mini ago"
                    userpendingmessage="8"
                />
            </div>

            <Modal
                title="New Chat"
                visible={isNewChatModalVisible}
                onCancel={handleCancel}
                footer={null}
                width={425}
                wrapClassName="new-chat-modal"
                closeIcon={<img src="/assets/img/feed/ic_Close.svg" />}
            >
                <div className="new-chat-modal-wrapper">
                    <div className="search-wrapper">
                        <Input placeholder="Search" />
                        <img src="/assets/img/messaging/search-gray.svg" />
                    </div>
                    <div className="users-list">
                        <NewUser
                            userimage="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                            username="Catherine Robinson"
                            userstatus="Online"
                        />
                        <NewUser
                            userimage="https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            username="Christina Torres"
                            userstatus="Last active  1hr ago"
                        />
                        <NewUser
                            userimage="https://images.unsplash.com/photo-1562003349-2483c92da7b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            username="Catherine Robinson"
                            userstatus="Online"
                        />
                        <NewUser
                            userimage="data:image/jpeg;base64,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"
                            username="Catherine Robinson"
                            userstatus="Online"
                        />
                        <NewUser
                            userimage="https://static.billboard.com/files/2020/03/Joe-Diffie-2020-cr-Crystal-K-Martel-billboard-1548-1585338296-compressed.jpg"
                            username="Catherine Robinson"
                            userstatus="Online"
                        />
                        <NewUser
                            userimage="https://i.pinimg.com/originals/3c/10/db/3c10dbbcc4925031bb10d8cccf650c37.jpg"
                            username="Catherine Robinson"
                            userstatus="Online"
                        />
                        <NewUser
                            userimage="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                            username="Catherine Robinson"
                            userstatus="Online"
                        />
                        <NewUser
                            userimage="https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            username="Christina Torres"
                            userstatus="Last active  1hr ago"
                        />
                        <NewUser
                            userimage="https://images.unsplash.com/photo-1562003349-2483c92da7b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            username="Catherine Robinson"
                            userstatus="Online"
                        />
                        <NewUser
                            userimage="data:image/jpeg;base64,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"
                            username="Catherine Robinson"
                            userstatus="Online"
                        />
                        <NewUser
                            userimage="https://static.billboard.com/files/2020/03/Joe-Diffie-2020-cr-Crystal-K-Martel-billboard-1548-1585338296-compressed.jpg"
                            username="Catherine Robinson"
                            userstatus="Online"
                        />
                        <NewUser
                            userimage="https://i.pinimg.com/originals/3c/10/db/3c10dbbcc4925031bb10d8cccf650c37.jpg"
                            username="Catherine Robinson"
                            userstatus="Online"
                        />
                    </div>
                </div>
            </Modal>

            <Modal
                title="Invite Others"
                visible={isInviteModalVisible}
                onCancel={handleCancel}
                footer={null}
                width={425}
                wrapClassName="new-invite-modal"
                closeIcon={<img src="/assets/img/feed/ic_Close.svg" />}
            >
                <div className="new-invite-modal-wrapper">
                    <Input placeholder="Email Address" className="form-control" />
                    <TextArea rows={4} placeholder="Type your message here" />
                </div>
                <div className="messaging-footer">
                    <Button className="btn-border">Close</Button>
                    <Button className="btn-fill">Send Invitation</Button>
                </div>
            </Modal>

            <Modal
                title="Create New Group"
                visible={isGroupModalVisible}
                onCancel={handleCancel}
                footer={null}
                width={425}
                wrapClassName="new-group-modal"
                closeIcon={<img src="/assets/img/feed/ic_Close.svg" />}
            >
                <div className="new-group-modal-wrapper">
                    <Input placeholder="Group Name" className="form-control" />
                    <div className="new-group-info">
                        <div className="new-group-info-detail">
                            <label>Profile Picture</label>
                            <img src="/assets/img/messaging/profile-picture.svg" />
                        </div>
                        <div className="new-group-info-detail">
                            <label>Group Privacy</label>
                            <Radio.Group onChange={onGroupTypeChange} value={groupType}>
                                <Space direction="vertical">
                                    <Radio value={1}>Public Group</Radio>
                                    <Radio value={2}>Private Group</Radio>
                                </Space>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className="search-wrapper">
                        <Input placeholder="Search" />
                        <img src="/assets/img/messaging/search-gray.svg" />
                    </div>
                    <div className="users-list">
                        <NewGroup
                            userimage="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                            username="Catherine Robinson"
                            userstatus="Online"
                        />
                        <NewGroup
                            userimage="https://images.unsplash.com/photo-1590086783191-a0694c7d1e6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
                            username="Christina Torres"
                            userstatus="Last active  1hr ago"
                        />
                        <NewGroup
                            userimage="https://images.unsplash.com/photo-1562003349-2483c92da7b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                            username="Catherine Robinson"
                            userstatus="Online"
                        />
                        <NewGroup
                            userimage="data:image/jpeg;base64,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"
                            username="Catherine Robinson"
                            userstatus="Online"
                        />
                        <NewGroup
                            userimage="https://static.billboard.com/files/2020/03/Joe-Diffie-2020-cr-Crystal-K-Martel-billboard-1548-1585338296-compressed.jpg"
                            username="Catherine Robinson"
                            userstatus="Online"
                        />
                        <NewGroup
                            userimage="https://i.pinimg.com/originals/3c/10/db/3c10dbbcc4925031bb10d8cccf650c37.jpg"
                            username="Catherine Robinson"
                            userstatus="Online"
                        />
                        
                    </div>
                </div>
                <div className="messaging-footer">
                    <Button className="btn-border">Close</Button>
                    <Button className="btn-fill">Create Group</Button>
                </div>
            </Modal>
        </div>
    );
};




export default OnlineUsers;
