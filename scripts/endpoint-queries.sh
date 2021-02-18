#!/bin/bash

curl \
-X POST -H "Content-Type: application/json" \
--data '{ "query": "{ addItem(id: \"000\", name: \"succulent\", price:4, quantity:3){ id name price quantity} }" }' \
http://localhost:3000/dev/graphql

echo "------------------------------------------------------------------"

curl \
-X POST -H "Content-Type: application/json" \
--data '{ "query": "{ addItem(id: \"001\", name: \"Succulent pot\", price:10, quantity:3){ id name price quantity} }" }' \
http://localhost:3000/dev/graphql

echo "------------------------------------------------------------------"

curl \
-X POST -H "Content-Type: application/json" \
--data '{ "query": "{ addItem(id: \"002\", name: \"flowerpot\", price:15, quantity:1){ id name price quantity} }" }' \
http://localhost:3000/dev/graphql

echo "------------------------------------------------------------------"

curl \
-X POST -H "Content-Type: application/json" \
--data '{ "query": "{ getAllItems{ id name price quantity } }" }' \
http://localhost:3000/dev/graphql

echo "------------------------------------------------------------------"

curl \
-X POST -H "Content-Type: application/json" \
--data '{ "query": "{ getByName(name: \"succulent\"){ id name price quantity } }" }' \
http://localhost:3000/dev/graphql

echo "------------------------------------------------------------------"

curl \
-X POST -H "Content-Type: application/json" \
--data '{ "query": "{ getByID(id: \"001\"){ id name price quantity } }" }' \
http://localhost:3000/dev/graphql