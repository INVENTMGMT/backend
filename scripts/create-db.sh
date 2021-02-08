#!/bin/bash

aws dynamodb create-table \
   --table-name questionsTable \
   --attribute-definitions AttributeName=wording,AttributeType=S AttributeName=category,AttributeType=S \
   --key-schema AttributeName=wording,KeyType=HASH AttributeName=category,KeyType=RANGE \
   --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
   --region localhost \
   --endpoint-url http://localhost:8000