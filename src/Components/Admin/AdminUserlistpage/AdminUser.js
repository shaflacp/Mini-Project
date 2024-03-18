import React from 'react';
import './adminuser.css'; // Import your CSS file

class AdminUser extends React.Component {
  render() {
    const users = [
      { id: 1, username: 'John Doe', email: 'johnk21@gmail.com' },
      { id: 2, username: 'Amy Lee ', email: 'amylee@gmail.com' },
      { id: 3, username: 'Jane James', email: 'janjamc@gmail.com' },
      { id: 4, username: 'Jack Drew', email: 'jack4@gmail.com' },
      { id: 5, username: 'Alice jae', email: 'alice5@gmail.com' },
    ];

    return (
      <div>
        <h2>User List</h2>
        <table className="admin-table">
          <thead>
            <tr>
              <th>Si. No</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th> {/* Added new column for action */}
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => this.handleBlockUser(user.id)}>Block</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  handleBlockUser(userId) {
    // Implement your logic to block the user with the given userId
    console.log(`Blocking user with ID: ${userId}`);
  }
}

export default AdminUser;
