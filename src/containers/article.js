//Stateful Component
import React, { Component } from 'react';
import { ArticleBody, ArticleNav } from '../components/index';
require('../styles/article.css');

let tempdata = require('../temp/data.json');

export class Article extends Component {
  render() {
    return (
      <div className="article-container">
        <ArticleBody article={tempdata[0]} />
        <ArticleNav articles={tempdata} />
      </div>
    );
  }
}

export default Article;
