import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const ArticleDetail = () => {
  console.log('article detail comp');
  return (
    <div className="article-detail">
      <header className="article-detail-head">
        <h2 className="article-detail-head-title">
          Titre de notre article
        </h2>
        <p className="article-detail-head-subtitle">
          Rédigé Victor Hugo le 36 janvier 1478
        </p>
      </header>
      <main className="article-detail-content">
        <p>
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
