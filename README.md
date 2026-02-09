🎨 Real-Time Collaborative Whiteboard
A full-stack MERN application that enables users to draw, sketch, and collaborate on a digital whiteboard in real-time.

This project demonstrates proficiency in handling WebSocket connections for low-latency communication and persisting complex data structures in MongoDB.

🚀 Key Features
Real-Time Collaboration: Multiple users can draw on the same canvas simultaneously with updates synced instantly via Socket.io.

User Authentication: Secure Signup and Login functionality using JSON Web Tokens (JWT) and Bcrypt password hashing.

Persistent Canvas: Drawings are automatically saved to a MongoDB database, allowing users to reload and continue their work later.

Advanced Drawing Tools:

✏️ Freehand Drawing (Pencil) with reliable stroke smoothing.

⬜ Geometric Shapes (Rectangles, Circles).

📏 Straight Lines & Arrows.

📝 Text annotations.

History Management: Robust Undo/Redo functionality implemented with a custom history stack.

Hand-Drawn Aesthetic: Utilizes RoughJS to render shapes that look like hand-drawn sketches.

🛠️ Tech Stack
Frontend:

React.js: Component-based UI architecture.

RoughJS: For rendering sketch-like graphics.

Socket.io-client: For real-time bidirectional event communication.

Axios: For handling HTTP requests to the backend API.

Backend:

Node.js & Express.js: RESTful API and server logic.

MongoDB & Mongoose: NoSQL database for storing user credentials and canvas vector data.

Socket.io: Handling WebSocket connections and broadcasting drawing events.

JWT & Bcrypt: For secure authentication and authorization.

⚙️ Installation & Setup
Follow these steps to run the project locally on your machine.

1. Prerequisites
Ensure you have the following installed:

Node.js (v14 or higher)

MongoDB (Running locally or via MongoDB Atlas)

2. Clone the Repository
git clone https://www.google.com/search?q=https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME.git cd YOUR_REPO_NAME

3. Backend Setup
Navigate to the backend folder and install dependencies:

cd backend npm install

Create a .env file in the backend directory with your secrets:

MONGO_URL=mongodb+srv://<your_username>:<your_password>@cluster0.mongodb.net/whiteboard JWT_SECRET=YourSuperSecretKey123 PORT=5000

Start the backend server:

npm start

You should see: "✅ MongoDB Connected" and "Server running on port 5000"

4. Frontend Setup
Open a new terminal window, navigate to the frontend folder, and install dependencies:

cd frontend npm install

Start the React application:

npm start

The app should open automatically at http://localhost:3000.

🤝 Contributing
This project is open for contributions. Feel free to fork the repository and submit a Pull Request.

✒️ Author
Himanshu

This project was built to demonstrate Full Stack development skills.