import React, { Component } from 'react';
import { Article } from './containers/index';
require('./styles/main.css');

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Article />
      </div>
    );
  }
}
