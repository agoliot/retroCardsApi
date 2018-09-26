'use strict';
var mongoose = require('mongoose'),
  Column = mongoose.model('Column');

exports.create_a_column = function (req, res) {
  var new_column = new Column(req.body);
  new_column.save(function (err, column) {
    if (err)
      res.send(err);
    res.json(column);
  });
};

exports.read_a_column = function (req, res) {
  Column.findById(req.params.columnId, function (err, column) {
    if (err)
      res.send(err);
    res.json(column);
  });
};

exports.update_a_column = function (req, res) {
  Column.findOneAndUpdate({ _id: req.params.columnId }, req.body, { new: true }, function (err, column) {
    if (err)
      res.send(err);
    res.json(column);
  });
};

exports.delete_a_column = function (req, res) {
  Column.remove({
    _id: req.params.columnId
  }, function (err, column) {
    if (err)
      res.send(err);
    res.json({ message: 'Column successfully deleted' });
  });
};