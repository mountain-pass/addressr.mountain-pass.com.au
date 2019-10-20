/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Menu = ({ onToggleMenu, user }) => {
  var acc = '';
  if (user !== undefined) {
    acc = (
      <li>
        <Link onClick={onToggleMenu} to="/r/account/">
          <span>
            <img
              src={user.picture}
              alt="user"
              style={{
                width: '2em',
                marginRight: '1em',
                borderRadius: '100%',
                verticalAlign: 'middle',
              }}
            />
          </span>
          <span>Account</span>
        </Link>
      </li>
    );
  }

  return (
    <nav id="menu">
      <div className="inner">
        <ul className="links">
          <li>
            <Link onClick={onToggleMenu} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={onToggleMenu} to="/pricing/">
              Pricing
            </Link>
          </li>
          <li>
            <Link onClick={onToggleMenu} to="/api-docs/">
              API Docs
            </Link>
          </li>
          <li>
            <Link onClick={onToggleMenu} to="/download/">
              Download
            </Link>
          </li>
          <li>
            <Link onClick={onToggleMenu} to="/quick-start/">
              Quick Start
            </Link>
          </li>
          <li>
            <Link onClick={onToggleMenu} to="/community-support">
              Community Support
            </Link>
          </li>
          {acc}
        </ul>{' '}
      </div>
      <a className="close" onClick={onToggleMenu} href="javascript:;">
        Close
      </a>
    </nav>
  );
};

Menu.propTypes = {
  onToggleMenu: PropTypes.func.isRequired,
  user: PropTypes.shape({
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

Menu.defaultProps = {
  user: undefined,
};

export default Menu;
