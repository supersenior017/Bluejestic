import React, { useEffect, useState } from 'react';
import { Button, Menu, Dropdown, Input } from 'antd';

const ChatBox = (props) => {

    return (
        <div className="messaging-chat-box">
            <div className="messaging-chat-box-header">
                <div className="messaging-chat-box-header-left">
                    <div className="user-avtar">
                        <img src="https://images.unsplash.com/photo-1562003349-2483c92da7b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />                        
                    </div>
                    <div className="user-info">
                        <h4>Catherine Robinson</h4>
                        <p className="user-status">Online</p>
                    </div>
                </div>
                <div className="messaging-chat-box-header-right">
                    <div className="user-actions">
                        <div className="user-action">
                            <img src="/assets/img/messaging/search.svg" />
                        </div>
                        <div className="user-action">
                            <img src="/assets/img/messaging/call.svg" />
                        </div>
                        <div className="user-action">
                            <img src="/assets/img/messaging/video.svg" />
                        </div>
                        <div className="user-action">
                            <img src="/assets/img/messaging/more.svg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="messaging-chatting-wrapper">
                <div className="messaging-message">
                    <p>I have to give a presentation on global warming on Friday, and I am so nervous....</p>
                    <span>14:45</span>
                </div>
                <div className="messaging-message">
                    <p>I have to give a presentation on global warming on Friday, and I am so nervous....</p>
                    <span>14:45</span>
                </div>
                <div className="messaging-message alternate">
                    <p>I have to give a presentation on global warming on Friday, and I am so nervous....</p>
                    <span>14:45</span>
                </div>
                <div className="messaging-message alternate">
                    <p>I have to give a presentation on global warming on Friday, and I am so nervous....</p>
                    <span>14:45</span>
                </div>
                <div className="messaging-date"><span>Today</span></div>
                <div className="messaging-message">
                    <p>I have to give a presentation on global warming on Friday, and I am so nervous....</p>
                    <span>14:45</span>
                </div>
                <div className="messaging-message">
                    <p>I have to give a presentation on global warming on Friday, and I am so nervous....</p>
                    <span>14:45</span>
                </div>
                <div className="messaging-message alternate">
                    <p>I have to give a presentation on global warming on Friday, and I am so nervous....</p>
                    <span>14:45</span>
                </div>
                <div className="messaging-message alternate">
                    <p>I have to give a presentation on global warming on Friday, and I am so nervous....</p>
                    <span>14:45</span>
                </div>
            </div>
            <div className="messaging-chat-box-footer">
                <div className="type-message-wrapper">
                    <div className="smiley">
                        <img src="/assets/img/messaging/smiley.svg" />
                    </div>
                    <div className="type-message">
                        <Input placeholder="Type your message here" />
                    </div>
                    <div className="attachment">
                        <img src="/assets/img/messaging/attachment.svg" />
                    </div>
                </div>
                <div className="send-message">
                    <img src="/assets/img/messaging/send-message.svg" />
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
