import React from 'react';
require('../styles/article.css');

const ArticleNav = ({title=[]}) => {
    return (
        <div className="article-nav-button">
            {title}
        </div>
    );
}

export default ArticleNav;