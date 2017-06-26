import React from 'react';
import { ArticleNavButton } from './index';

const ArticleNav = ({activeTitle=null, otherTitles=[]}) => {
    return (
        <div className="article-nav">
            <ArticleNavButton title={activeTitle} active={true}/>
            {otherTitles.length>0 && otherTitles.map((val, i) => <ArticleNavButton title={val} active={false} key={i} />)}
        </div>
    );
}

export default ArticleNav;