import React from 'react'

const userItem = ({url, name, status, timeago}) => {  
  return (
      <div className="useritem">        
        <div className="item-image"><img src={url}/></div>
        <div className="item-content">
          <div style={{display:'flex', justifyContent:'flex-start'}}>
            <div className="name">&nbsp;&nbsp;{name}</div>
            <div className="status">&nbsp;&nbsp;{status}</div>
          </div>
          <div className="time-ago">            
            &nbsp;&nbsp;&nbsp;{timeago}
          </div>
        </div>
      </div>
  )
}

export default userItem;