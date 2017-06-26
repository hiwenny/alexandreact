//Stateful Component
import React, { Component } from 'react';
import { ArticleBody, ArticleNav } from '../components/index';
require('../styles/article.css');

// placeholders to be replaced
let tempdata = require('../temp/data.json');
let tempActiveIndex = 0;

export class Article extends Component {

  sortTitles(data, i) {
    const titleList = data.map((val) => val.title);
    return [titleList.splice(i, 1), titleList];
  }

  render() {
    let [activeTitle, otherTitles] = this.sortTitles(tempdata, tempActiveIndex);
    return (
      <div className="article-container">
        <ArticleBody article={tempdata[0]} />
        <ArticleNav activeTitle={activeTitle} otherTitles={otherTitles} />
      </div>
    );
  }
}

export default Article;
