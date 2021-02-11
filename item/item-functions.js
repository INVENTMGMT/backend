const db = require('../database/database-ops');
const table = 'itemsTable';

function getByName(params) {
  var params = {
    TableName: table,
    // AttributesToGet: [
    //   'name',
    //   'price',
    //   'quantity'
    // ],
    ExpressionAttributeNames: {
      '#name': 'name'
    },
    ExpressionAttributeValues: {
      ':itemName': params.name
    },
    FilterExpression: 'contains(#name, :itemName)',
  };

  var res = db.scan(params);
  return res;
}

function getAllItems() {
  var params = {
    TableName: table,
    AttributesToGet: [
      'name',
      'price',
      'quantity'
    ],
  };

  var res = db.scan(params);
  return res;
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

module.exports = { getAllItems, createItem, getByName }