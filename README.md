# 🧵 TexMind AI – AI-Powered Textile Procurement Platform

> An intelligent MERN Stack application that modernizes textile procurement by connecting buyers and suppliers through AI-assisted product discovery, smart recommendations, and seamless order management.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-UI-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📌 Overview

TexMind AI is a full-stack MERN application designed to simplify textile procurement for buyers and suppliers. The platform enables product discovery, AI-assisted recommendations, inventory management, shopping cart functionality, secure checkout, and order management through dedicated dashboards.

---

# ✨ Features

### 🔐 Authentication
- User Registration & Login
- JWT Authentication
- Buyer & Supplier Roles

### 👤 Buyer Module
- Browse Products
- Explore Categories
- Product Details
- AI Product Recommendations
- Shopping Cart
- Checkout
- Order History
- Buyer Dashboard

### 🏭 Supplier Module
- Supplier Dashboard
- Add Product
- Edit Product
- Delete Product
- Inventory Management
- View Orders

### 🤖 AI Features
- AI Assistant
- AI Match Score
- Similar Products
- Smart Product Recommendations

### 📦 Order Management
- Place Orders
- Order Tracking
- Order Success Page

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- Framer Motion
- Lucide React
- React Hot Toast

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs

---

# 📁 Project Structure

```
TexMind-AI
│
├── client
│   ├── src
│   │   ├── api
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── data
│   │   ├── pages
│   │   └── App.jsx
│   │
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── package.json
│   └── server.js
│
├── README.md
└── LICENSE
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/SanketKolhe2005/TexMind-AI.git
```

```bash
cd TexMind-AI
```

---

## Install Frontend

```bash
cd client
npm install
```

---

## Install Backend

```bash
cd ../server
npm install
```

---

# 🔐 Environment Variables

## Client (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Server (.env)

```env
PORT=5000

MONGO_URI=YOUR_MONGODB_URI

JWT_SECRET=YOUR_SECRET_KEY
```

---

# ▶️ Run the Project

## Start Backend

```bash
cd server
npm run dev
```

Backend

```
http://localhost:5000
```

---

## Start Frontend

```bash
cd client
npm run dev
```

Frontend

```
http://localhost:5173
```

---

# 📡 REST API

## Authentication

```
POST /api/auth/register
POST /api/auth/login
```

## Products

```
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

## Cart

```
POST   /api/cart
GET    /api/cart/:userId
DELETE /api/cart/:id
```

## Orders

```
POST /api/orders
GET  /api/orders
GET  /api/orders/:userId
PUT  /api/orders/:id
```

---

# 📷 Screenshots

Create a folder named:

```
screenshots/
```

Add screenshots such as:

- Home
- Categories
- Product Details
- Cart
- Checkout
- Buyer Dashboard
- Supplier Dashboard
- AI Assistant

---

# 💡 Future Enhancements

- Google Gemini AI Integration
- Cloudinary Image Upload
- Voice Assistant
- Fabric Comparison
- Payment Gateway
- Email Notifications
- Wishlist
- Product Reviews
- Analytics Dashboard

---

# 🔄 Application Workflow

```
Buyer
   │
   ▼
Browse Products
   │
   ▼
Product Details
   │
   ▼
Add to Cart
   │
   ▼
Checkout
   │
   ▼
Place Order
   │
   ▼
Buyer Dashboard

──────────────────────────

Supplier
   │
   ▼
Login
   │
   ▼
Supplier Dashboard
   │
   ▼
Manage Products
   │
   ▼
Receive Orders
   │
   ▼
Inventory Management
```

---

# 📚 Learning Outcomes

This project demonstrates practical experience with:

- MERN Stack Development
- REST API Design
- MongoDB Database Modeling
- JWT Authentication
- State Management
- CRUD Operations
- Responsive UI Design
- AI-assisted User Experience

---

# 👨‍💻 Author

**Sanket Kolhe**

🎓 B.Tech Computer Engineering  
MIT Academy of Engineering, Alandi, Pune

- **GitHub:** [SanketKolhe2005](https://github.com/SanketKolhe2005)
- **LinkedIn:** [Sanket Kolhe](https://www.linkedin.com/in/sanket-kolhe-b2683525b)

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you found this project helpful, please consider **starring ⭐ the repository** and sharing your feedback.

---

## 🚀 Built With

- React.js
- Node.js
- Express.js
- MongoDB
- Tailwind CSS
- JavaScript (ES6+)
- Axios
- JWT Authentication
- Framer Motion
- Lucide React

---

### ⭐ If you like this project, don't forget to Star the repository!
