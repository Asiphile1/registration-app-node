# Employee Registration App

This is a full-stack employee registration system built using React.js on the client side and Node.js on the server side. The application is integrated with Firebase Admin SDK to handle data storage, file uploads, and user authentication.

## Table of Contents

* Project Overview
* Features
* Technologies Used
* Getting Started

* Prerequisites
* Firebase Setup
* Installation

* Running the Application
* API Endpoints
* Project Structure
* Authentication

# Screenshots


## Project Overview

The Employee Registration App allows users to manage employee details, including adding, updating, deleting, and searching for employees. Each employee entry consists of information such as name, email, phone number, position, and a photo. The app includes authentication using Firebase Authentication, and employee data is stored in Firebase Firestore, with employee photos stored in Firebase Storage.

## Features

* User Authentication: Users can log in using Firebase Authentication.
* Add Employee: Add new employees with their details and photo.
* Update Employee: Modify existing employee records.
* Delete Employee: Remove employees from the directory.
* Search Employee: Find employees by their ID.
* File Upload: Upload and display employee photos.
* Persistent Storage: Employee details are stored using Firebase Firestore and Firebase Storage.


## Technologies Used

* Frontend: React.js, Axios, CSS
* Backend: Node.js, Express.js
* Database: Firebase Firestore
* File Storage: Firebase Storage
* Authentication: Firebase Auth
* API Requests: Axios

## Getting Started
## Prerequisites

* Node.js (v14 or higher)
* Firebase Account
* Git 


## Firebase Setup

1. Go to Firebase Console.
2. Create a new project and enable Firestore and Firebase Storage.
3. Enable Authentication and choose "Email/Password" as the sign-in method.
4. Generate a Firebase Admin SDK service account key for your project.
5. Get the Firebase configuration for your client app and add it to the firebase.js file in the client.

## Installation
Clone the repository:

* git clone https://github.com/yourusername/employee-registration-app.git
* cd employee-registration-app

## Install dependencies:
* Backend (Node.js):

** cd server
** npm install

* Frontend (React):

** cd client
** npm install

## Configure Firebase:
* In the backend (Node.js), add Firebase Admin credentials by creating a .env file in the server directory:

** FIREBASE_PROJECT_ID=your_project_id
** FIREBASE_CLIENT_EMAIL=your_client_email
** FIREBASE_PRIVATE_KEY=your_private_key

* In the client (client/src/firebase.js), add your Firebase app configuration:

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};


## Running the Application

Start the Backend (Node.js):

* cd server
* npm run dev


The backend will run on http://localhost:5000.

## Start the Frontend (React.js):

* cd client
* npm start
* The frontend will run on http://localhost:3000.

## API Endpoints

* POST /addEmployee: Add a new employee.
* PUT /updateEmployee/:id: Update an existing employee.
* DELETE /deleteEmployee/:id: Delete an employee by their ID.
* GET /searchEmployee/:id: Search for an employee by ID.

## Project Structure

/client              # React frontend
  /src
    /components      # React components (FormPage, LoginPage, EmployeeList, etc.)
    /firebase.js     # Firebase configuration
    /assets          # Static assets like images, videos, etc.

/server              # Node.js backend
  /routes            # API routes for employees
  /firebase          # Firebase Admin SDK initialization

## Authentication

* Firebase Authentication is used to manage user logins.
* The login functionality is handled in the LoginPage.js component on the client.
* Auth tokens are sent with API requests for user authorization.


## Contributing

Contributions are welcome! Please fork the repository and create a pull request to contribute changes or improvements.

## Author 
ASIPHILE MTHETHWA
