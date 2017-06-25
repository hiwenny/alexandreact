//Stateful Component
import React, { Component } from 'react';
import { ArticleBody } from '../components/index';
require('../styles/article.css');

let tempdata = require('../temp/data.json');

export class Article extends Component {
  render() {
    return (
      <div className="article-container">
        {tempdata.length>0 && tempdata.map((val) => <ArticleBody article={val} />)}
      </div>
    );
  }
}

export default Article;
