/**
 * import modules
 */
import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

/**
 * import locals
 */
import './style.scss';

const ArticleDetail = ({ article, closeMenu }) => (
  <div className="article-detail" onClick={closeMenu}>
    <header className="article-detail-head">
      <h2 className="article-detail-head-title">
        {article.article_title}
      </h2>
      <p className="article-detail-head-subtitle" />
    </header>
    <main className="article-detail-content">
      <p
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.article_content) }}
      />
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

ArticleDetail.propTypes = {
  article: PropTypes.shape({
    article_title: PropTypes.string.isRequired,
    article_content: PropTypes.string.isRequired,
  }).isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default ArticleDetail;
