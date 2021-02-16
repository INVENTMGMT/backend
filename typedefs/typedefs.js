const { gql } = require('apollo-server-lambda')

const typeDefs = gql`

  type Query {
    addItem(name: String, price: Int, quantity: Int): Item
    getAllItems: [Item]
    getByName(name: String): [Item]
    deleteItem(name: String, price:Int, quantity:Int): Item
  }

  type Item {
    name: String
    price: Int
    quantity: Int
  }
`;

module.exports = { typeDefs }