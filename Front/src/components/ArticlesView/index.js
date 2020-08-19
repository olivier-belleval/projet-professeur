import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { slugifyTitle } from '../../utils';

const ArticlesView = ({ articles }) => (
  <div className="articles-view">
    <h1 className="articles-view-title"> Mes articles</h1>
    { articles.map((post) => (
      <article className="article">
        <div className="article-head">
          <h2 className="article-head-title">
            {post.title}
          </h2>
          <p>
            rédigé par Une dev
          </p>
        </div>
        <p className="article-excerpt">
          {post.excerpt}
        </p>
        <div className="article-route">
          <Link to={slugifyTitle(post.title)}>
            Lire la suite
          </Link>
        </div>
      </article>
    ))}

  </div>
);

export default ArticlesView;
