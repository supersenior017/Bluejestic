import React from 'react';
import { Tabs, Row, Col } from 'antd';
import GroupSingle from './groupSingle';

const { TabPane } = Tabs;

const AllGroups = (props) => {

    return (
        <div className="group-all">
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="All Groups" key="1">
                    <Row gutter={30}>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                groupname="Fashion"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1625669296631-7063fabbe165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=750&q=80"
                                groupname="Electronics"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1625602006137-f50c8e2e72b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                groupname="Home Decor"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                    </Row>
                    <Row gutter={30}>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                groupname="Fashion"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1625669296631-7063fabbe165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=750&q=80"
                                groupname="Electronics"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1625602006137-f50c8e2e72b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                groupname="Home Decor"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                    </Row>
                    <Row gutter={30}>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                groupname="Fashion"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1625669296631-7063fabbe165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=750&q=80"
                                groupname="Electronics"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1625602006137-f50c8e2e72b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                groupname="Home Decor"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Recently Added" key="2">
                <Row gutter={30}>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                groupname="Fashion"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1625669296631-7063fabbe165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=750&q=80"
                                groupname="Electronics"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1625602006137-f50c8e2e72b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                groupname="Home Decor"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                    </Row>
                    <Row gutter={30}>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                groupname="Fashion"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1625669296631-7063fabbe165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=750&q=80"
                                groupname="Electronics"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1625602006137-f50c8e2e72b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                groupname="Home Decor"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                    </Row>
                    <Row gutter={30}>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                groupname="Fashion"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1625669296631-7063fabbe165?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&h=750&q=80"
                                groupname="Electronics"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                        <Col className="gutter-row" span={8}>
                            <GroupSingle
                                groupimage="https://images.unsplash.com/photo-1625602006137-f50c8e2e72b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                groupname="Home Decor"
                                grouptype="Public"
                                groupmembers="10"
                            />
                        </Col>
                    </Row>
                </TabPane>
            </Tabs>
        </div>
    );
};


export default AllGroups;
