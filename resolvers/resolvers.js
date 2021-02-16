const itemFunctions = require('../item/item-functions');

const resolvers = {
    Query: {
        addItem: (_, params) => itemFunctions.createItem(params),
        getAllItems: (_, params) => itemFunctions.getAllItems(),
        getByName: (_, params) => itemFunctions.getByName(params),
        deleteItem: (_, params) => itemFunctions.deleteItem(params)
    },
};

module.exports = { resolvers };