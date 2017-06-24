import React, { Component } from 'react';
import { Article } from './containers/index';
require('./styles/main.css');
var tempdata = require('./temp/data.json');

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Article content={tempdata}/>
      </div>
    );
  }
}
