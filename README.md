# 🎬 VFilms — EZ Labs Frontend Assignment

This is a **React + Vite** single-page responsive web application built as part of the **EZ Labs Assignment**.  
The project replicates the provided **Figma design** for the *VFilms* homepage and includes a fully functional **Contact Form** integrated with the provided API endpoint.


---

## 🧰 Tech Stack

- **React.js** (Vite)
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **Responsive Design**
- **REST API Integration**

---

## 🎨 Features

- Pixel-perfect recreation of the given **Figma design**
- **Responsive layout** (Mobile, Tablet, and Desktop)
- **Contact Form** with:
  - Validation (name, email, phone, message)
  - Email format validation
  - API integration with:
    ```
    POST https://vernanbackend.ezlab.in/api/contact-us/
    ```
  - Displays “Form Submitted” message on success
- Smooth animations and clean UI layout
- Modular, reusable React components


---
# 🧪 API Example
**Request:**
```json
{
  "name": "Test User",
  "email": "testuser@gmail.com",
  "phone": "9876543210",
  "message": "This is a message"
}
```
**Expected Response:**
```json
{
  "id": 49,
  "name": "Test User",
  "email": "testuser@gmail.com",
  "phone": "9876543210",
  "message": "This is a message",
  "created_at": "2025-10-10T05:27:59.371578Z",
  "updated_at": "2025-10-10T05:27:59.371598Z"
}
```

---
# ⚙️ Getting Started
1️⃣ Clone the Repository  
git clone https://github.com/Shivam-178/Vfilms.git  
cd Vfilms  

2️⃣ Install Dependencies  
npm install  

3️⃣ Run the Project  
npm run dev  
Then open the local development server (usually): http://localhost:5173  


# 🖼️ Assets  
All icons, SVGs, and images are stored inside: /public/assets and are used across components for the hero section, branding, art curation, and contact section.  

# 🧑‍💻 Folder Structure  
Vfilms/  
│  
├── public/  
│   └── assets/         # All SVGs, logos, and images  
│  
├── src/  
│   ├── components/     # Hero, Navbar, Contact, etc.  
│   ├── styles/         # Tailwind and custom CSS  
│   ├── App.jsx  
│   └── main.jsx  
│  
├── package.json  
├── vite.config.js  
└── tailwind.config.js

## 👨‍🎓 Submitted By
- Name: Shivam Sharma
- Course: B.Tech CSE 
- Project: EZ Labs Frontend Assignment
- Date: November 2025

