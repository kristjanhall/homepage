import React, { Component } from "react";
import Gravatar from "react-gravatar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Gravatar email="kristjanhall@gmail.com" size={200} rating="pg" />
          <p>kristjanhall.is</p>
        </header>
      </div>
    );
  }
}

export default App;
