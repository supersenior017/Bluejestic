import React, { useEffect, useState } from 'react';
import { NextPage } from 'next'
import StatisticsCard from 'src/components/summary/overview/StatisticsCard';
import ChartCard from 'src/components/summary/overview/ChartCard';
import BookmarkItemsCard from 'src/components/summary/overview/BookmarkItemsCard';
import SavePostsCard from 'src/components/summary/overview/SavePostsCard';
import ActivitiesCard from 'src/components/summary/overview/ActivitiesCard';
import PostOverviewCard from 'src/components/summary/overview/PostOverviewCard';
import Orders from 'src/components/summary/overview/Orders';
import OrdersTableHeader from 'src/components/summary/overview/OrdersTableHeader';
import OrdersItem from 'src/components/summary/overview/OrdersItem';

//Layouts of this page
import Layout from '../layouts/Layout'


// Hook
// function useWindowSize() {
//   // Initialize state with undefined width/height so server and client renders match
//   // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
//   const [windowSize, setWindowSize] = useState({   width: undefined,    height: undefined,  });
//   useEffect(() => {
//     // only execute all the code below in client side
//     if (typeof window !== 'undefined') {
//       // Handler to call on window resize
//       function handleResize() {
//         // Set window width/height to state
//         setWindowSize({
//           width: window.innerWidth,
//           height: window.innerHeight,
//         });
//       }    
//       // Add event listener
//       window.addEventListener("resize", handleResize);     
//       // Call handler right away so state gets updated with initial window size
//       handleResize();    
//       // Remove event listener on cleanup
//       return () => window.removeEventListener("resize", handleResize);
//     }
//   }, []); // Empty array ensures that effect is only run on mount
//   return windowSize;
// }

export default function Overview() {    

  const date = new Date();  
  var index:number = 1;
  
  return (  
    <Layout index={index}>
      <div className="dashboard-content-wrapper">
        <div className="content-title">Overview</div>
        <div className="content-date">{date.toLocaleDateString()}</div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex justify-center  ">
            <StatisticsCard title="Followers" numbers="879" rate="1.5%" content="Up from last week" color="#FF7D23" icon="1" />
          </div>
          <div className="flex justify-center">
            <StatisticsCard title="Friends" numbers="374" rate="4.2%" content="Up from yesterday" color="#7460EE" icon="2" />  
          </div>
          <div className="flex justify-center  ">
            <StatisticsCard title="Saved Stores" numbers="34" rate="8.5%" content="Up from yesterday" color="#4FC3F7" icon="3" />
          </div>
          <div className="flex justify-center ">
            <StatisticsCard title="Joined Groups" numbers="20" rate="1.0%" content="Up from last week" color="#3F58CD" icon="4" />
          </div>
        </div>

        <ChartCard/>
        <div >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <BookmarkItemsCard />
            <SavePostsCard/>
          </div>
        </div>
        <div>
          <div className="flex flex-row gap-12 item-center justify-start items-center">
            <div className="w-5/12">
              <ActivitiesCard/>
            </div>
            <div className="w-7/12">
              <PostOverviewCard/>
            </div>
          </div>
        </div>
        <Orders/>
        <OrdersTableHeader/>          
        <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/1.jpg"} title="Nike Shoe 2" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={1}/>          
        <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/2.jpg"} title="Bar line Speakers" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={1}/>
        <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/3.jpg"} title="Fancy Watch" date="May 4, 2020" address="6096 Bloomingdales St" price="3,234" status={2}/>
        <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/4.jpg"} title="lash Shoulder Bag" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={3}/>
        <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/5.jpg"} title="Wooden Handbag" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={2}/>
        <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/6.jpg"} title="Small Leather Purse" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={3}/>
        <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/7.jpg"} title="Fashion Jacket" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={1}/>
        <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/8.jpg"} title="Nike Dress 2" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={2}/>
        <OrdersItem id="#996723" url={"../assets/img/summary/categories/shop/9.jpg"} title="Nike Jacket 2" date="June 4, 2020" address="6096 Bloomingdales St" price="3,234" status={1}/>

        <div className="m-16"></div>
      </div> 
    </Layout>   
  )
}
