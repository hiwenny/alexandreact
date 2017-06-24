import React, { Component } from 'react';
require('../styles/article.css');

export class Article extends Component {
  // crapDataPreprocessing(text) {
  //   text.replace('<p>')
  // }

  render() {
    console.log(this.props);
    return (
      <div className="article-container">
        <h1>{this.props.content.title}</h1>
        <h3>While this is a subtitle</h3>
        <p>{this.props.content.contents}</p>
        <p style={{whiteSpace:"pre-wrap"}}>{"Hi\n ya"}</p>
        <div></div>
      </div>
    );
  }
}

export default Article;
