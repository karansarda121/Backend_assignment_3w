// import React, { useState } from "react";

// const AddUserForm = ({ addUser }) => {
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name.trim()) {
//       addUser(name);
//       setName("");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Enter user name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button type="submit">Add User</button>
//     </form>
//   );
// };

// export default AddUserForm;

import React, { useState } from "react";

const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
         if (!name) return alert("Please select a user");
    if (name.trim()) {
      addUser(name);
      setName("");
    }
  };

    return (
      <div className="ml-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 bg-white p-6 shadow-lg rounded-lg "
        >
          <h2 className="text-xl font-semibold text-gray-800">
            Add a New User
          </h2>
          <input
            type="text"
            placeholder="Enter user name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add User
          </button>
        </form>
      </div>
    );
};

export default AddUserForm;

