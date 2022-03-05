import React from 'react';
import { Tabs } from 'antd';
import Slider from 'react-slick';
import GroupSingle from './groupSingle';

const { TabPane } = Tabs;

const SuggestedGroups = (props) => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 750,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    return (
        <div className="group-suggested">
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Suggested Groups" key="1">
                    <Slider {...settings} className="owl-carousel">
                        <div className="item">
                            <GroupSingle 
                                groupimage="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                groupname="Fashion"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </div>
                        <div className="item">
                        <GroupSingle 
                                groupimage="https://images.unsplash.com/photo-1625669296631-7063fabbe165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=750&q=80"
                                groupname="Electronics"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </div>
                        <div className="item">
                        <GroupSingle 
                                groupimage="https://images.unsplash.com/photo-1625602006137-f50c8e2e72b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                groupname="Home Decor"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </div>
                        <div className="item">
                        <GroupSingle 
                                groupimage="https://images.unsplash.com/photo-1625641636704-cd1cafe83bda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                groupname="Furniture"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </div>
                    </Slider>
                </TabPane>
                <TabPane tab="Create Group" key="2">

                </TabPane>
                <TabPane tab="Search" key="3">

                </TabPane>
            </Tabs>
        </div>
    );
};


export default SuggestedGroups;
