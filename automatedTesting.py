# BEFORE RUNNING THIS, MAKE SURE YOU RUN pip3 install requests
import requests
import json

# Creating the endpoint
URL = "http://localhost:3000/dev/graphql"

# Creating Post Requests for Adding 5 Items 
# for i in range(5):
#     # Create unique succlent (succulent1, succulent2, etc.) and format it as a query string
#     query = { "query": "{ addItem(name: \"succulent" + str(i) + "\", price:4, quantity:3){ name price quantity} }" }
#     queryStr = json.dumps(query)
#     r = requests.post(url=URL, data=queryStr)
#     print("Response to object #%d: %s" % (i, str(r.text)))

query = { "query": "{ deleteItem(name: \"succulent1\", price:4, quantity:3){ name price quantity} }" }
queryStr = json.dumps(query)
r = requests.post(url=URL, data=queryStr)
print(r.text)

# Test for getByName 



# Test for getAllItems

# test deleteItems
# Deleting 5 Items
# for i in range(5):
#     query = { "query": "{ deleteItem(name: \"succulent" + str(i) + "\"){ name price quantity} }" }
#     queryStr = json.dumps(query)
#     r = requests.post(url=URL, data=queryStr)
#     print("Response to object #%d: %s" % (i, str(r)))