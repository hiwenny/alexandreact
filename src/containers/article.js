import React, { Component } from 'react';
require('../styles/article.css');

export class Article extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="article-container">
        <h1>{this.props.content.title}</h1>
        <p>{this.props.content.contents}</p>
        <div></div>
      </div>
    );
  }
}

export default Article;
