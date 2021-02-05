const { ApolloServer, gql } = require('apollo-server-lambda');
const { resolvers } = require('./resolvers');
const { typeDefs } = require('./typedefs')


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