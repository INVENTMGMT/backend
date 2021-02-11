const itemFunctions = require('../item/item-functions');

const resolvers = {
    Query: {
        addItem: (_, params) => itemFunctions.createItem(params),
        getAllItems: (_, params) => itemFunctions.getAllItems(),
        getByName: (_, params) => itemFunctions.getByName(params)
    },
};

module.exports = { resolvers };