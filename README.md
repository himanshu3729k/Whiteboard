# 🎨 Real-Time Collaborative Whiteboard

A full-stack MERN application that enables multiple users to draw, sketch, and collaborate on a digital whiteboard in real time.

---

## 🚀 Features

- **⚡ Real-Time Collaboration**: Multiple users can draw simultaneously on the same canvas with instant updates powered by Socket.io.
- **🔐 User Authentication**: Secure Signup and Login functionality with JSON Web Tokens (JWT) and Bcrypt password hashing.
- **💾 Persistent Canvas**: Canvas drawings are automatically saved to MongoDB, allowing users to reload and continue their work later.
- **👥 Canvas Sharing**: Share whiteboard canvases with other registered users via their email.
- **✏️ Advanced Drawing Tools**:
  - **Pencil (Freehand)** with smooth stroke rendering via `perfect-freehand`
  - **Geometric Shapes**: Rectangles, Circles, Lines, and Arrows
  - **Text Annotations**: Add text anywhere on the canvas
  - **Eraser**: Selectively erase canvas elements
  - **Color Palette & Stroke Widths**: Customizable stroke colors, fill colors, and sizes
- **↩️ Undo / Redo**: History management with keyboard shortcuts (`Ctrl+Z` / `Ctrl+Y`).
- **🖌️ Hand-Drawn Aesthetic**: Styled with RoughJS for an organic, sketch-like look.

---

## 🛠️ Tech Stack

### Frontend
- **React.js**: Component-based UI architecture
- **RoughJS**: Sketch-like vector graphics rendering
- **Perfect Freehand**: Smooth, pressure-sensitive brush strokes
- **Socket.io-client**: Real-time bidirectional WebSocket communication
- **Axios**: HTTP client for REST API communication
- **React Router v7**: Client-side routing

### Backend
- **Node.js & Express.js**: RESTful API server and routing
- **Socket.io**: Real-time WebSocket server for drawing events
- **MongoDB & Mongoose**: NoSQL database for users and canvas storage (with automatic local in-memory fallback)
- **JWT & Bcrypt**: Secure token-based authentication and password encryption

---

## ⚙️ Quick Start / Installation

Follow these steps to run the application locally.

### 1. Prerequisites
- **Node.js** (v16 or higher recommended)
- **npm** (comes with Node.js)
- *(Optional)* **MongoDB** (Local instance or MongoDB Atlas connection string — the server automatically falls back to an embedded in-memory database if no URI is provided).

---

### 2. Clone the Repository

```bash
git clone https://github.com/himanshu3729k/Whiteboard.git
cd Whiteboard
```

---

### 3. Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install backend dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend/` directory:
   ```env
   PORT=5000
   JWT_SECRET=YourSuperSecretKey123!
   MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/whiteboard
   ```
   > **Note:** If `MONGO_URL` is omitted or invalid, the backend will automatically spin up an embedded in-memory MongoDB instance for local testing.

4. Start the backend server:
   ```bash
   npm start
   ```
   You should see:
   ```
   Server running on port 5000
   ✅ MongoDB Connected
   ```

---

### 4. Frontend Setup

1. Open a new terminal window and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```text
Whiteboard/
├── backend/
│   ├── config/          # Database configuration & connection
│   ├── controllers/     # Route handler logic (auth, canvas)
│   ├── middlewares/     # JWT authentication middleware
│   ├── models/          # Mongoose data schemas (User, Canvas)
│   ├── routes/          # Express API route endpoints
│   ├── server.js        # Main Express & Socket.io server entry point
│   └── package.json
│
├── frontend/
│   ├── public/          # Static assets & HTML template
│   ├── src/
│   │   ├── components/  # React components (Board, Toolbar, Toolbox, Sidebar, Login, Register)
│   │   ├── store/       # Context API state management providers
│   │   ├── utils/       # Socket client, API helpers, shape math calculations
│   │   ├── constants.js # Global tool types, action types, color constants
│   │   ├── App.js       # App root & route configurations
│   │   └── index.js     # React entry point
│   └── package.json
│
└── README.md
```

---

## 🔑 Environment Variables

| Variable | Description | Default |
| :--- | :--- | :--- |
| `PORT` | Port for the backend Express server | `5000` |
| `JWT_SECRET` | Secret key used to sign and verify JWT authentication tokens | *Required* |
| `MONGO_URL` | MongoDB connection URI string | *Optional (Falls back to local in-memory DB)* |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/himanshu3729k/Whiteboard/issues).

---

## ✒️ Author

**Himanshu**
- GitHub: [@himanshu3729k](https://github.com/himanshu3729k)