import React,{useState} from 'react';
import { Checkbox, Radio, Switch } from 'antd';

const NotificationTabPanel = () => {  

  function onChange(e: { target: { checked: any; }; }) {
    console.log(`checked = ${e.target.checked}`);
  }

  const [commentsValue, setCommentsValue] = useState(3);
  const onChangeRadioComments = e => {
    console.log('radio checked', e.target.value);
    setCommentsValue(e.target.value);
  };

  const [remindersValue, setRemindersValue] = useState(3);
  const onChangeRadioReminders = e => {
    console.log('radio checked', e.target.value);
    setRemindersValue(e.target.value);
  };

  const [moreActiveValue, setMoreActiveValue] = useState(2);
  const onChangeRadioMoreActive = e => {
    console.log('radio checked', e.target.value);
    setMoreActiveValue(e.target.value);
  };

  
  function onChangeSwitch(checked: any) {
    console.log(`switch to ${checked}`);
  }

  return (
    <div style={{backgroundColor:'#ECEEF4'}}>
      <div className="px-32 py-16 mb-12 -mt-8 rounded-2xl bg-white">
        <div className="border-b pb-8 -mx-32 px-32 grid grid-flow grid-cols-2 gap-60 ...">    
          <div>
            <p className="text-gray-700 font-medium text-sm">Notification from us</p>
            <p className="text-gray-400 font-medium text-xs">Receive the latest news, updates and policy changes from Bluejestic</p>
          </div>
          <div className='mt-24'>
            <div className='mb-3'>
              <div className='flex justify-start'>
                <div className="w-10"><Checkbox checked onChange={onChange}></Checkbox></div>
                <p className="text-gray-700 font-medium text-sm">News and updates</p>              
              </div>
              <div className='flex justify-start'>
                <div className="w-10 unvisible"/>
                <p className="text-gray-400 font-medium text-xs">News regarding new products and policy updates</p>
              </div>
            </div>
            <div className='mb-3'>
              <div className='flex justify-start'>
                <div className="w-10"><Checkbox checked onChange={onChange}></Checkbox></div>
                <p className="text-gray-700 font-medium text-sm">Tips and tutorials</p>              
              </div>
              <div className='flex justify-start'>
                <div className="w-10 unvisible"/>
                <p className="text-gray-400 font-medium text-xs">Tips on getting more out of Bluejestic Marketplace</p>
              </div>
            </div>
            <div className='mb-3'>
              <div className='flex justify-start'>
                <div className="w-10"><Checkbox onChange={onChange}></Checkbox></div>
                <p className="text-gray-700 font-medium text-sm">User research</p>              
              </div>
              <div className='flex justify-start'>
                <div className="w-10 unvisible"/>
                <p className="text-gray-400 font-medium text-xs">Get involved in our product research program or participage in paid product user research</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-b pt-12 pb-8 -mx-32 px-32 grid grid-flow grid-cols-2 gap-60 ...">    
          <div>
            <p className="text-gray-700 font-medium text-sm">Comments</p>
            <p className="text-gray-400 font-medium text-xs">These are notifications for comments on your posts and replies to your comments</p>
          </div>
          <div className='mt-24'>
            <Radio.Group onChange={onChangeRadioComments} value={commentsValue}>
              <div className='mb-3'>
                <div className='flex justify-start'>
                  <Radio value={1}><p className="text-gray-700 font-medium text-sm">Do not nodify me</p></Radio >                
                </div>
              </div>
              <div className='mb-3'>
                <div className='flex justify-start'>
                  <Radio value={2}><p className="text-gray-700 font-medium text-sm">Mentions only</p></Radio >
                </div>
                <div className='flex justify-start'>
                  <div className="w-10 unvisible"/>
                  <p className="text-gray-400 font-medium text-xs">Only notify me if my store is mentioned in a comment</p>
                </div>
              </div>
              <div className='mb-3'>
                <div className='flex justify-start'>
                  <Radio value={3}><p className="text-gray-700 font-medium text-sm">All comments</p></Radio >                
                </div>
                <div className='flex justify-start'>
                  <div className="w-10 unvisible"/>
                  <p className="text-gray-400 font-medium text-xs">Notify me for all comments on my posts</p>
                </div>
              </div>
            </Radio.Group>
          </div>
        </div>
        
        <div className="border-b pt-12 pb-8 -mx-32 px-32 grid grid-flow grid-cols-2 gap-60 ...">    
          <div>
            <p className="text-gray-700 font-medium text-sm">Reminders</p>
            <p className="text-gray-400 font-medium text-xs">These are notifications to remind you of updates you might have missed</p>
          </div>
          <div className='mt-24'>
            <Radio.Group onChange={onChangeRadioReminders} value={remindersValue}>
              <div className='mb-3'>
                <div className='flex justify-start'>
                  <Radio value={1}><p className="text-gray-700 font-medium text-sm">Do not nodify me</p></Radio >                
                </div>
              </div>
              <div className='mb-3'>
                <div className='flex justify-start'>
                  <Radio value={2}><p className="text-gray-700 font-medium text-sm">Important reminders only</p></Radio >
                </div>
                <div className='flex justify-start'>
                  <div className="w-10 unvisible"/>
                  <p className="text-gray-400 font-medium text-xs">Only notify me if  the reminder is tagged as important</p>
                </div>
              </div>
              <div className='mb-3'>
                <div className='flex justify-start'>
                  <Radio value={3} checked><p className="text-gray-700 font-medium text-sm">All comments</p></Radio >                
                </div>
                <div className='flex justify-start'>
                  <div className="w-10 unvisible"/>
                  <p className="text-gray-400 font-medium text-xs">Notify me for all reminders</p>
                </div>
              </div>
            </Radio.Group>
          </div>
        </div>
        
        <div className="border-b pt-12 pb-8 -mx-32 px-32 grid grid-flow grid-cols-2 gap-60 ...">    
          <div>
            <p className="text-gray-700 font-medium text-sm">More activity about you</p>
            <p className="text-gray-400 font-medium text-xs">These are notifications for posts on your profile, product likes,  and other reactions to your post and more</p>
          </div>
          <div className='mt-24'>
            <Radio.Group onChange={onChangeRadioMoreActive} value={moreActiveValue}>
              <div className='mb-3'>
                <div className='flex justify-start'>
                  <Radio value={1}><p className="text-gray-700 font-medium text-sm">Do not nodify me</p></Radio >                
                </div>
              </div>
              <div className='mb-3'>
                <div className='flex justify-start'>
                  <Radio value={2} checked><p className="text-gray-700 font-medium text-sm">All reminders</p></Radio >                
                </div>
                <div className='flex justify-start'>
                  <div className="w-10 unvisible"/>
                  <p className="text-gray-400 font-medium text-xs">Notify me for all other activitiy</p>
                </div>
              </div>
            </Radio.Group>
          </div>
        </div>
        
        <div className="border-b pt-12 pb-8 -mx-32 px-32 grid grid-flow grid-cols-2 gap-60 items-center">    
          <div>
            <p className="text-gray-700 font-medium text-sm">Follow</p>
            <p className="text-gray-400 font-medium text-xs">Notify when someone follows me</p>
          </div>
          <div className='flex justify-end'><Switch onChange={onChangeSwitch}/></div>
        </div>
        
        <div className="border-b pt-12 pb-8 -mx-32 px-32 grid grid-flow grid-cols-2 gap-60 items-center">    
          <div>
            <p className="text-gray-700 font-medium text-sm">Like & Share</p>
            <p className="text-gray-400 font-medium text-xs">Notify when someone likes or shares my post</p>
          </div>
          <div className='flex justify-end'><Switch onChange={onChangeSwitch}/></div>
        </div>
        
        <div className="border-b pt-12 pb-8 -mx-32 px-32 grid grid-flow grid-cols-2 gap-60 items-center">    
          <div>
            <p className="text-gray-700 font-medium text-sm">Missed Notifications</p>
            <p className="text-gray-400 font-medium text-xs">Notify you about recent activity on your profile </p>
          </div>
          <div className='flex justify-end'><Switch checked onChange={onChangeSwitch}/></div>
        </div>
        
        <div className="border-b pt-12 pb-8 -mx-32 px-32 grid grid-flow grid-cols-2 gap-60 items-center">    
          <div>
            <p className="text-gray-700 font-medium text-sm">Messaging</p>
            <p className="text-gray-400 font-medium text-xs">Notify when someone message you </p>
          </div>
          <div className='flex justify-end'><Switch onChange={onChangeSwitch}/></div>
        </div>
        
        <div className="border-b pt-12 pb-8 -mx-32 px-32 grid grid-flow grid-cols-2 gap-60 items-center">    
          <div>
            <p className="text-gray-700 font-medium text-sm">Trends</p>
            <p className="text-gray-400 font-medium text-xs">Notify with daily follower’s trends</p>
          </div>
          <div className='flex justify-end'><Switch onChange={onChangeSwitch}/></div>
        </div>
        
        <div className="border-b pt-12 pb-8 -mx-32 px-32 grid grid-flow grid-cols-2 gap-60 items-center">    
          <div>
            <p className="text-gray-700 font-medium text-sm">Price change</p>
            <p className="text-gray-400 font-medium text-xs">Notify when price change on products I'm following </p>
          </div>
          <div className='flex justify-end'><Switch onChange={onChangeSwitch}/></div>
        </div>

        <div className="flex justify-end items-center mt-16 mr-80">
          <button className="bg-gray-200 rounded-xl py-2 px-8 text-xs text-white bg-indigo-500 hover:bg-indigo-700">Save</button>
        </div>
      </div>
    </div>
  )
}

export default NotificationTabPanel;