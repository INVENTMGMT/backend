# BEFORE RUNNING THIS, MAKE SURE YOU RUN pip3 install requests
import requests
import json
import pytest

# Creating the endpoint
URL = "http://localhost:3000/dev/graphql"


# Creating Post Requests for Adding 5 Items 
def test_add_item():
    for i in range(5):
        # Create unique succlent (succulent1, succulent2, etc.) and format it as a query string
        query = { "query": "{ addItem(id:\"item"+str(i)+"\", name: \"succulent" + str(i) + "\", price:"+str(i)+", quantity:"+str(i)+"){ id name price quantity} }" }
        queryStr = json.dumps(query)
        r = requests.post(url=URL, data=queryStr)
        assert r != {}
        print("Response to object #%d: %s" % (i, str(r.text)))


# Tests for getByName 

def test_get_by_name_1():
    query = { "query" : "{ getByName(name: \"succulent3\"){ id name price quantity } }" }
    queryStr = json.dumps(query)
    r = requests.post(url=URL, data=queryStr)
    getByNameDict = r.json()
    print(getByNameDict)
    resultingArr = getByNameDict["data"]["getByName"]
    assert len(resultingArr) == 1
    assert resultingArr[0]["name"] == "succulent3"

def test_get_by_name_2():
    query = { "query" : "{ getByName(name: \"succulent2\"){ id name price quantity } }" }
    queryStr = json.dumps(query)
    r = requests.post(url=URL, data=queryStr)
    getByNameDict = r.json()
    resultingArr = getByNameDict["data"]["getByName"]
    assert len(resultingArr) == 1
    assert resultingArr[0]["name"] == "succulent2"

def test_get_by_name_3():
    query = { "query" : "{ getByName(name: \"succulent\"){ id name price quantity } }" }
    queryStr = json.dumps(query)
    r = requests.post(url=URL, data=queryStr)
    getByNameDict = r.json()
    resultingArr = getByNameDict["data"]["getByName"]
    assert len(resultingArr) == 5


def test_get_by_name_4():
    query = { "query" : "{ getByName(name: \"eggplant\"){ id name price quantity } }" }
    queryStr = json.dumps(query)
    r = requests.post(url=URL, data=queryStr)
    getByNameDict = r.json()
    assert(len(getByNameDict["data"]["getByName"]) == 0)


# Tests for getByID

# Test for getAllItems

def test_get_all_items():
    query = { "query" : "{ getAllItems{ id name price quantity } }" }
    queryStr = json.dumps(query)
    r = requests.post(url=URL, data=queryStr)
    getAllItemsDict = r.json()
    assert(len(getAllItemsDict["data"]["getAllItems"]) == 5)




# Test for deleteItems by deleting items created by this test
def test_delete_items():
    for i in range(5):
        query = { "query": "{ deleteItem(id:\"item"+str(i)+"\"){ id name price quantity} }" }
        queryStr = json.dumps(query)
        r = requests.post(url=URL, data=queryStr)
        assert r != {}
        print("Response to deletion #%d: %s" % (i, str(r.text)))
