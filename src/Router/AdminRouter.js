import React from 'react';
import { Routes, Route} from 'react-router-dom';
import AdminHomePage from '../Pages/Admin/AdminHomePage';
import AdminUserlistpage from '../Pages/Admin/AdminUserlistpage';
import AdminOrderList from '../Pages/Admin/AdminOrderList';
import AdminProductlistpage from '../Pages/Admin/AdminProductlistpage';
// import AdminProductListPage from '../Pages/Admin/AdminProductListPage';
// import AdminAddProductsPage from '../Pages/Admin/AdminAddProductsPage';



function AdminRouter() {
  return (
    <div>
     <Routes>
        <Route path="/" element={<AdminHomePage/>} />
        <Route path="/users" element={<AdminUserlistpage/>} />
        <Route path="/orders" element={<AdminOrderList/>} />
        <Route path="/products" element={<AdminProductlistpage/>}/>



        
        {/* <Route path="/products" element={<AdminProductListPage/>} /> */}
        {/* <Route path="/addproducts" element={<AdminAddProductsPage/>} /> */}
      </Routes> 
      </div>
  );
}

export default AdminRouter;
