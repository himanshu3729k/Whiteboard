import { io } from "socket.io-client";

const token = localStorage.getItem("whiteboard_user_token");

// CHANGED: Now connects to your local backend server
const socket = io("http://localhost:5000", {
  extraHeaders: token ? { Authorization: `Bearer ${token}` } : {}, 
});

export default socket;