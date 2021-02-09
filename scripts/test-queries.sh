#!/bin/bash

curl \
-X POST -H "Content-Type: application/json" \
--data '{ "query": "{ addItem(name: \"succulent\", price:4, quantity:2){ name price quantity} }" }' \
http://localhost:3000/dev/graphql


curl \
-X POST -H "Content-Type: application/json" \
--data '{ "query": "{ getAllItems{ name price } }" }' \
http://localhost:3000/dev/graphql