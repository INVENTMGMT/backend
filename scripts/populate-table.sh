#!/bin/bash

curl \
  -X POST -H "Content-Type: application/json" \
  --data '{ "query": "{ addItem(id: \"000\", name: \"succulent\", price: 5, quantity: 3) { id } }" }' \
  http://localhost:3000/dev/graphql

echo "-----------------------------------------------------------------"

curl \
  -X POST -H "Content-Type: application/json" \
  --data '{ "query": "{ addItem(id: \"001\", name: \"bike\", price: 5, quantity: 10) { id } }" }' \
  http://localhost:3000/dev/graphql

echo "-----------------------------------------------------------------"

curl \
  -X POST -H "Content-Type: application/json" \
  --data '{ "query": "{ addItem(id: \"002\", name: \"lawn chair\", price: 5, quantity: 3) { id } }" }' \
  http://localhost:3000/dev/graphql

echo "-----------------------------------------------------------------"

curl \
  -X POST -H "Content-Type: application/json" \
  --data '{ "query": "{ addItem(id: \"003\", name: \"keyboard\", price: 5, quantity: 11) { id } }" }' \
  http://localhost:3000/dev/graphql

echo "-----------------------------------------------------------------"

curl \
  -X POST -H "Content-Type: application/json" \
  --data '{ "query": "{ addItem(id: \"004\", name: \"xbox\", price: 5, quantity: 8) { id } }" }' \
  http://localhost:3000/dev/graphql

echo "-----------------------------------------------------------------"

curl \
  -X POST -H "Content-Type: application/json" \
  --data '{ "query": "{ addItem(id: \"005\", name: \"monitor\", price: 5, quantity: 14) { id } }" }' \
  http://localhost:3000/dev/graphql

echo "-----------------------------------------------------------------"

curl \
  -X POST -H "Content-Type: application/json" \
  --data '{ "query": "{ addItem(id: \"006\", name: \"baseball bat\", price: 5, quantity: 2) { id } }" }' \
  http://localhost:3000/dev/graphql

echo "-----------------------------------------------------------------"

curl \
  -X POST -H "Content-Type: application/json" \
  --data '{ "query": "{ addItem(id: \"007\", name: \"laptop\", price: 5, quantity: 6) { id } }" }' \
  http://localhost:3000/dev/graphql

echo "-----------------------------------------------------------------"

curl \
  -X POST -H "Content-Type: application/json" \
  --data '{ "query": "{ addItem(id: \"008\", name: \"television\", price: 5, quantity: 2) { id } }" }' \
  http://localhost:3000/dev/graphql

echo "-----------------------------------------------------------------"

curl \
  -X POST -H "Content-Type: application/json" \
  --data '{ "query": "{ addItem(id: \"009\", name: \"tea kettle\", price: 5, quantity: 4) { id } }" }' \
  http://localhost:3000/dev/graphql



echo "Items placed, displaying all items present in table...\n"

curl \
  -X POST -H "Content-Type: application/json" \
  --data '{ "query": "{ getAllItems { id name price quantity } }" }' \
  http://localhost:3000/dev/graphql
