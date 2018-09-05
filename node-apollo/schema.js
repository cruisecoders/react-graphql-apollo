var resolvers=require('./resolver.js');
const { makeExecutableSchema }= require('graphql-tools');
const typeDefs=[`
type Query {
     hello: String
  }
`];
const schema=makeExecutableSchema({
	typeDefs,
	resolvers
});
module.exports=schema;