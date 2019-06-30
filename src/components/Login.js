/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import React from 'react';

const Login = ({ onToggleLogin }) => (
  <nav id="login">
    <div className="inner">
      <ul className="actions vertical">
        <li>
          <input
            type="email"
            name="email"
            id="email"
            defaultValue=""
            placeholder="email"
          />
        </li>
        <li>
          <input
            type="password"
            name="password"
            id="password"
            defaultValue=""
            placeholder="password"
          />
        </li>
        <li>
          <a href="#" className="button fit">
            Log In
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={onToggleLogin} href="javascript:;">
      Close
    </a>
  </nav>
);

Login.propTypes = {
  onToggleLogin: PropTypes.func.isRequired,
};

export default Login;
