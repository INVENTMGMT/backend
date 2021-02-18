const { gql } = require('apollo-server-lambda')

const typeDefs = gql`

  type Query {
    addItem(id: ID, name: String, price: Int, quantity: Int): Item
    getAllItems: [Item]
    getByName(name: String): [Item]
    deleteItem(id: ID, name: String, price:Int, quantity:Int): Item
  }

  type Item {
    id: ID
    name: String
    price: Int
    quantity: Int
  }
`;

module.exports = { typeDefs }