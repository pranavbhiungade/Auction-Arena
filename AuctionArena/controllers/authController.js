const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Team = require("../models/team");
const Admin = require("../models/admin");

exports.register = async (req, res) => {
  try {
    const { name, password, confirmPassword } = req.body;

    // Check if all fields are entered
    if (!name || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if user already exists
    const existingTeam = await Team.findOne({ name });
    if (existingTeam) {
      return res.status(400).json({ message: "Team already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new team
    const newTeam = new Team({
      name,
      password: hashedPassword,
      confirmPassword: hashedPassword, // Storing hashed password for confirmPassword
    });

    // Save the new team
    await newTeam.save();
    res.status(201).json({ message: "Team registered successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { name, password, role } = req.body;

    // Check if all fields are entered
    if (!name || !password || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let user;
    if (role === "team") {
      user = await Team.findOne({ name });
    } else if (role === "admin") {
      user = await Admin.findOne({ username: name });
    } else {
      return res.status(400).json({ message: "Invalid role" });
    }

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
