import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const Courses=()=>(
	<Query query={gql`
		{
		  course(id: 1){
		    title
		    author
		    description
		    topic
		  }
		}

		`}>
		 {({ loading, error, data }) => {
      if (loading) return "Loading...";
			if (error) return `Error! ${error.message}`;
		 console.log(data);
		 return(
			 <div>
				 {data.course.author}
			 </div>
		 )
		}}
		</Query>
		

	);
export default Courses;


