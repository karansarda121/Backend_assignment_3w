
import React from "react";

const UserDropdown = ({ users, selectedUser, setSelectedUser }) => (
  <div className="flex flex-col items-center">
    <label
      htmlFor="user-dropdown"
      className="mb-2 text-lg font-medium text-gray-700"
    >
      Select a User
    </label>
    <select
      id="user-dropdown"
      value={selectedUser}
      onChange={(e) => setSelectedUser(e.target.value)}
      className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">-- Select User --</option>
      {users.map((user) => (
        <option key={user._id} value={user._id}>
          {user.name}
        </option>
      ))}
    </select>
  </div>
);

export default UserDropdown;

