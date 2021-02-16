const { ApolloServer, gql } = require('apollo-server-lambda');
const { resolvers } = require('./resolvers/resolvers');
const { typeDefs } = require('./typedefs/typedefs')


const server = new ApolloServer({
  typeDefs,
  resolvers
});


exports.graphqlHandler = server.createHandler(({
  cors: {
    origin: '*',
    credentials: true,
    playground: {
      endpoint: "/dev/graphql"
    }
  },
}));