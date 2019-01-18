import React, { Component } from 'react';
import './App.css';
import Conversation from './page/conversation';

class App extends Component {
  render() {
    return (
      <div className="App">
      <input className="switch" id="switch" type="checkbox" />
      <label htmlFor="switch" >开关</label>
      <Conversation/>
      </div>
    );
  }
}

export default App;
