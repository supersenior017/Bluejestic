import React, { useEffect, useState } from 'react';

const User = ({userimage, username, userstatus, usermessage, usertime, userpendingmessage}) => {

    return (
        <div className="messaging-single-user">
            <div className="user-avtar">
                <img src={userimage} />
            </div>
            <div className="user-info">
                <h4 className="user-name">{username}</h4>
                <p className="user-status">{userstatus}</p>
                <p className="user-message">{usermessage}</p>
            </div>
            <div className="user-meta-info">
                <p>{usertime}</p>
                <span className="user-messages">{userpendingmessage}</span>
            </div>
        </div>
    );
};

export default User;
