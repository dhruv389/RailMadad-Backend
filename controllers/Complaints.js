const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');
const User = require('../models/User');

// Add a new complaint


// Get all complaints
const createEnqury = async (req, res) => {
  try {
    const { userId, category, description, media } = req.body;
    const complaint = new Complaint({
      user: userId,
      category,
      description,
      media
    });
    await complaint.save();
    res.status(201).json(complaint);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getEnqury = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getComplaintByUser = async (req, res) => {
  try {
    const user = req.params.user;

    // Fetch complaints by user
    const complaints = await Complaint.find({ user });

    // Check if any complaints were found
    if (complaints.length === 0) {
      return res.status(404).json({ message: 'No complaints found for this user' });
    }

    // Return the found complaints
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getComplaintByCategory = async (req, res) => {

  try {
    const category = req.params.category;

    // Validate if the category exists in the enum
    const validCategories = [
      'Coach Cleanliness',
      'Toilet Hygiene',
      'Food Quality',
      'Ticketing Issues',
      'Staff Behavior',
      'Punctuality and Delays',
      'AC/Non-AC Issues',
      'Safety Concerns',
      'Luggage Issues',
      'Reservation Problems',
      'Facilities for Differently-Abled Passengers',
      'Water Supply',
      'Noise Disturbances',
      'Electrical Issues'
    ];

    if (!validCategories.includes(category)) {
      return res.status(400).json({ message: 'Invalid category' });
    }

    // Fetch complaints by category
    const complaints = await Complaint.find({ category });

    // Check if any complaints were found
    if (complaints.length === 0) {
      return res.status(404).json({ message: 'No complaints found for this category' });
    }

    // Return the found complaints
    res.status(200).json(complaints);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};





module.exports = { createEnqury, getEnqury, getComplaintByCategory  , getComplaintByUser};
