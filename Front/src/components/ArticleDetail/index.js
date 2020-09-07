import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import DOMPurify from "dompurify";

const ArticleDetail = ({ article, closeMenu }) => {

  return (
    <div className="article-detail" onClick={closeMenu}>
      <header className="article-detail-head">
        <h2 className="article-detail-head-title">
          {article.article_title}
        </h2>
        <p className="article-detail-head-subtitle">
        </p>
      </header>
      <main className="article-detail-content">
        <p
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.article_content) }}>

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
