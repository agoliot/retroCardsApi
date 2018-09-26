'use strict';
var mongoose = require('mongoose'),
  Card = mongoose.model('Card'),
  Column = mongoose.model('Column');

exports.list_all = function (req, res) {
  find_all((result) => res.json(result));
};

async function find_all(callback) {
  let result = {};
  const columnResult = await Column.find({}).exec();
  const cardResult = await Card.find({}).exec();
  console.log(columnResult);
  console.log(cardResult);
  result.columns = columnResult;

  result.cards = cardResult;
  if (callback){
    callback(result);
  }
};

exports.find_all = find_all;