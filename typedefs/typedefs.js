const { gql } = require('apollo-server-lambda')

const typeDefs = gql`

  type transaction {
    id: ID
    quantity: Int
    shipped: Boolean
    address: String
  }

  type Item {
    id: ID
    name: String
    price: Int
    quantity: Int
  }

  type Query {
    addItem(id: ID, name: String, price: Int, quantity: Int): Item
    getAllItems: [Item]
    getByName(name: String): [Item]
    getByID(id: ID): Item
    deleteItem(id: ID, name: String, price:Int, quantity:Int): Item
    transaction(itemId: ID, quantity: Int, ship: Boolean, address: String): Item
  }

`;

module.exports = { typeDefs }
