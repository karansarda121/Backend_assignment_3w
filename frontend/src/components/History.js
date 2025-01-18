


import React from "react";

const History = ({ history, setShowHistoryModal }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 shadow-lg rounded-lg w-3/4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Claim History
          </h2>
          {/* Sticky Close Button */}
          <button
            onClick={() => setShowHistoryModal(false)}
            className="text-red-500 font-bold text-lg hover:text-red-600 transition sticky z-60 top-0 right-0 mt-4"
          >
            Close
          </button>
        </div>
        {history.length > 0 ? (
          <ul className="space-y-2">
            {history.map((item) => (
              <li
                key={item._id}
                className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg"
              >
                <span className="font-medium text-gray-800">
                  {item.userId.name}
                </span>
                <span className="text-gray-600">{item.points} points</span>
                <span className="text-sm text-gray-500">
                  {new Date(item.claimedAt).toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No history available.</p>
        )}
      </div>
    </div>
  );
};

export default History;
