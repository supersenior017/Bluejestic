import React, { useEffect, useState } from 'react';
import { NextPage } from 'next'

import ProfileCard from 'src/components/summary/profile/ProfileCard';

//Layouts of this page
import Layout from '../layouts/Layout'

const Profile: NextPage = () => {       
  return (    
    <Layout index={6}>
        <div className="dashboard-content-wrapper">
          <div className="content-title mb-5">Profile</div>          
          <ProfileCard/>          
        </div>
    </Layout>
  )
}
export default Profile;