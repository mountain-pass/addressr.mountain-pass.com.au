/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Menu = ({ onToggleMenu, onToggleMenuToLogin }) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <a onClick={onToggleMenuToLogin} href="javascript:;">
            Docs
          </a>
        </li>
        {/* <li>
          <Link onClick={onToggleMenu} to="/landing">
            Landing
          </Link>
        </li>
        <li>
          <Link onClick={onToggleMenu} to="/generic">
            Generic
          </Link>
        </li>
        <li>
          <Link onClick={onToggleMenu} to="/elements">
            Elements
          </Link>
        </li> */}
      </ul>
      <ul className="actions vertical">
        <li>
          <a href="#" className="button special fit">
            Get Started
          </a>
        </li>
        {/* <li>
          <a href="#" className="button fit">
            Log In
          </a>
        </li> */}
      </ul>
    </div>
    <a className="close" onClick={onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
);

Menu.propTypes = {
  onToggleMenu: PropTypes.func.isRequired,
  onToggleMenuToLogin: PropTypes.func.isRequired,
};

export default Menu;
