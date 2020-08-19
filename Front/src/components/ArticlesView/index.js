import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const ArticlesView = (isLogged) => {
  console.log(isLogged);
  return (
    <div className="articles-view">
    <h1 className="articles-view-title"> Mes articles</h1>
      <article className="article">
        <div className="article-head">
          <h2 className="article-head-title">
            Premier article
          </h2>
          <p>
          rédigé par Une dev
          </p>
        </div>
        <p className="article-excerpt">
                  Je suis comme la licorne1
          En extase devant la jeune fille
          Dont elle ne détache pas ses regards.
          Elle éprouve un si doux malaise
          Qu’elle tombe sans connaissance en son giron2.
          Alors on la met à mort par traîtrise.
          De même Amour et ma dame
          M’ont blessé à mort, en vérité :
          Ils ont mon coeur et je ne puis le reprendre.
        </p>
        <div className="article-route">
          <Link to="/article">
            Lire la suite
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticlesView;
