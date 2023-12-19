const invoiceResolvers = require("./invoice.resolvers");
const {resolve} = require ("path");
const { readFileSync } = require("fs");
// const typeDefs = require('./path-to-your-schema');

const graphqlSchema = readFileSync(resolve("src", "modules", "invoices","invoices.types.gql"), "utf-8");
module.exports = {
    resolvers: invoiceResolvers,
    typeDefs:  graphqlSchema,
}