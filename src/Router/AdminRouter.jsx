import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AdminLoginPage from './pages/Admin/AdminLoginPage';
import AdminLoginPage from './pages/Admin/AdminLoginPage';
import AdminHomePage from './pages/Admin/AdminHomePage';
import AdminAddProductPage from './pages/Admin/AdminAddProduct';
import AdminEditProductPage from './pages/Admin/AdminEditProductPage';
import AdminDeleteProduct from './pages/Admin/AdminDeleteProduct';


function AdminRouter() {
  return (
    <Switch>
      <Route path="/admin/login" component={AdminLoginPage} />
      <Route path="/admin/home" component={AdminHomePage} />
      <Route path="/admin/products/add" component={AdminAddProductPage} />
      <Route path="/admin/products/edit" component={AdminEditProductPage} />
      <Route path="/admin/products/delete" component={AdminDeleteProduct} />

      
    </Switch>
  );
}

export default AdminRouter;
