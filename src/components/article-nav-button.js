import React from 'react';

const ArticleNavButton = ({title=null, active=false}) => {
    return (
        <div className={active ? "article-nav-button active" : "article-nav-button"}>
            {title}
        </div>
    );
}

export default ArticleNavButton;