import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';

const NewGroup = ({ userimage, username, userstatus }) => {

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <div className="messaging-single-user d-flex justify-content-between">
            <div className="d-flex align-items-center">
                <div className="user-avtar">
                    <img src={userimage} />
                </div>
                <div className="user-info">
                    <h4 className="user-name">{username}</h4>
                    <p className="user-status">{userstatus}</p>
                </div>
            </div>
            <div className="user-meta-info">
                <Checkbox onChange={onChange}></Checkbox>
            </div>
        </div>
    );
};

export default NewGroup;
