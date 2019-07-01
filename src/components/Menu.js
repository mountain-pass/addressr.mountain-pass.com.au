/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { login, logout } from '../utils/auth';

const Menu = ({ onToggleMenu, user }) => {
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
            <Link onClick={onToggleMenu} to="/docs">
              Docs
            </Link>
          </li>
          {user === undefined ? (
            ''
          ) : (
            <li>
              <Link onClick={onToggleMenu} to="/account">
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
                <a style={{ fontSize: '50%' }}>{user.name}</a>
              </Link>
            </li>
          )}

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

          {user === undefined ? (
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
          )}
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
