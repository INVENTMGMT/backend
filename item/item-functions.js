const db = require('../database/database-ops');
const table = 'itemsTable';

function getByName(params) {
  var params = {
    TableName: table,
    /* !!! IMPORTANT DYNAMODB SYNTAX !!! */
    
    // 'name' is a reserved variable in DynamoDB, so 
    // we use the statement below to map 'name'
    // attribute to '#name', where the DB will 
    // interpret it correctly

    ExpressionAttributeNames: {
      '#name': 'name'
    },
    ExpressionAttributeValues: {
      ':itemName': params.name
    },
    FilterExpression: 'contains(#name, :itemName)',
  };

  return db.scan(params);
}

function getByID(params) { 
  var params = {
    TableName: table,
    Key: {
      id: params.id
    }
  }

  return db.query(params)
}

function getAllItems() {
  var params = {
    TableName: table,
    AttributesToGet: [
      'id',
      'name',
      'price',
      'quantity'
    ],
  };

  var res = db.scan(params);
  return res;
}

function createItem(item) {
  var name = item.name;
  name = name.toLowerCase()
  var params = {
    TableName: table,
    Item: {
      id: item.id,
      name: name,
      price: item.price,
      quantity: item.quantity
    }
  };

  var res = db.createItem(params);
  return res
}

function deleteItem(params) {
  var params = {
    TableName: table,
    Key: {
      name: params.name,
      price: params.price
    },
  };
  
  return db.deleteItem(params);
}

module.exports = { getAllItems, createItem, getByName, getByID, deleteItem }