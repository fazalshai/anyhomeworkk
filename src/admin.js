// admin.js

import React from 'react';

function Admin({ users }) {
  return (
    <div>
      <h2>Admin Panel</h2>
      <h3>Registered Users</h3>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Email:</strong> {user.email} <br />
            <strong>University:</strong> {user.university}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
