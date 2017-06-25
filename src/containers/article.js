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
        {tempdata.length>0 && tempdata.map((val, i) => <ArticleNav title={val.title} key={i} />)}
      </div>
    );
  }
}

export default Article;
