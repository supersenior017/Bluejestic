import React from 'react';
import {Tabs, Pagination  } from 'antd';


import OrdersSearch from 'src/components/summary/orders/OrdersSearch';
import OrdersHeader from 'src/components/summary/orders/OrdersHeader';
import OrdersItem from 'src/components/summary/orders/OrdersItem';

const { TabPane } = Tabs;

const OrderDetails = () => {
  return (
    <div className="all_card">
      <div className="card_header">
        <div className="flex ">
          <div className="fs26 font-semibold w-3/6">Order Details</div>  
        </div>        
      </div>
      <div className="card_body">
          <div className="fs16 font-normal text-gray-500">
            In the order details section, you can review and manage all orders with their details. Your can view and edit many information 
            such as IDs of all orders, ordered product, order date, price and other status. Access to this area is limited. Only administrations 
            and team leaders can reach. The chages you make will be approved after they are checked.
          </div>
      </div>
      <div className="w-full h-44 pb-5 orderdetails-tab">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="All Orders" key="1" className="">
            <OrdersSearch/>
            <OrdersHeader/>     
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/1.jpg"} title="Nike Shoe 2" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={1}/>          
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/2.jpg"} title="Bar line Speakers" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={1}/>
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/3.jpg"} title="Fancy Watch" date="May 4, 2020" address="6096 Bloomingdales St" price="3,234" status={2}/>
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/4.jpg"} title="lash Shoulder Bag" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={3}/>
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/5.jpg"} title="Wooden Handbag" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={2}/>
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/6.jpg"} title="Small Leather Purse" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={3}/>
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/7.jpg"} title="Fashion Jacket" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={1}/>
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/8.jpg"} title="Nike Dress 2" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={2}/>
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/9.jpg"} title="Nike Jacket 2" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={1}/>
            <div className="flex justify-center flex py-6 w-full bg-white rounded-2xl mt-4">
              <Pagination defaultCurrent={1} total={9} />
            </div>            
          </TabPane>
          <TabPane tab="Pending" key="2" >
            <OrdersSearch/>
            <OrdersHeader/>     
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/4.jpg"} title="lash Shoulder Bag" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={2}/>
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/5.jpg"} title="Wooden Handbag" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={2}/>
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/8.jpg"} title="Nike Dress 2" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={2}/>
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/9.jpg"} title="Nike Jacket 2" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={2}/>
            <div className="flex justify-center flex py-6 w-full bg-white rounded-2xl mt-4">
              <Pagination defaultCurrent={1} total={4} />
            </div>            
          </TabPane>
          <TabPane tab="Completed" key="3">
            <OrdersSearch/>
            <OrdersHeader/>     
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/6.jpg"} title="Small Leather Purse" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={1}/>
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/7.jpg"} title="Fashion Jacket" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={1}/>
            <div className="flex justify-center flex py-6 w-full bg-white rounded-2xl mt-4">
              <Pagination defaultCurrent={1} total={2} />
            </div>
            
          </TabPane>
          <TabPane tab="Cancelled" key="4">
            <OrdersSearch/>
            <OrdersHeader/>     
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/1.jpg"} title="Nike Shoe 2" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={3}/>          
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/2.jpg"} title="Bar line Speakers" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={3}/>
            <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/5.jpg"} title="Wooden Handbag" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={3}/>
            <div className="flex justify-center flex py-6 w-full bg-white rounded-2xl mt-4">
              <Pagination defaultCurrent={1} total={3} />
            </div>            
          </TabPane>
        </Tabs>
      </div>
    </div>
  )
}

export default OrderDetails;
