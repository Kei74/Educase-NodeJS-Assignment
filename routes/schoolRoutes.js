const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController');

// Lists all schools, sorted by distance to user based on query params
// query params: latitude, longitude
router.get('/listSchools', schoolController.listSchools);


router.post('/addSchool', schoolController.addSchool);

module.exports = router;