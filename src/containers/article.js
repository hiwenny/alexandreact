import React, { Component } from 'react';
require('../styles/article.css');

export class Article extends Component {
  render() {
    console.log(this.props);
    let { content } = this.props;
    return (
      <div className="article-container">
        <h1>{content[1].title}</h1>
        <p>{content[1].content}</p>
        <div></div>
      </div>
    );
  }
}

export default Article;
