const db = require('../database/database-ops');
const table = 'itemsTable';

function getAllItems() {
  var params = {
    TableName: table,
    AttributesToGet: [
      'name',
      'price',
      'quantity'
    ],
  };

  return db.scan(params);
}

function createItem(item) {
  var params = {
    TableName: table,
    Item: {
      name: item.name,
      price: item.price,
      quantity: item.quantity
    }
  };

  var res = db.createItem(params);
  return res
}

module.exports = { getAllItems, createItem }