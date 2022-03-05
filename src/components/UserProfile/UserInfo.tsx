import { Tabs } from 'antd'
import About from './UserInfo/About/About'
import Followers from './UserInfo/Followers/Followers'
import Photos from './UserInfo/Photos/Photos'

const { TabPane } = Tabs

const UserInfo = () => {
  return (
    <div className="user-info-wrapper">
      <Tabs defaultActiveKey="2" className="user-info-tabs">
        <TabPane tab="Feed" key="1"></TabPane>
        <TabPane tab="About" key="2">
          <About />
        </TabPane>
        <TabPane tab="Followers" key="3">
          <Followers />
        </TabPane>
        <TabPane tab="Friends" key="4"></TabPane>
        <TabPane tab="Groups" key="5"></TabPane>
        <TabPane tab="Photos/Videos" key="6">
          <Photos />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default UserInfo
