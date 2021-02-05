const { gql } = require('apollo-server-lambda')

const typeDefs = gql`

  type Query {
    hello: String
  }
`;

module.exports = { typeDefs }