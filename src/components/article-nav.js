import React from 'react';
import { ArticleNavButton } from './index.js';
require('../styles/article.css');

const ArticleNav = ({articles=[]}) => {
    return (
        <div className="article-nav">
            {articles.length>0 && articles.map((val, i) => <ArticleNavButton title={val.title} key={i} />)}
        </div>
    );
}

export default ArticleNav;