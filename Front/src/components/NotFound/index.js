/**
 * import modules
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * import locals
 */
import './style.scss';

const NotFound = () => (
  <div className="not-found">
    <h2>
      Oops.
      Te voilà perdu.
    </h2>

    <img
      src="https://images2.imgbox.com/e4/89/dxSFZbAX_o.png"
      alt="404Img"
    />
    <NavLink exact to="/">Retourner en terres connues.</NavLink>

  </div>
);
export default NotFound;
