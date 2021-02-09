const { createItem, getAllItems } = require('./item-functions');


var item = {
    name: "flowerpot",
    price: 5,
    quantity: 2
}
// async tho
test("adds item to local db correctly and returns gql response", () => {
    expect(createItem(item)).toBe()
})