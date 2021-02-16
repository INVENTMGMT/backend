#!/bin/bash

curl \
-X POST -H "Content-Type: application/json" \
--data '{ "query": "{ addItem(name: \"succulent\", price:4, quantity:3){ name price quantity} }" }' \
http://localhost:3000/dev/graphql

echo "------------------------------------------------------------------"

curl \
-X POST -H "Content-Type: application/json" \
--data '{ "query": "{ addItem(name: \"Succulent pot\", price:10, quantity:3){ name price quantity} }" }' \
http://localhost:3000/dev/graphql

echo "------------------------------------------------------------------"

curl \
-X POST -H "Content-Type: application/json" \
--data '{ "query": "{ addItem(name: \"flowerpot\", price:15, quantity:1){ name price quantity} }" }' \
http://localhost:3000/dev/graphql

echo "------------------------------------------------------------------"

curl \
-X POST -H "Content-Type: application/json" \
--data '{ "query": "{ getAllItems{ name price quantity } }" }' \
http://localhost:3000/dev/graphql

echo "------------------------------------------------------------------"

curl \
-X POST -H "Content-Type: application/json" \
--data '{ "query": "{ getByName(name: \"succulent\"){ name price quantity } }" }' \
http://localhost:3000/dev/graphql