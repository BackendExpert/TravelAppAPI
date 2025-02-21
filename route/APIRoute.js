const express = require('express');
const ApiController = require('../controller/ApiController');

const router = express.Router();

router.get('/alllocations', ApiController.alllocations)

module.exports = router;