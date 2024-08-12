import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Aboutus';
import AccountSettings from './Account';
import './App.css';
import ContactUs from './Contact';
import LandOwnerPage from './LandOwnerPage';
import Main from './Main';
import NavbarNew from './Navbar';

import Order from './Order';
import Signup from './Signup';
import FarmerDetailsPage from './disp';
import DonationPage from './donor';
import FarmerPage from './farmer';
import AlternativeFarmerRegistrationForm from './farmerreg';

import FAQ from './fq';
import HomePagef from './ho';
import HomePageL from './ho22';
import HomePage from './home';
import LandOwnerDetailsPage from './landisp';
import LandLeasing from './landlease';
import LandPost from './landpost';
import LandOwnerRegistrationForm from './landreg';
import LoginPage from './login';
import ViewProf from './profile1';
import VendorPage from './vendor';
import VendorRegistrationForm from './vendorreg';




function App() {
  return (
    <div>
     
<NavbarNew/>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/Main" element={<Main/>} />

      <Route path="/home" element={<HomePage/>} />
    
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/farmer" element={<FarmerPage/>} />
      <Route path="/vendor" element={<VendorPage/>} />
      <Route path="/donor" element={<DonationPage/>} />
      <Route path="/landlease" element={<LandLeasing/>} />
      <Route path="/disp" element={<FarmerDetailsPage/>} />
      <Route path="/landisp" element={<LandOwnerDetailsPage/>} />
      <Route path="/profile1" element={<ViewProf/>} />
      <Route path="/Account" element={<AccountSettings/>} />
      <Route path="/Aboutus" element={<AboutUs/>} />
      <Route path="/Contact" element={<ContactUs/>} />
      <Route path="/fq" element={<FAQ/>} />
     <Route path="/ho" element={<HomePagef/>}/>
     <Route path="/ho22" element={<HomePageL/>}/>
     <Route path="/landpost" element={<LandPost/>}/>
     <Route path="/LandOwnerPage" element={<LandOwnerPage/>}/>
     <Route path="/farmerreg" element={<AlternativeFarmerRegistrationForm/>}/>
   
     <Route path="/vendorreg" element={<VendorRegistrationForm/>}/>
     <Route path="/farmerreg" element={<AlternativeFarmerRegistrationForm/>}/>
     <Route path="/landreg" element={<LandOwnerRegistrationForm/>}/>
     <Route path="/login" element={<LoginPage/>}/>
     <Route path="/Order" element={<Order/>}/>
     
    

     
     
   
    </Routes> 
    {/* <FarmerDetailsPage/> */}
    {/* <DonorPage/> */}
  {/* <Donat/> */}
{/* <LandOwnerDetailsPage/> */}
{/* <HomePagell/> */}
{/* <LandOwnerRegistrationForm/> */}
{/* <VendorRegistrationForm/> */}
{/* <AlternativeFarmerRegistrationForm/> */}



  </div>
  );
}

export default App;

