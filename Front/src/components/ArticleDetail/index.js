import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const ArticleDetail = ({ article, closeMenu }) => {
  console.log(article);


  return (
    <div className="article-detail" onClick={closeMenu}>
      <header className="article-detail-head">
        <h2 className="article-detail-head-title">
          {article.article_title}
        </h2>
        <p className="article-detail-head-subtitle">
          Rédigé {article.article_author} le 36 janvier 1478
        </p>
      </header>
      <main className="article-detail-content">
        <p>
            {article.article_excerpt}
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
