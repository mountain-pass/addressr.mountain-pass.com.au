import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/main.scss';
import { getProfile, isAuthenticated, login } from '../utils/auth';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Menu from './Menu';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  handleToggleMenu() {
    this.setState(prevState => ({
      isMenuVisible: !prevState.isMenuVisible,
    }));
  }

  render() {
    const { children } = this.props;
    const { loading, isMenuVisible } = this.state;
    const isRestrictedPage =
      typeof window !== 'undefined' &&
      window.location.pathname.startsWith('/r/');
    if (isRestrictedPage && !isAuthenticated()) {
      login();
      return (
        <div
          className={`body ${loading} ${
            isMenuVisible ? 'is-menu-visible' : ''
          }`}
        >
          <div id="wrapper">
            <Header onToggleMenu={this.handleToggleMenu} />
            <Helmet>
              <title>Addressr by Mountain Pass</title>
              <meta name="description" content="Addressr by Mountain Pass" />
            </Helmet>

            <div id="main" className="alt">
              <section id="one">
                <div className="inner">
                  <p>Redirecting to login...</p>
                  {/* TODO: Add spinner */}
                </div>
              </section>
            </div>
            <Footer />
          </div>
          <Menu onToggleMenu={this.handleToggleMenu} />
        </div>
      );
    } else {
      const user = getProfile();
      return (
        <div
          className={`body ${loading} ${
            isMenuVisible ? 'is-menu-visible' : ''
          } `}
        >
          <div id="wrapper">
            <Header onToggleMenu={this.handleToggleMenu} />
            {children}
            <Contact user={user} />
            <Footer />
          </div>
          <Menu onToggleMenu={this.handleToggleMenu} user={user} />
        </div>
      );
    }
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
