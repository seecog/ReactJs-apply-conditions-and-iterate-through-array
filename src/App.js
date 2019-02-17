import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sachin from  './Sachin';
import Employee from './Employee';
import Dravid from './Dravid';
import axios from 'axios';
class App extends Component {

  constructor(){
    super();
    this.state = {
      posts : []
    }
  }

componentDidMount(){
axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
console.log('The bet response is ',res.data);
this.setState({
  posts : res.data
})
})
.catch((err)=>{
  console.log('The error is ',err);
});
}

  render() {
    return (
      <div className="App">
       <Sachin /><hr/><Dravid />
      </div>
    );
  }
}

export default App;
