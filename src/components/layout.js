import PropTypes from 'prop-types';
import React from 'react';
import Drift from 'react-driftjs';
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

    (function() {
      console.log('inspectletjs');
      if (
        typeof window !== 'undefined' &&
        document.location.hostname == 'windyroad.com.au'
      ) {
        const insp_ab_loader = true; // set this boolean to false to disable the A/B testing loader
        window.__insp = window.__insp || [];
        window.__insp.push(['wid', 1654706623]);
        const ldinsp = function() {
          if (typeof window.__inspld !== 'undefined') return;
          window.__inspld = 1;
          const insp = document.createElement('script');
          insp.type = 'text/javascript';
          insp.async = true;
          insp.id = 'inspsync';
          insp.src = `${
            document.location.protocol == 'https:' ? 'https' : 'http'
          }://cdn.inspectlet.com/inspectlet.js?wid=1654706623&r=${Math.floor(
            new Date().getTime() / 3600000,
          )}`;
          const x = document.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(insp, x);
          if (typeof insp_ab_loader !== 'undefined' && insp_ab_loader) {
            const adlt = function() {
              const e = document.getElementById('insp_abl');
              if (e) {
                e.parentNode.removeChild(e);
                window.__insp.push(['ab_timeout']);
              }
            };
            const adlc = 'body{ visibility: hidden !important; }';
            const adln =
              typeof window.insp_ab_loader_t !== 'undefined'
                ? window.insp_ab_loader_t
                : 1200;
            insp.onerror = adlt;
            const abti = setTimeout(adlt, adln);
            window.__insp_abt = abti;
            const abl = document.createElement('style');
            abl.id = 'insp_abl';
            abl.type = 'text/css';
            if (abl.styleSheet) abl.styleSheet.cssText = adlc;
            else abl.appendChild(document.createTextNode(adlc));
            document.head.appendChild(abl);
          }
        };
        setTimeout(ldinsp, 0);
      }
    })();
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
      console.log('USER', user);
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
            <Drift
              appId="8cne7yrgdapx"
              userId={user === undefined ? '' : user.sub}
              attributes={user}
            />
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
