import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title";
import Grid from "./components/Grid";
import Box from "./components/Box";
import Buttons from "./components/Buttons";

class App extends Component {

  render() {
    return (
      <div className="App container">
      <Title/>
      <Grid/>
       {/*<Buttons/>*/}
      <Box/>
      </div>
    );
  }
}

export default App;
