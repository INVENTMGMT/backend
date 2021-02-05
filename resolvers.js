const resolvers = {
    Query: {
        hello: (_, params) => "Hello from Apollo Server!",
    },
};

module.exports = { resolvers };