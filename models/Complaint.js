const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  user: {
    type: String,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    enum: [
      'Engineering Department',
    'Electrical Department',
    'Traffic Department',
    'Medical Department',
    'Security Department',
    'Sanitation Department',
    'Food Department',
    ],
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Resolved', 'Closed'],
    default: 'Pending'
  },
  media: [
    {
      fileType: { type: String, enum: ['Image', 'Video', 'Audio'], required: true },
      url: { type: String, required: true }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
} );

module.exports = mongoose.model('Complaint', complaintSchema);
