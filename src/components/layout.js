import PropTypes from 'prop-types';
import React from 'react';
import '../assets/scss/main.scss';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import Menu from './Menu';

const MyContext = React.createContext();

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuVisible: false,
      isLoginVisible: false,
      loading: 'is-loading',
    };
    this.handleToggleMenu = this.handleToggleMenu.bind(this);
    this.handleToggleLogin = this.handleToggleLogin.bind(this);
    this.handleToggleMenuToLogin = this.handleToggleMenuToLogin.bind(this);
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

  handleToggleMenuToLogin() {
    this.setState({
      isMenuVisible: false,
      isLoginVisible: true,
    });
  }

  handleToggleLogin() {
    this.setState(prevState => ({
      isLoginVisible: !prevState.isLoginVisible,
    }));
  }

  render() {
    const { children } = this.props;
    const { loading, isMenuVisible, isLoginVisible } = this.state;
    return (
      <div
        className={`body ${loading} ${isMenuVisible ? 'is-menu-visible' : ''} ${
          isLoginVisible ? 'is-login-visible' : ''
        }`}
      >
        <div id="wrapper">
          <Header onToggleMenu={this.handleToggleMenu} />
          <MyContext.Provider value={{ onToggleLogin: this.handleToggleLogin }}>
            {children}
          </MyContext.Provider>
          <Contact />
          <Footer />
        </div>
        <Menu
          onToggleMenu={this.handleToggleMenu}
          onToggleMenuToLogin={this.handleToggleMenuToLogin}
        />
        <Login onToggleLogin={this.handleToggleLogin} />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
