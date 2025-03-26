# 🛍 ShopZee Simplified Product Display Web Application

## 🎯 Objective

This project is a frontend-focused web application that showcases products (e.g., shoes, apparel) with a clean and responsive UI. It includes features like a product list, detailed product view, and a shopping cart.

## ⚙ Tech Stack

**Frontend**: React.js

**Styling**: Tailwind CSS

**State Management**: React Context API

**Backend**: Mock data used for product listings and also Integrated backend for API

## 🌟 Features

### 1. Product List Page

- Displays multiple products with images, names, brands, and prices.

- Fully responsive design for desktop and mobile views.

- "Add to Bag" button for each product.

### 2. Product Detail View

- Clicking a product opens a modal/page with detailed information.

- Includes a description, price, and mock reviews.

- "Add to Bag" option available in detail view.

### 3. "My Bag" (Shopping Cart) Feature

- Accessible via a button in the navigation bar.

- Opens a side-drawer showing:

- Products can be added

- Their quantities

- Individual prices

- Total price

- Users can remove items or adjust quantities.

### 4. State Management

- Implemented using React's Context API.

- Ensures smooth state handling across components.

## 🚀 Bonus Features

**Backend Integration**: Implemented backend for fetching product data.

**Web-Based Barcode Scanner**: Implemented using QuaggaJS.

## 📖 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/PoshikaM/ShopZee
cd Frontend
cd Backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
For frontend give - "npm run dev"
For backend give - "npm start"
```

The application will be available at http://localhost:(PORT)/.

## 💡 Design Choices

Tailwind CSS was chosen for rapid UI development and maintainability.

React Context API simplifies state management without the overhead of Redux.

Modal for product details ensures smooth user experience without unnecessary page reloads.

## ⚠️ Challenges & Solutions

Challenge: Managing State Efficiently

Solution: Used Context API to manage cart state globally.

Challenge: Ensuring Mobile Responsiveness

Solution: Tailwind CSS flex and grid layouts were used to ensure responsiveness across devices.

## 📌 Notes

#### ✅ Frontend Implementation: Clean and responsive UI

#### ✅ Code Quality: Well-structured, readable, and maintainable.

#### ✅ Documentation: Clear README and inline code comments.

#### ✅ Bonus Tasks: 
- #### Fetched product data from my Backend API.

- #### The barcode scanner feature is added as an enhancement.

## 🔗 Delpoyed Link

**Frontend** - [ShopZee](https://shopzeee1.netlify.app/)

**Backend** - [ShopZee Backend](https://shopzee-h2ls.onrender.com/products)

## 📢 Feel free to contribute or raise issues!

### 🎯 Author: Poshika mangai M

### 📌 GitHub Repository: https://github.com/PoshikaM