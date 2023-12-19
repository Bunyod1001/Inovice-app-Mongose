const {resolve} = require ("path");
const { readFileSync } = require("fs");
const userResolvers = require("./user.resolvers");
// const typeDefs = require('./path-to-your-schema');

const graphqlSchema = readFileSync(resolve("src", "modules", "user", "user.types.gql"), "utf-8");

module.exports = {
    resolvers: userResolvers,
    typeDefs:  graphqlSchema,
}