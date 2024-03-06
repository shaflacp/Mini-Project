import React from 'react';
import { Routes, Route} from 'react-router-dom';
import UserSignup from '../Pages/User/UserSignup';
import UserLogin from '../Pages/User/UserLogin';
import UserHome from '../Pages/User/UserHome';


function UserRouter() {
  return (

    <div>
    <Routes>
    <Route path="/" element={<UserHome/>} />

      <Route path="/user/login" element={<UserLogin/>} />
      <Route path="/user/signup" element={<UserSignup/>} />
   
  </Routes>
  </div>
);
}
  

export default UserRouter

