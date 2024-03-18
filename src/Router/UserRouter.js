import React from 'react';
import { Routes, Route} from 'react-router-dom';
import UserHome from '../Pages/User/UserHome';
import UserSignup from '../Pages/User/UserSignup';
import UserLogin from '../Pages/User/UserLogin';
import Shop from '../Components/User/Userproduct/Shop';



function UserRouter() {
  return (

    <div>
    <Routes>
    <Route path="/" element={<UserHome/>} />

      <Route path="/user/login" element={<UserLogin/>} />
      <Route path="/user/signup" element={<UserSignup/>} />
      <Route path="/user/shop" element={<Shop/>} />


      

      
   
  </Routes>
  </div>
);
}
  

export default UserRouter

