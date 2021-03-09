const itemFunctions = require('../item/item-functions');

const resolvers = {
    Query: {
        addItem: (_, params) => itemFunctions.createItem(params),
        getAllItems: (_, params) => itemFunctions.getAllItems(),
        getByName: (_, params) => itemFunctions.getByName(params),
        getByID: (_, params) => itemFunctions.getByID(params),
        deleteItem: (_, params) => itemFunctions.deleteItem(params),
        transaction: (_, params) => itemFunctions.transaction(params)
    },
};

module.exports = { resolvers };
