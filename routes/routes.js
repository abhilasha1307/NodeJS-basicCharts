//installed
const express = require('express');
//files
const Controller = require('../controllers/controller')

const router = express.Router();

router.get('/activecases', Controller.getActiveCases);

router.get('/covidline', Controller.getCovidLine);

router.get('/recovery1', Controller.getRecoveryOne);

router.get('/recovery2', Controller.getRecoveryTwo);

router.get('/recoveryoutcome', Controller.getRecoveryOutcomeLine);

router.get('/totalcases', Controller.getTotalCases);

module.exports = router;
