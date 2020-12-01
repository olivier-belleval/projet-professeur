/**
 * import modules
 */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * import locals
 */
import './style.scss';
import { slugifyTitle } from '../../utils';

const ArticlesView = ({
  list,
  getArticles,
  closeMenu,
  username,
  teacher,
  isLogged,
}) => {
  if (isLogged) {
    useEffect(() => {
      getArticles();
    }, []);
  }

  const filteredList = list.filter((post) => post.class_username);

  return (
    <div className="articles-view" onClick={closeMenu}>
      <div className="articles-view-title"> Mes articles
        <hr />
        <span className="kanbans-view-head-subtitle">
          {username}
        </span>
      </div>
      { filteredList.map((post) => (
        <article className="article" key={post.article_title}>
          <div className="article-head">
            <h2 className="article-head-title" key={post.article_title}>
              {post.article_title}
            </h2>

            { teacher && typeof post.class_username
              && post.class_username.map((classes, index) => (
                <span className="classusername-teacher" key={index}> {classes}
                </span>
              ))}

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

ArticlesView.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    article_id: PropTypes.number.isRequired,
    article_title: PropTypes.string.isRequired,
    class_username: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    article_excerpt: PropTypes.string.isRequired,
  })).isRequired,
  getArticles: PropTypes.func.isRequired,
  closeMenu: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  teacher: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default ArticlesView;
