import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title";
import Grid from "./components/Grid";
import Box from "./components/Box";

class App extends Component {

  render() {
    return (
      <div className="App container">
      <Title/>
      <Grid/>
      <Box/>
      </div>
    );
  }
}

export default App;
