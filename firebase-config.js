import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAaYrRbAQPY6WnGDi0tPyDXn60ehGTQiiQ",
  authDomain: "emotion-map-b68dd.firebaseapp.com",
  databaseURL: "https://emotion-map-b68dd-default-rtdb.firebaseio.com",
  projectId: "emotion-map-b68dd",
  storageBucket: "emotion-map-b68dd.firebasestorage.app",
  messagingSenderId: "715643955019",
  appId: "1:715643955019:web:19ea53bcc05c4512b96ace"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
