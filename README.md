# Leaderboard Application

A simple Leaderboard application built with **React.js** for the frontend and **Node.js** for the backend. It dynamically updates user ranks based on their points and displays a leaderboard. Users can be added, and points can be claimed randomly.

## Features

- Displays a dynamic leaderboard with rank, user name, and total points.
- Allows users to claim random points (1-10) using a button.
- Real-time updates for user ranking and total points.
- Scrollable and responsive leaderboard table.
- Backend for managing users and points using Node.js and MongoDB.

---

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB

---

## Installation and Setup

Follow these steps to set up and run the project locally.

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or above)
- [MongoDB](https://www.mongodb.com/) (local or cloud)
- [Git](https://git-scm.com/)
- Any package manager like npm or yarn.

---

### Steps to Run the Project

1. **Clone the repository**

   ```bash
   git clone https://github.com/karansarda121/Backend_assignment_3w.git
   cd <Backend_assignment>

### Setup Backend
   ### cd backend
   ### npm install
   ###  creeate .env file if does not exist
             MONGO_URI=<your-mongodb-connection-string>
    ### npm start  //To start backend server


 ### Navigate to the frontend folder:
   ### cd ../frontend
   ### Install dependencies:
          npm install
   ### Start the React development server:
            npm start

  ### Note
  const api = axios.create({
  baseURL: "https://backend-assignment-3w.onrender.com/api/users",
});   this is deployed backend link  if not working then insert the local host link
        "http://localhost:5000/api/users"