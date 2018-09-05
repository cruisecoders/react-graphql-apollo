var express=require('express');
var express_graphql=require('express-graphql');
var { buildSchema } = require('graphql');
var cors=require("cors");

var schema=buildSchema(`
	type Query{
		course(id: Int!): Course
		courses(topic:  String): [Course]
     }
     type Course{
     	id: Int
     	title: String
     	author: String
     	description: String
     	topic: String
     	url: String
     }
`);
var coursesData=[
       {
         id: 1,
         title: "The complete NOde.j Developer Course",
         author:"hema",
         description: "learn graphql",
         topic: "Node.js",
         url: "www.sjxj.com"
        }]

 var getCourse = function(args){
 	var id=args.id;
 	return coursesData.filter(course=>{
 		return course.id==id;
 	})[0];
 }

 var getCourses = function(args){
 	if(args.topic){
 		var topic=args.topic;
 		return coursesData.filter(courses => course.topic === topic)

 	}
 	else
 	{
 		return coursesData;
 	}

 }


var root={
	course: getCourse,
	courses: getCourses
}
var app = express();
app.use(cors());

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));



app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));