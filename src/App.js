import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Courses from './courses';
const client=new ApolloClient({
 uri: "http://localhost:4000/graphql"
});

const App= () =>(
  <ApolloProvider client={client}>
  <div>
   <Courses />
  </div>
  </ApolloProvider>
  )

export default App;
