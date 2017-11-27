import React, { Component } from 'react';
import './App.css';
import Input from './Input.js'

class App extends Component {
  render() {
    return (
      <div className="word-reverse">
        <header className="word-rev-header">
          <h1 className="word-rev-title">Word Reverse</h1>
        </header>
       <Input />
      </div>
    );
  }
}

export default App;
