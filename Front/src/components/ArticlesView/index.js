import React, { useEffect } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { slugifyTitle } from '../../utils';

const ArticlesView = ({ list, getArticles, closeMenu }) => {
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="articles-view" onClick={closeMenu}>
      <div className="articles-view-title"> Mes articles</div>
      { list.map((post) => (
        <article className="article" key={post.article_title}>
          <div className="article-head">
            <h2 className="article-head-title" key={post.article_title}>
              {post.article_title}
            </h2>

          </div>
          <p className="article-excerpt" key={post.article_excerpt}>
            {post.article_excerpt}
          </p>
          <div className="article-route">
            <Link to={`article/${slugifyTitle(post.article_title)}`} key={post.article_id}>
              Lire la suite
            </Link>
          </div>
        </article>
      ))}

    </div>
  );
};

export default ArticlesView;
