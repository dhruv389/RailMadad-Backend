const express = require('express');
const { createEnqury , getEnqury,  getComplaintByCategory , getComplaintByUser } = require('../controllers/Complaints');

const router = express.Router();

// router.get('/:id', getUser);
// router.post('/', createUser);
// router.post('/check', check);
router.post('/create', createEnqury);
router.get('/getdata', getEnqury);
router.get('/Categories/:category', getComplaintByCategory);
router.get('/User/:user', getComplaintByUser);

module.exports = router; 