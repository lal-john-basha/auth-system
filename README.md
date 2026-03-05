
---

# 🔐 JWT Authentication System

A secure **Authentication System** built using **Node.js, Express.js, and MongoDB** that implements **JWT (JSON Web Token) based authentication**.

The system allows users to **register, login, and access protected routes securely** using token-based authentication.

---

# 📌 Project Overview

Authentication is a critical part of modern web applications.

This project demonstrates how to build a **secure backend authentication system** with:

* User registration
* Login authentication
* Password hashing
* Token-based authorization
* Protected API routes

The system uses **JWT tokens** to verify user identity and secure API endpoints.

---

# 🚀 Features

✅ User Registration
✅ Secure Login System
✅ Password Hashing using **bcrypt**
✅ JWT Token Authentication
✅ Protected Routes
✅ MongoDB Database Integration

---

# 🛠 Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB**
* **JWT (JSON Web Tokens)**
* **bcrypt**
* **Mongoose**

---

# 📂 Project Structure

```
auth-system
│
├── models
│   └── User.js        # User schema
│
├── routes
│   └── auth.js        # Authentication routes
│
├── server.js          # Main server file
├── package.json       # Dependencies
├── .gitignore         # Ignore node_modules
└── README.md          # Project documentation
```

---

# ⚙️ How It Works

1️⃣ User registers with email and password

2️⃣ Password is **hashed using bcrypt** and stored in MongoDB

3️⃣ User logs in with credentials

4️⃣ Server verifies credentials and generates **JWT token**

5️⃣ Token is used to access **protected routes**

---

# ▶ How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/lal-john-basha/auth-system.git
```

### 2️⃣ Navigate to Project Folder

```bash
cd auth-system
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Run the Server

```bash
node server.js
```

### 5️⃣ Server Runs On

```
http://localhost:5000
```

---

# 📊 API Endpoints

### Register User

```
POST /api/auth/register
```

### Login User

```
POST /api/auth/login
```

### Protected Route

```
GET /api/auth/profile
```

*(Requires JWT Token)*

---

# 🔒 Security Features

* Password hashing using **bcrypt**
* Token-based authentication using **JWT**
* Protected API routes
* Secure user data storage

---

# 🔮 Future Improvements

* Role-based authentication
* Refresh tokens
* Email verification
* OAuth login (Google / GitHub)
* Frontend integration

---

# 👨‍💻 Author

**Shaik Lal John Basha**

GitHub:
[https://github.com/lal-john-basha](https://github.com/lal-john-basha)

---
