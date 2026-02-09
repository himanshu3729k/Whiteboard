const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const connectToDB = require('./config/db');
const { Server } = require("socket.io");
const http = require("http");
const Canvas = require("./models/canvasModel");
const jwt = require("jsonwebtoken");


const userRoutes = require("./routes/userRoutes");
const canvasRoutes = require("./routes/canvasRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/canvas", canvasRoutes);

connectToDB();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        // You will add your own Vercel link here later when you deploy.
        origin: ["http://localhost:3000"], 
        methods: ["GET", "POST"],
    },
});

let canvasData = {};

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
  
    socket.on("joinCanvas", async ({ canvasId }) => {
        console.log("Joining canvas:", canvasId);
        try {
            // Check for token in headers
            const authHeader = socket.handshake.headers.authorization;
            if (!authHeader || !authHeader.startsWith("Bearer ")) {
                console.log("No token provided.");
                setTimeout(() => {
                    socket.emit("unauthorized", { message: "Access Denied: No Token" });
                }, 100);
                return;
            }

            const token = authHeader.split(" ")[1];
            
            // CHANGED: Now uses your secure .env secret
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const userId = decoded.userId;
            console.log("User ID:", userId);

            const canvas = await Canvas.findById(canvasId);
            
            // Verify ownership/sharing
            if (!canvas || (String(canvas.owner) !== String(userId) && !canvas.shared.includes(userId))) {
                console.log("Unauthorized access.");
                setTimeout(() => {
                    socket.emit("unauthorized", { message: "You are not authorized to join this canvas." });
                }, 100);
                return;
            }

            socket.join(canvasId);
            console.log(`User ${socket.id} joined canvas ${canvasId}`);
  
            // Load existing canvas data
            if (canvasData[canvasId]) {
                socket.emit("loadCanvas", canvasData[canvasId]);
            } else {
                socket.emit("loadCanvas", canvas.elements);
            }
        } catch (error) {
            console.error(error);
            socket.emit("error", { message: "An error occurred while joining the canvas." });
        }
    });

    socket.on("drawingUpdate", async ({ canvasId, elements }) => {
        try {
            canvasData[canvasId] = elements;
    
            socket.to(canvasId).emit("receiveDrawingUpdate", elements);
    
            const canvas = await Canvas.findById(canvasId);
            if (canvas) {
                // Save to database
                await Canvas.findByIdAndUpdate(canvasId, { elements }, { new: true, useFindAndModify: false });
            }
        } catch (error) {
            console.error(error);
        }
    });
    
    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
    });
});

// CHANGED: Use the PORT from .env, or fallback to 5000
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));