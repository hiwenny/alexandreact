import React, { Component } from 'react';
require('../styles/article.css');

export class Article extends Component {
  render() {
    return (
      <div className="article-container">
        <h1>Title</h1>
        <h3>While this is a subtitle</h3>
        <p>This is a p</p>
        <div>dsadadsada</div>
      </div>
    );
  }
}

export default Article;
