import { io } from "socket.io-client";

const token = localStorage.getItem("whiteboard_user_token");

// render backend
const socket = io("https://whiteboard-backend-vjls.onrender.com/", {
  extraHeaders: token ? { Authorization: `Bearer ${token}` } : {}, 
});

export default socket;