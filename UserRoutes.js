const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// CRUD Routes
router.post("/", userController.createUser);     // Create
router.get("/", userController.getUsers);         // Read all
router.get("/:id", userController.getUserById);   // Read one
router.put("/:id", userController.updateUser);    // Update
router.delete("/:id", userController.deleteUser); // Delete

module.exports = router;
