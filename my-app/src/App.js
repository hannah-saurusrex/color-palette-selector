import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Palette from './Palette';

class App extends Component {
  state = { selectedColor: "blue", palette: [] };

  render() {
    return (
      <div className="App">
        <Palette />
        <CssOptions />
      </div>
    );
  }
}


export default App;
