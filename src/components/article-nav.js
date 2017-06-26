import React from 'react';
import { ArticleNavButton } from './index';

const ArticleNav = ({titles=[], activeIndex=0}) => {
    return (
        <div className="article-nav">
            {/*<ArticleNavButton title={activeTitle} active={true}/>
            {otherTitles.length>0 && otherTitles.map((val, i) => <ArticleNavButton title={val} active={false} key={i} />)}*/}
            {titles.length>0 && titles.map((val, i) => {
                if (i === activeIndex) {
                    return <ArticleNavButton title={val} active={true} key={i} />
                }
                return <ArticleNavButton title={val} active={false} key={i} />
                })
            }
        </div>
    );
}

export default ArticleNav;