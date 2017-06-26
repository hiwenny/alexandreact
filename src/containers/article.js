//Stateful Component
import React, { Component } from 'react';
import { ArticleBody, ArticleNav } from '../components/index';
require('../styles/article.css');

// placeholders to be replaced
let tempdata = require('../temp/data.json');
let tempActiveIndex = 0;

export class Article extends Component {
  render() {
    return (
      <div className="article-container">
        <ArticleBody article={tempdata[0]} />
        <ArticleNav titles={tempdata.map((val) => val.title)} 
                    activeIndex={tempActiveIndex} />
      </div>
    );
  }
}

export default Article;
