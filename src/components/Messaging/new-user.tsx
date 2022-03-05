import React, { useEffect, useState } from 'react';

const NewUser = ({userimage, username, userstatus}) => {

    return (
        <div className="messaging-single-user">
            <div className="user-avtar">
                <img src={userimage} />
            </div>
            <div className="user-info">
                <h4 className="user-name">{username}</h4>
                <p className="user-status">{userstatus}</p>
            </div>
        </div>
    );
};

export default NewUser;
