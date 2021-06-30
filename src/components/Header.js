/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ onToggleMenu }) => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong style={{ marginRight: '0' }}>Addressr</strong>
    </Link>
    <span>
      by <a href="https://mountain-pass.com.au">Mountain Pass</a>
    </span>

    <nav>
      <a className="menu-link" onClick={onToggleMenu} href="javascript:;">
        Menu
      </a>
    </nav>
  </header>
);

Header.propTypes = {
  onToggleMenu: PropTypes.func.isRequired,
};

export default Header;
