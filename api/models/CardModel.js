'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CardSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  type: {
    type: String,
    required: 'Kindly enter the type of the task'
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Card', CardSchema);