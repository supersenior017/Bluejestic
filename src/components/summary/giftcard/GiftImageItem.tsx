import { useState } from 'react';
import { Modal, Button, Input, Menu, Dropdown } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import FriendItem from './FriendItem';

const menu = (
  <Menu>
      <Menu.Item key="1">1</Menu.Item>
      <Menu.Item key="2">2</Menu.Item>
      <Menu.Item key="3">3</Menu.Item>
      <Menu.Item key="4">4</Menu.Item>
      <Menu.Item key="5">5</Menu.Item>      
  </Menu>
);

const GiftImageItem = ({url, content}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSelFriendModalVisible, setIsSelFriendModalVisible] = useState(false);  
  const [SelectionOfFriend, setSelectionOfFriend] = useState("You select Abby as your recipient.");  
  const [btnNo, setButtonSel] = useState(1)
  const changeButton=(No:number)=>{
    setButtonSel(No);
  }
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showSelFriendModal = () => {
    setIsSelFriendModalVisible(true);
  };

  const selFriendModalOk = () => {
    setIsSelFriendModalVisible(false);
  };

  const selFriendModalCancel = () => {
    setIsSelFriendModalVisible(false);
  };
  return (<>
            <button style={{width:'100%', padding:'0 10px'}}  onClick={showModal}>
              <img src={url} className="rounded-t-xl" style={{width:'256px',height:'140px',}} />
              <div className="m-2 text-center">{content}</div>
            </button>
            <Modal visible={isModalVisible} onCancel={handleCancel} footer={null} closable={false} width={650} className='gift-page-modal'>
              <div className='flex justify-between items-center'>
                <div>
                  <div className='text-lg font-semibold'>Amount</div>
                  <div className='mt-4 w-full'>
                    <button style={{backgroundColor:(btnNo===1)?'#6366f1':'#e0e0e0',color:(btnNo===1)?'white':'black', width:'50px', height:'32px', marginRight:'20px', borderRadius:'1px'}} onClick={()=>changeButton(1)}>$25</button>
                    <button style={{backgroundColor:(btnNo===2)?'#6366f1':'#e0e0e0',color:(btnNo===2)?'white':'black', width:'50px', height:'32px', marginRight:'20px', borderRadius:'1px'}} onClick={()=>changeButton(2)}>$50</button>
                    <button style={{backgroundColor:(btnNo===3)?'#6366f1':'#e0e0e0',color:(btnNo===3)?'white':'black', width:'50px', height:'32px', marginRight:'20px', borderRadius:'1px'}} onClick={()=>changeButton(3)}>$75</button>
                    <button style={{backgroundColor:(btnNo===4)?'#6366f1':'#e0e0e0',color:(btnNo===4)?'white':'black', width:'50px', height:'32px', marginRight:'20px', borderRadius:'1px'}} onClick={()=>changeButton(4)}>$100</button>
                    <Input addonBefore="$" className='w-40 h-8' />
                  </div>
                  <div className='text-lg font-semibold mt-12'>Quantity</div>
                  <div className='mt-4 w-full'>       
                    <Dropdown overlay={menu}>
                        <Button>
                            1<DownOutlined />
                        </Button>
                    </Dropdown>
                  </div>
                </div>
                <div>
                  <div style={{width:'100%', padding:'0 10px'}}  onClick={showModal}>
                    <img src={url} className="rounded-t-xl" style={{width:'180px'}} />
                    <div className="m-2 text-center">{content}</div>
                  </div>
                </div>
              </div>
              <div className='text-lg font-semibold my-3'>To</div>
              <div>
                <input className='bg-gray-200 w-96 text-base rounded-xl px-4 py-2 mr-32'></input>
                <button className='text-indigo-500 font-semibold text-base rounded-xl py-2 px-8' style={{border:'blue solid 1px'}}
                  onClick={showSelFriendModal}
                >
                  Select your friend
                </button>
              </div>
              <div className='text-lg font-semibold my-3 '>Message</div>
              <div>
                <textarea rows={5} cols={69} className='bg-gray-200 text-base rounded-xl px-4 py-2 mr-32'></textarea>                
              </div>
              <div className='w-full flex justify-center'>
                <button className='text-base font-semibold text-white bg-indigo-500 hover:bg-indigo-700 rounded-xl py-3 px-16 my-3' onClick={handleOk}>Message</button>
              </div>
            </Modal>
            <Modal visible={isSelFriendModalVisible} onCancel={selFriendModalCancel}  closable={true} footer={false}  className='gift-page-modal'>
              <div style={{height:'70px', backgroundColor:'#ECEEF4', margin:'-24px -24px 0 -24px', fontSize:'20px', padding:'20px', borderStartEndRadius:'10px', borderStartStartRadius:'10px'}} className='font-semibold'>
                Your friend
              </div>
              <div className='pt-8'>
                <div className="relative col-span-6 ... "> 
                  <div className="absolute left-6 top-5">
                      <img src="../../assets/img/summary/bluejestic/search_icon.svg" alt="search" className="search-icon" />
                  </div>
                  <input type="text" placeholder="Search a name..." className="bg-gray-200 border-grey-300 rounded-2xl h-16 w-full py-3 px-16 mb-8" />
                  <div style={{height:'300px', overflowY:'scroll', marginRight:'-24px' }}>
                    <FriendItem url="../assets/img/summary/categories/our-team/1.jpg" name="Tomas" />
                    <FriendItem url="../assets/img/summary/categories/our-team/2.jpg" name="Abby"/>
                    <FriendItem url="../assets/img/summary/categories/our-team/3.jpg" name="Ebby"/>
                    <FriendItem url="../assets/img/summary/categories/our-team/4.jpg" name="Andrey"/>
                    <FriendItem url="../assets/img/summary/categories/our-team/5.jpg" name="John"/>
                    <FriendItem url="../assets/img/summary/categories/our-team/6.jpg" name="Kelbin"/>
                    <FriendItem url="../assets/img/summary/categories/our-team/7.jpg" name="Wang"/>
                  </div>
                </div>
              </div>
              <div className='flex justify-between items-center' style={{height:'112px',boxShadow:'0px -5px 20px grey', margin:'0 -24px -24px -24px', padding:'20px'}}>
                <div className='font-normal text-base'>{SelectionOfFriend}</div>
                <button className='text-base font-semibold text-white bg-indigo-500 hover:bg-indigo-700 rounded-xl py-3 px-16 my-3' onClick={selFriendModalOk}>Confirm</button>
              </div>
            </Modal>
          </>)
}

export default GiftImageItem