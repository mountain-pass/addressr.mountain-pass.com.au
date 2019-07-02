/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { login, logout } from '../utils/auth';

const Menu = ({ onToggleMenu, user }) => {
  var acc = '';
  if (user !== undefined) {
    acc = (
      <li>
        <Link onClick={onToggleMenu} to="/r/account">
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
  const loginout =
    user === undefined ? (
      <li>
        <a
          href="#login"
          className="button fit"
          onClick={e => {
            login();
            e.preventDefault();
          }}
        >
          Log In
        </a>
      </li>
    ) : (
      <li>
        <a
          href="#logout"
          className="button fit"
          onClick={e => {
            logout();
            e.preventDefault();
          }}
        >
          Log Out
        </a>
      </li>
    );
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
            <Link onClick={onToggleMenu} to="/pricing">
              Pricing
            </Link>
          </li>
          <li>
            <Link onClick={onToggleMenu} to="/r/docs">
              Docs
            </Link>
          </li>
          <li>
            <Link onClick={onToggleMenu} to="/r/downloads">
              Downloads
            </Link>
          </li>
          {acc}
        </ul>
        <ul className="actions vertical">
          {/* 
          https://auth0.com/docs/libraries/auth0js/v9#signup
          <li>
            <a
              href="#"
              className="button special fit"
              onClick={e => {
                signup();
                e.preventDefault();
              }}
            >
              Get Started
            </a>
          </li> */}

          {loginout}
        </ul>
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
