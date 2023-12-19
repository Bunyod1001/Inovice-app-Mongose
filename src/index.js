const {ApolloServer} = require ("@apollo/server");
const {startStandaloneServer} = require ("@apollo/server/standalone");
const connect = require("./config/db.config");
const schema = require ("./modules")


const server = new ApolloServer({
    schema,
});

(async()=>{
    await connect();
const {url} = await startStandaloneServer(server, {
  listen:{  port:3000,
  },
});

console.log(url); 

})();