import React from 'react';;

const GroupBanner = (props) => {
    return (
        <div className="group-banner">
           <div className="group-banner-image">
               <img src="/assets/img/groups/group-banner.png" />
           </div>
           <div className="group-banner-text">
               <h4>Discover groups</h4>
               <p>that fit your shopping interest</p>
           </div>
        </div>
    );
};


export default GroupBanner;
