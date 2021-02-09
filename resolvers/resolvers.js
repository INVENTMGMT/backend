const itemFunctions = require('./item-functions');

const resolvers = {
    Query: {
        addItem: (_, params) => itemFunctions.createItem(params),
        getAllItems: (_, params) => itemFunctions.getAllItems()
    },
};

module.exports = { resolvers };