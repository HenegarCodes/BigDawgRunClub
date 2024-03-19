const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({ userId: newUser._id, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ userId: existingUser._id, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = { signup, login };
