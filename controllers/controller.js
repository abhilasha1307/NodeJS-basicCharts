const activecases = require('../models/active-cases.js');
const totalcases = require('../models/total-cases');
const covidline = require('../models/covid-line');
const recoveryOne = require('../models/recovery1');
const recoveryTwo = require('../models/recovery2');
const recoveryoutcomeline = require('../models/recovery_outcome_line');

exports.getActiveCases = (req, res, next) => {
 activecases.find()
  .then(data => {
   res.json(data);
  }).catch(err => {
   console.log(err)
  })
};

exports.getTotalCases = (req, res, next) => {
 totalcases.find().then(data => {
  res.json(data);
 }).catch(err => {
  console.log(err)
 })
};

exports.getCovidLine = (req, res, next) => {
 covidline.find().then(data => {
  res.json(data);
 }).catch(err => {
  console.log(err)
 })
};

exports.getRecoveryOne = (req, res, next) => {
 recoveryOne.find().then(data => {
  res.json(data);
 }).catch(err => {
  console.log(err)
 })
};

exports.getRecoveryTwo = (req, res, next) => {
 recoveryTwo.find().then(data => {
  res.json(data);
 }).catch(err => {
  console.log(err)
 })
};

exports.getRecoveryOutcomeLine = (req, res, next) => {
 recoveryoutcomeline.find().then(data => {
  res.json(data);
 }).catch(err => {
  console.log(err)
 })
};