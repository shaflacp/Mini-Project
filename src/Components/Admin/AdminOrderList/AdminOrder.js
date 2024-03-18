import React from 'react';
import './adminorder.css';

const AdminHome = () => {
  // Sample data for demonstration
  const orders = [
    { id: 1, customerName: 'John Doe', totalAmount: 500, status: 'Pending', action: 'View' },
    { id: 2, customerName: 'Jane Smith', totalAmount: 1100, status: 'Completed', action: 'View' },
    { id: 3, customerName: 'Alice Johnson', totalAmount: 875, status: 'Shipped', action: 'View' }
  ];

  return (
    <div className="admin-home-container">
      <h1>My Orders</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Action</th> {/* New column for action button */}
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>${order.totalAmount}</td>
              <td>{order.status}</td>
              <td><button>{order.action}</button></td> {/* Action button */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminHome;
