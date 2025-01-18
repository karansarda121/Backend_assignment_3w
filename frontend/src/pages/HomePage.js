import React, { useState, useEffect } from "react";
import api from "../api/api";
import UserDropdown from "../components/UserDropdown";
import Leaderboard from "../components/Leaderboard";
import AddUserForm from "../components/AddUserForm";
import History from "../components/History";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [history, setHistory] = useState([]);
  const [lastClaimed, setLastClaimed] = useState(null);
  const [showHistoryModal, setShowHistoryModal] = useState(false); // State to toggle Claim History modal

  useEffect(() => {
    const interval = setInterval(() => {
      const fetchUsers = async () => {
        const { data } = await api.get("/");
        setUsers(data);
        setFilteredUsers(data); // Initialize filtered users
        const { data: historyData } = await api.get("/history");
        setHistory(historyData);
      };
      fetchUsers();
    }, 2000); // Poll every 5 seconds

    return () => clearInterval(interval);
  }, [users,history]);

  const handleClaimPoints = async () => {
    if (!selectedUser) return alert("Please select a user");

    const { data } = await api.post("/claim", { userId: selectedUser });
    alert(`${data.user.name} earned ${data.points} points`);
    setLastClaimed({ name: data.user.name, points: data.points });
    setUsers((prev) =>
      prev.map((u) => (u._id === data.user._id ? data.user : u))
    );

    // Refresh history
    const { data: historyData } = await api.get("/history");
      setHistory(historyData);
      setSelectedUser("");
  };

  const addUser = async (name) => {
    const { data } = await api.post("/", { name });
    setUsers((prev) => [...prev, data]);
    setFilteredUsers((prev) => [...prev, data]); // Update filtered users
  };

  return (
      <div className="bg-gray-50  p-4 pt-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        User Points Dashboard
      </h1>

      {/* Claim History Button */}
      <div className="text-center ">
        <button
          onClick={() => setShowHistoryModal(true)}
          className="bg-blue-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          View Claim History
        </button>
      </div>
      <div />

      {/* Dashboard Layout */}
      <div className="flex gap-8">
        {/* Left Section: Leaderboard */}
        <div className="flex-1 bg-white rounded-lg  ">
          <Leaderboard users={users} />
        </div>

        {/* Right Section: Dropdown, Claim Points, and Add User */}
        <div className="w-1/3 bg-white p-6 shadow-lg rounded-lg max-h-[28rem] mt-[6rem] mr-6 py-6">
          {/* Dropdown */}
          <div className="mb-6">
            <UserDropdown
              users={filteredUsers}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          </div>
          {/* Claim Points Button */}
          <button
            onClick={handleClaimPoints}
            className="bg-blue-500 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-600 transition w-full mb-10"
          >Claim Points
          </button>
          {lastClaimed && (
            <p className="mb-2 text-green-600 font-medium">
              {lastClaimed.name} earned {lastClaimed.points} points in the last
              claim.
            </p>
          )}
          {/* Add User Form */}
          <AddUserForm addUser={addUser} />
        </div>
      </div>

      {/* Claim History Modal */}
      {showHistoryModal && (
        <History
          history={history}
          setShowHistoryModal={setShowHistoryModal}
        ></History>
      )}
    </div>
  );
};

export default HomePage;
