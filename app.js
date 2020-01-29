"use strict";
const gql = require('graphql');
const express = require('express');
const expressGQL = require('express-graphql');
const { GraphQLSchema } = gql;
const { query } = require('./schemas/queries');

const schema = new GraphQLSchema({
  query,
})

const app = express();
app.use(
  '/',
  expressGQL({
    schema: schema,
    graphiql: true
  })
);

app.listen(3000, () => 
  console.log('GraphQL server running on localhost:3000'));