import React from 'react';
require('../styles/article.css');

const ArticleNavButton = ({title=null}) => {
    return (
        <div className="article-nav-button">
            {title}
        </div>
    );
}

export default ArticleNavButton;