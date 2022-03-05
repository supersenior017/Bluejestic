import { Tabs } from 'antd';
import Feed from './StoreInfo/Feed/Feed';
import Store from './StoreInfo/Store/Store';
import About from './StoreInfo/About/About';
import Photos from './StoreInfo/Photos/Photos';
import Followers from './StoreInfo/Followers/Followers';

const { TabPane } = Tabs;

const StoreInfo = () => {
    return (
        <div>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Store" key="1">
                    <Store />
                </TabPane>
                <TabPane tab="Feed" key="2">
                    <Feed />
                </TabPane>
                <TabPane tab="About" key="3">
                    <About />
                </TabPane>
                <TabPane tab="Followers" key="4">
                    <Followers />
                </TabPane>
                <TabPane tab="Photos/Videos" key="5">
                    <Photos />
                </TabPane>
            </Tabs>
        </div>
    )
}

export default StoreInfo
