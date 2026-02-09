// utils/api.js
import axios from "axios";

// CHANGED: Now points to your local backend
const API_BASE_URL = "http://localhost:5000/api/canvas"; 

const token = localStorage.getItem('whiteboard_user_token');
const canvasId = localStorage.getItem('canvas_id');

export const updateCanvas = async (canvasId, elements) => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/update`,
      { canvasId, elements },
      {
        headers: {
          // Ensure "Bearer" is included if your backend expects it (based on authMiddleware)
          Authorization: `Bearer ${token}`, 
        },
      }
    );
    console.log("Canvas updated successfully in the database!", response.data);
    return response.data;
  } catch (error) {
     console.error("Error updating canvas:", error);
  }
};

export const fetchInitialCanvasElements = async (canvasId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/load/${canvasId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.elements;
  } catch (error) {
    console.error("Error fetching initial canvas elements:", error);
  }
};