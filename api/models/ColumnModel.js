'use strict';
var mongoose = require('mongoose');
var Card = require('./CardModel');

var Schema = mongoose.Schema;

var ColumnSchema = new Schema({
  type: {
    type: String,
    required: 'Kindly enter the type of the task'
  }
});

module.exports = mongoose.model('Column', ColumnSchema);