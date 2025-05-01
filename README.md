Hotel Reservation App

This is a full stack hotel booking web application built using the MERN stack: MongoDB, Express, React, and Node.js. Users can search and book hotels, while admins can manage listings, bookings, and user roles. The app includes user authentication with JWT and features a responsive interface.

Project Type

This is a web application, designed to run in the browser.

Tech Stack

Backend: Node.js
Express.js
MongoDB with Mongoose
JWT for authentication
Bcrypt for password hashing
Cookie-parser for session handling

Frontend: React.js
React Router
Context API for authentication state
Axios for making API requests

How to Run the Project

Step 1: Clone the repository

git clone https://github.com/srishti-11/Reservation-app.git

Step 2: Set up the backend

Navigate to the api directory
Install dependencies using npm install
Create a .env file in the api directory with the following content:

PORT=8800
MONGO_URL=your_mongo_connection_string
JWT_SECRET=your_secret_key

Start the backend server using:

npm start

Step 3: Set up the frontend

Navigate to the client directory
Install dependencies using npm install
Start the React frontend using:

npm start

This will launch the frontend at http://localhost:3000

Features

User registration and login
JWT-based authentication with cookies
Role-based access for admin and users
View, search, and filter hotels
Room availability and booking system
Admin dashboard for managing hotels, rooms, and users

Example API Routes

POST /auth/register for user registration
POST /auth/login for user login
GET /hotels to fetch hotel listings
GET /hotels/:id for hotel details
POST /rooms/:id/availability to check room availability
POST /bookings to book a room 


Dependencies and Configurations Required

Backend Dependencies (Node.js + Express)

express

mongoose

dotenv

cookie-parser

bcryptjs

jsonwebtoken

Frontend Dependencies (React)

react

react-router-dom

axios

Environment Configuration (.env file in backend)
You must provide:

MONGO_URL: Your MongoDB Atlas connection string

JWT_SECRET: A random string used for signing JWT tokens

PORT: Backend server port (default is 8800)


