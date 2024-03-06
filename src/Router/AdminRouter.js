import React from 'react';
import { Routes, Route} from 'react-router-dom';
import AdminHomePage from '../Pages/Admin/AdminHomePage';


function AdminRouter() {
  return (
    <Routes>
    <Route path="/" element={<AdminHomePage/>} />

      
  </Routes>
  );
}

export default AdminRouter;
