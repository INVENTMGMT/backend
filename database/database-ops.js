const AWS = require('aws-sdk');
AWS.config.update({ region: process.env.TABLE_REGION });

var config = {}

if(process.env.IS_OFFLINE) {
  config = {
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  }
}

const dynamodb = new AWS.DynamoDB.DocumentClient(config)


function get(params) {
  return new Promise((resolve, reject) =>
    dynamodb.get(params).promise()
    .then((data) => resolve(data.Item))
    .catch(err => reject(err))
    );
}

function query(params) {
  return new Promise((resolve, reject) =>
    dynamodb.get(params).promise()
    .then((data) => resolve(data.Item))
    .catch(err => reject(err))
    );
}

function scan(params) {
  return new Promise((resolve, reject) =>
    dynamodb.scan(params).promise()
    .then((data) => resolve(data.Items))
    .catch(err => reject(err))
    );
}

function createItem(params) {
  return new Promise((resolve, reject) =>
    dynamodb.update(params).promise()
      .then((data) => resolve(data.Attributes))
      .catch(err => reject(err)),
  );
}

function deleteItem(params) {
  return new Promise((resolve, reject) =>
    dynamodb.delete(params).promise()
      .then(() => resolve(params.name))
      .catch(err => reject(err)),
  );
}

module.exports = { get, query, scan, createItem, deleteItem }
