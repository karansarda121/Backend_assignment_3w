import React from "react";

const Leaderboard = ({ users }) => (
  <div className="leaderboard-container py-8 px-6 bg-gray-50 min-h-screen">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
      Leaderboard
    </h2>
    {/* Scrollable table container with proper padding */}
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg border border-gray-200">
      <div className="max-h-[28rem] overflow-y-auto border rounded-lg">
        <table className="table-auto w-full ">
          <thead>
            <tr className="bg-blue-500 text-white sticky top-0 z-10">
              <th className="px-4 py-3 w-1/6">Rank</th>
              <th className="px-4 py-3 w-2/6">Name</th>
              <th className="px-4 py-3 w-2/6">Total Points</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? (
              users.map((user, index) => (
                <tr
                  key={user._id}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="border px-4 py-2 text-center">{index + 1}</td>
                  <td className="border px-4 py-2 text-center">{user.name}</td>
                  <td className="border px-4 py-2 text-center">
                    {user.totalPoints}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="border px-4 py-2 text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Leaderboard;
