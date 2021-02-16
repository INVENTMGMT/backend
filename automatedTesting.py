# BEFORE RUNNING THIS, MAKE SURE YOU RUN pip3 install requests
import requests
import json

# Creating the endpoint
URL = "http://localhost:3000/dev/graphql"


# Creating Post Requests for Adding 5 Items 
for i in range(5):
    # Create unique succlent (succulent1, succulent2, etc.) and format it as a query string
    query = { "query": "{ addItem(name: \"succulent" + str(i) + "\", price:"+str(i)+", quantity:"+str(i)+"){ name price quantity} }" }
    queryStr = json.dumps(query)
    r = requests.post(url=URL, data=queryStr)
    print("Response to object #%d: %s" % (i, str(r.text)))


# Test1 for getByName 
query = { "query" : "{ getByName(name: \"succulent3\"){ name price quantity } }" }
queryStr = json.dumps(query)
r = requests.post(url=URL, data=queryStr)
getByNameDict = r.json()
resultingArr = getByNameDict["data"]["getByName"]
assert(len(resultingArr) == 1)
assert(resultingArr[0]["name"] == "succulent3")
print("Test 1 passed.")

# Test2 for getByName
query = { "query" : "{ getByName(name: \"succulent\"){ name price quantity } }" }
queryStr = json.dumps(query)
r = requests.post(url=URL, data=queryStr)
getByNameDict = r.json()
assert(len(getByNameDict["data"]["getByName"]) == 5)
print("Test 2 passed.")



# Test for getAllItems
query = { "query" : "{ getAllItems{ name price quantity } }" }
queryStr = json.dumps(query)
r = requests.post(url=URL, data=queryStr)
getAllItemsDict = r.json()
assert(len(getAllItemsDict["data"]["getAllItems"]) == 5)
print("Test 3 passed.")


# Test for deleteItems by deleting items created by this test
for i in range(5):
    query = { "query": "{ deleteItem(name: \"succulent" + str(i) + "\", price:"+str(i)+", quantity:"+str(i)+"){ name price quantity} }" }
    queryStr = json.dumps(query)
    r = requests.post(url=URL, data=queryStr)
    print("Response to deletion #%d: %s" % (i, str(r.text)))
