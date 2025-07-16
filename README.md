# 📝 Real-Time Collaborative Document Editor

---

COMPANY : CODTECH IT SOLUTIONS

NAME : MUZAMMIL AHMED 

INTERN ID : CT04DG2827

DOMAIN: WEB DEVELOPMENT 

DURATION : 4 WEEKS 

MWNTOR : NEELA SANTHOS 

---

A real-time, multi-user collaborative document editor built using **React.js**, **Node.js**, **Socket.IO**, and **MongoDB**. This app allows users to collaboratively edit documents with live syncing, formatting options, and user presence — similar to Google Docs.

---

## 🚀 Features

- ✨ Real-time editing using **WebSockets (Socket.IO)**
- 📄 Rich text editing (extendable with Slate.js or Quill)
- 👥 Multi-user presence with shared document state
- 🔐 User authentication (optional)
- 🧠 Document versioning (MongoDB or PostgreSQL)
- 🌐 Fully responsive UI built with **Tailwind CSS**
- ☁️ Deployable on Vercel + Render + MongoDB Atlas

---

## 📁 Folder Structure

RealTime_Collab_Doc_Editor/
├── client/ # React Frontend
│ ├── src/
│ │ ├── components/ # Editor and shared components
│ │ ├── pages/ # Home, Login (optional)
│ │ └── App.js
├── server/ # Node.js Backend
│ ├── controllers/
│ ├── models/
│ ├── sockets/ # Socket.IO server
│ └── server.js
├── database/
│ └── mongodb.js # MongoDB connection
├── README.md
└── .env

---

# PREVIEW

![Image](https://github.com/user-attachments/assets/dc47ba2d-8f27-4405-a5d0-9a520946917a)

![Image](https://github.com/user-attachments/assets/28a9f77a-11e9-4cad-ba58-b8e447e92b37)


---

## 🛠️ Tech Stack

| Layer        | Technology             |
|--------------|------------------------|
| Frontend     | React.js, Tailwind CSS |
| Backend      | Node.js, Express.js    |
| Real-Time    | Socket.IO              |
| Database     | MongoDB (via Mongoose) |
| Deployment   | Vercel + Render        |

---

📌 To Do / Future Enhancements
 Add login/signup with JWT

 Multi-cursor presence (via Yjs or Automerge)

 Document commenting & suggestions

 Export to PDF / Word

 AI grammar check using GPT API


---

## 🖥️ Preview Screenshots

| UI Area                     | Preview                    |
|----------------------------|----------------------------|
| Final UI Snapshot          | ![Final UI](./Final_Collab_Editor_UI_Preview.png) |
| Live Editor                | ![Editor](./preview_images/ui_preview_1.png) |
| Toolbar + Formatting Panel | ![Toolbar](./preview_images/ui_preview_2.png) |


---

🌐 Deployment
Frontend: Vercel → client folder

Backend: Render (Free tier) → server folder

Database: MongoDB Atlas

Configure environment variables in .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000


---

🙌 Acknowledgements
Socket.IO

Tailwind CSS

MongoDB Atlas

React.js

---
## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/RealTime_Collab_Doc_Editor.git
cd RealTime_Collab_Doc_Editor

Backend

cd server
npm install

Frontend 

cd ../client
npm install


