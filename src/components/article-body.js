import React from 'react';
require('../styles/article.css');

const ArticleBody = ({article=[]}) => {
    return (
        <div className="article-body">
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
}

export default ArticleBody;