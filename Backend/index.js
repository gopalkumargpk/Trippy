import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"; // Import the cors package
import Message from './model/Message.js'; // Ensure the correct path

dotenv.config();

const app = express();

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.DB_URL;

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Connected to MongoDB");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
  process.exit(1);
});

// API route to handle contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Create a new message document
    const newMessage = new Message({
      name,
      email,
      message,
    });

    // Save the message to the database
    await newMessage.save();

    // Send a success response back to the client
    res.status(201).json({ message: 'Message stored successfully' });
  } catch (error) {
    console.error('Error storing message:', error);
    res.status(500).json({ error: 'Failed to store message' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
