const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activeCasesSchema = new Schema({
 CName: {
  type: String,
  required: true
 },
 valueArray: {
  type: [],
  required: true
 },
});

module.exports = mongoose.model('Recovery_1_line', activeCasesSchema, 'recoveryline1');