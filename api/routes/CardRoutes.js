'use strict';
module.exports = function (app) {
  var cardController = require('../controllers/CardController');
  var columnController = require('../controllers/ColumnController');
  var allController = require('../controllers/AllController');

  // Column Routes
  app.route('/allDatas')
    .get(allController.list_all);

  app.route('/columns')
    .post(columnController.create_a_column);

  app.route('/columns/:columnId')
    .get(columnController.read_a_column)
    .put(columnController.update_a_column)
    .delete(columnController.delete_a_column);

  // Cards Routes
  app.route('/cards')
    .post(cardController.create_a_card);


  app.route('/cards/:cardId')
    .get(cardController.read_a_card)
    .put(cardController.update_a_card)
    .delete(cardController.delete_a_card);
};