# MERN Task Manager App

A complete task management application built with the MERN stack (MongoDB, Express.js, React, Node.js).
It allows users to manage their daily tasks with secure login, drag-and-drop features, and a clean, responsive design.

---

## 🌟 Features

* *Authentication*: Secure login, signup, and logout using JWT (HttpOnly cookies). Also supports Google login.
* *Task Management*: Add, edit, delete, and search tasks easily.
* *Drag & Drop*: Organize tasks between "To Do", "In Progress", and "Done".
* *Protected Routes*: Only logged-in users can access dashboard pages. Logged-in users cannot revisit login/signup.
* *React Query Integration*: Faster UI updates with server-side caching and optimistic updates.
* *Responsive Design*: Works smoothly across devices.

---

## 🛠 Tech Stack

### Frontend

* React (v18.3.1)
* Redux Toolkit (state management)
* React Router (routing)
* React Query (data fetching + caching)
* React Hook Form + Zod (form validation)
* React Beautiful DnD (drag-and-drop)
* Axios (API calls)
* Flowbite-React (UI components)
* React Toastify (notifications)

### Backend

* Node.js (v18.x)
* Express.js (v4.19.2)
* MongoDB + Mongoose (database)
* JWT (authentication)
* Bcrypt.js (password hashing)
* Cookie-Parser (for JWT cookies)

---

## 🚀 Live Demo

🔗 [Click here to try it live]()

---

## 🏁 Run Locally

### Prerequisites

* Node.js (v18 or higher)
* MongoDB (local or Atlas cloud)

### Installation

1. Clone this repo

   bash
   git clone https://github.com/razak571/mern_task_manager_app.git
   cd mern_task_manager_app
   

---

### Backend Setup

1. Go to backend folder

   bash
   cd backend
   
2. Install dependencies

   bash
   npm install
   
3. Create a .env file

   env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   
4. Start backend server

   bash
   npm start
   

   Backend will run on http://localhost:5000

---

### Frontend Setup

1. Go to frontend folder

   bash
   cd ../frontend
   
2. Install dependencies

   bash
   npm install
   
3. Create a .env file

   env
   REACT_APP_API_URL=http://localhost:5000
   
4. Start frontend server

   bash
   npm start
   

   App will run on http://localhost:3000

---

## 🧪 Testing

After running both servers, open [http://localhost:3000](http://localhost:3000) in your browser to test the app.

---

## 📜 Scripts

* npm start → Run development server
* npm build → Build production-ready app

---

## 🚀 Future Plans

* Add user profile avatars
* Add real-time notifications for task changes
* Polish the UI with better filters and layout improvements

---

## 👨‍💻 Author

*Aniket Singh* - [GitHub](https://github.com/aniketsingh-214)
