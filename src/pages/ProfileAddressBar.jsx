import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import ProfileDetails from '../components/SettingProfile/ProfileDetails/ProfileDetails';
import ProfileSidebar from '../components/SettingProfile/ProfileSidebar/ProfileSidebar';
import ProfileInformation from '../components/SettingProfile/ProfilePages/ProfileDetail/ProfileInformation';
import ProfileAddress from '../components/SettingProfile/ProfilePages/ProfileAddress/ProfileAddress';
import Orderhistory from '../components/SettingProfile/ProfilePages/ProfileOrder/Orderhistory';

const ProfileAddressBar = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <ProfileDetails />
        <div style={{ width: "25%" }}>
          <ProfileSidebar />
        </div>
        <div style={{ width: "75%" }}> 
          <Routes>
            <Route path="/" element={<ProfileInformation />} />
            <Route path="/Address" element={<ProfileAddress />} />
            <Route path="/order" element={<Orderhistory />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default ProfileAddressBar;