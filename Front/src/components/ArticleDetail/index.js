import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const ArticleDetail = ({ article }) => {
  console.log(article);

  return (
    <div className="article-detail">
      <header className="article-detail-head">
        <h2 className="article-detail-head-title">
          {article.title}
        </h2>
        <p className="article-detail-head-subtitle">
          Rédigé Victor Hugo le 36 janvier 1478
        </p>
      </header>
      <main className="article-detail-content">
        <p>
            {article.excerpt}
        </p>
      </main>
      <footer>
        <div className="article-detail-back">
        <Link to="/articles">
          Retour à la liste des articles
        </Link>
        </div>
      </footer>
    </div>
  );
};

export default ArticleDetail;
