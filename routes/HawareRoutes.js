import express from 'express';
import {
    addusers,
    showusers,
    updateusers,
    deleteusers,
    singleusers
} from '../controllers/Hcontrollers.js';

const HawareRoutes = express.Router();

// Route to show all users
HawareRoutes.get("/", showusers);

// Route to add a new user
HawareRoutes.post("/add", addusers);

// Route to update a user by ID
HawareRoutes.put("/update/:id", updateusers);

// Route to delete a user by ID
HawareRoutes.delete("/delete/:id", deleteusers);

// Route to get a single user by ID
HawareRoutes.get("/:id", singleusers);

export default HawareRoutes;
