import userM from "../model/HawareM.js";

// Function to show all users (festivals)
const showusers = async (req, res) => {
    try {
        const users = await userM.find();
        res.status(200).json(users);  // Respond with a 200 status code and JSON data
    } catch (error) {
        res.status(500).json({ message: error.message });  // Respond with a 500 status code and error message
    }
};

// Function to add a new user (festival)
const addusers = async (req, res) => {
    try {
        const newUser = new userM(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);  // Respond with a 201 status code and JSON data
    } catch (error) {
        res.status(400).json({ message: error.message });  // Respond with a 400 status code and error message
    }
};

// Function to update an existing user (festival)
const updateusers = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await userM.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(updatedUser);  // Respond with a 200 status code and JSON data
    } catch (error) {
        res.status(400).json({ message: error.message });  // Respond with a 400 status code and error message
    }
};

// Function to delete an existing user (festival)
const deleteusers = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await userM.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });  // Respond with a 200 status code and JSON data
    } catch (error) {
        res.status(400).json({ message: error.message });  // Respond with a 400 status code and error message
    }
};

// Function to get a single user (festival) by ID
const singleusers = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userM.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);  // Respond with a 200 status code and JSON data
    } catch (error) {
        res.status(500).json({ message: error.message });  // Respond with a 500 status code and error message
    }
};

export { showusers, addusers, updateusers, deleteusers, singleusers };
