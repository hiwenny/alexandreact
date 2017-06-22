import React, { Component } from 'react';
require('../styles/article.css');

export class Article extends Component {
  render() {
    return (
      <div className="article-container">
        An article is i
        <h3>Title</h3>
        <h4>While this is a subtitle</h4>
        <p>This is a p</p>
      </div>
    );
  }
}

export default Article;
