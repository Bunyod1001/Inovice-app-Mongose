const { makeExecutableSchema } = require('@graphql-tools/schema');
const invoices = require("./invoices");
const user = require("./user");


const schema = makeExecutableSchema({
  typeDefs: [user.typeDefs, invoices.typeDefs],
  resolvers: [invoices.resolvers, user.resolvers]
});

module.exports = schema;