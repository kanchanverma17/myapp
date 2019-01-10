import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Connect } from 'aws-amplify-react';
import { API, graphqlOperation } from 'aws-amplify'
import {createBlog} from './graphql/mutations'
import Amplify from '@aws-amplify/core'
import config from './aws-exports'
import { Grid, Header, Input, List, Segment } from 'semantic-ui-react';
import PostViewer from './PostViewer';
Amplify.configure(config)



class App extends Component {


  render() {

    return (
      <div className="App">
       <h1>Hello World!</h1>
<button onClick = {myFunc}>add Record</button>

      </div>
    );
  }
}

function myFunc()
{
   API.graphql(graphqlOperation(createBlog, { input: {name : "blog4"}}));
}

function showList()
{

    // return (
    //   <main>
    //     <PostViewer />
    //   </main>
    // );

   //API.graphql(graphqlOperation(createBlog, { input: {name : "blog2"}}));
}

export default App;
