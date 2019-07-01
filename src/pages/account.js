import { Router } from '@reach/router';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { getProfile, isAuthenticated, login, logout } from '../utils/auth';

const Home = ({ user }) => {
  return <p>Hi, {user.name ? user.name : 'friend'}!</p>;
};

Home.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

Home.defaultProps = {
  user: undefined,
};

const Settings = () => <p>Settings</p>;
const Billing = () => <p>Billing</p>;

const Account = () => {
  if (!isAuthenticated()) {
    login();
    return <p>Redirecting to login...</p>;
  }

  const user = getProfile();

  return (
    <>
      <nav>
        <Link to="/account/">Home</Link>{' '}
        <Link to="/account/settings/">Settings</Link>{' '}
        <Link to="/account/billing/">Billing</Link>{' '}
        <a
          href="#logout"
          onClick={e => {
            logout();
            e.preventDefault();
          }}
        >
          Log Out
        </a>
      </nav>
      <Router>
        <Home path="/account/" user={user} />
        <Settings path="/account/settings" />
        <Billing path="/account/billing" />
      </Router>
    </>
  );
};

Account.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

Account.defaultProps = {
  user: undefined,
};
export default Account;
