import React from 'react';
import { Progress, Tabs, Alert  } from 'antd';
import BillingTabPanel from './BillingTabPanel';
import GeneralTabPanel from './GeneralTabPanel';
import BioTabPanel from './BioTabPanel';
import IntegrationTabPanel from './IntegrationTabPanel';
import NotificationTabPanel from './NotificationTabPanel';
import SecurityTabPanel from './SecurityTabPanel';

const { TabPane } = Tabs;

const ProfileCard = () => {
  return (
    <div className="all_card">
      <div className="card_header">
        <div className="flex ">
          <div className="header-title w-3/6">Your Profile is Imcomplete</div>          
          <div className="w-3/6 flex justify-end items-center">
            <div style={{width:'100%'}} ><Progress percent={70} status="active" showInfo={false} /></div>            
            <div className="progressNum">&nbsp;&nbsp;70%</div>                    
          </div>
        </div>
        <div className="header-description">Update your profile in order to take full advantage of our marketplace</div>
      </div>
      <div className="card_body">
          <div className="flex">
            <div className="w-2/6">
              <div className="text-3xl font-medium semibold mt-30">Vincent Zhang</div>
              <div className="mt-1 font-medium">Boston Ma</div>
              <div className="flex justify-between w-60 mt-12">
                <img src="../assets/img/summary/profile/facebook.png" width={25} height={25} className="rounded-3xl"/>
                <img src="../assets/img/summary/profile/twitter.png" width={25} height={25} className="rounded-3xl"/>
                <img src="../assets/img/summary/profile/instagram.png" width={25} height={25} className="rounded-3xl"/>
                <img src="../assets/img/summary/profile/linkedin.png" width={25} height={25} className="rounded-3xl"/>
              </div>
            </div>
            <div className="w-4/6 pl-20">
              <div className="w-full relative rounded-t-2xl" style={{height:'140px'}}>
                <img src="../assets/img/summary/profile/cover.png" className="rounded-t-2xl"  style={{height:'140px'}}/>
              </div>
              <div className="absolute w-32 h-32 -ml-16 -mt-44">
                <img src="../assets/img/summary/user-avtar.png" />
              </div>
            </div>
          </div>
          <div className="mt-4 w-98">
            <div className=" flex justify-start w-98">
              <div className="rounded-2xl w-44 h-14 mr-4 bg-purple-400"></div>
              <div className="rounded-2xl w-44 h-14 mr-4 bg-yellow-600"></div>
              <div className="rounded-2xl w-44 h-14 mr-4 bg-indigo-200"></div>
            </div>
          </div>
      </div>
      <div className="w-full border-t border-gray-300 profile-tab">
        <Tabs defaultActiveKey="3" centered >
          <TabPane tab="General" key="1" >
            <GeneralTabPanel/>
          </TabPane>
          <TabPane tab="Bio" key="2" >
            <BioTabPanel/>
          </TabPane>
          <TabPane tab="Billing" key="3" >
            <BillingTabPanel/>
          </TabPane>
          <TabPane tab="Notification" key="4" >
            <NotificationTabPanel/>
          </TabPane>
          <TabPane tab="Integration" key="5" >
            <IntegrationTabPanel/>
          </TabPane>
          <TabPane tab="Security" key="6" >
            <SecurityTabPanel/>
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default ProfileCard;
