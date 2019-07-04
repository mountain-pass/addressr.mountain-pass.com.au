/* eslint-disable react/no-unused-state */
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { setProfile } from '../utils/auth';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      name: user ? user.nickname : '',
      nameValidation: undefined,
      email: user ? user.name : '',
      emailValidation: undefined,
      message: '',
      messageValidation: undefined,
      error: undefined,
      sent: false,
      sending: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  async reset() {
    const { user } = this.props;

    await this.setState({
      name: user ? user.nickname : '',
      nameValidation: undefined,
      email: user ? user.name : '',
      emailValidation: undefined,
      message: '',
      messageValidation: undefined,
      error: undefined,
      sent: false,
      sending: false,
    });
  }

  handleChange(event) {
    console.log(event);
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(target);
    var labels = document.getElementsByTagName('LABEL');
    console.log(labels);
    const label = Array.prototype.slice
      .call(labels, 0)
      .filter(l => l.htmlFor == name)[0];
    console.log(label);

    const labelText = label === undefined ? name : label.innerHTML;
    const fieldValidationName = `${name}Validation`;
    this.setState({
      [name]: value,
      [fieldValidationName]:
        value === '' ? `${labelText} is required` : undefined,
    });
  }

  validate() {
    return this.setState(prevState => {
      return {
        name: prevState.name,
        nameValidation: prevState.name === '' ? 'Name is required' : undefined,
        email: prevState.email,
        emailValidation:
          prevState.name === '' ? 'Email / Phone is required' : undefined,
        message: prevState.message,
        messageValidation:
          prevState.name === '' ? 'Message is required' : undefined,
        error: prevState.error,
        sent: false,
        sending: prevState.sending,
      };
    });
  }

  async handleSubmit(e) {
    console.log('POST!', e);
    e.preventDefault();
    await this.validate();
    const {
      nameValidation,
      emailValidation,
      messageValidation,
      name,
      email,
      message,
    } = this.state;
    if (
      nameValidation === undefined &&
      emailValidation === undefined &&
      messageValidation === undefined
    ) {
      // do it
    } else {
      // don't do it
      return;
    }
    this.setState({ sending: true, sent: false });
    const { user } = this.props;
    if (user === undefined || user.iss === undefined) {
      setProfile({ nickname: name, name: email });
    }
    return fetch(
      'https://hooks.slack.com/services/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',
      {
        method: 'POST',
        body: JSON.stringify({
          text: JSON.stringify({
            name: name,
            email: email,
            message: message,
          }),
        }),
      },
    )
      .then(response => {
        if (!response.ok) {
          console.log(response);
          this.setState({
            error: `Error: Message sending failed. Sorry.`,
            sending: false,
            sent: false,
          });
        } else {
          this.setState({ sending: false, sent: true, error: undefined });
        }
      })
      .catch(e => {
        if (`${e}` == 'TypeError: Failed to fetch') {
          this.setState({
            error: `Error: Message sending failed. Sorry.`,
            sending: false,
            sent: false,
          });
        } else {
          this.setState({
            error: `Unknown Error: ${e}. Message sending failed. Sorry.`,
            sending: false,
            sent: false,
          });
        }
      });
  }

  render() {
    const {
      sending,
      name,
      nameValidation,
      email,
      emailValidation,
      message,
      messageValidation,
      sent,
      error,
    } = this.state;
    return (
      <section id="contact">
        <div className="inner">
          <section>
            <form method="post" onSubmit={this.handleSubmit}>
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={this.handleChange}
                />
                <div className="error">{nameValidation}</div>
              </div>
              <div className="field half">
                <label htmlFor="email">Email / Phone</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={email}
                  onChange={this.handleChange}
                />
                <div className="error">{emailValidation}</div>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  value={message}
                  onChange={this.handleChange}
                />
                <div className="error">{messageValidation}</div>
              </div>
              <ul className="actions">
                <li>
                  <button
                    onClick={this.handleSubmit}
                    onKeyPress={this.handleSubmit}
                    tabIndex={-1}
                    className={`special ${sending ? 'disabled' : ''}`}
                    type="submit"
                    value="Send Message"
                  >
                    Send Message&nbsp;
                    <FontAwesomeIcon
                      icon={sending ? faSpinner : faPaperPlane}
                      pulse={sending}
                    />
                  </button>
                </li>
                <li>
                  <button
                    onClick={this.reset}
                    onKeyPress={this.reset}
                    tabIndex={-1}
                    type="reset"
                  >
                    Clear
                  </button>
                </li>
              </ul>
            </form>
            <div className="field">
              {sent ? (
                <div className="button icon fa-check success">
                  Message sent{' '}
                  <span role="img" aria-label="Thumbs up">
                    👍
                  </span>
                </div>
              ) : (
                ''
              )}
              {error ? (
                <div className="button icon fa-exclamation error">
                  {error}{' '}
                  <span role="img" aria-label="Sorry">
                    😔
                  </span>
                </div>
              ) : (
                ''
              )}
            </div>
          </section>
          <section className="split">
            <section>
              <div className="contact-method">
                <span className="icon alt fa-envelope" />
                <h3>Email</h3>

                <a href="mailto:addressr@mountain-pass.com.au">
                  addressr@mountain-pass.com.au
                </a>
              </div>
            </section>
            {/* <section>
            <div className="contact-method">
              <span className="icon alt fa-phone" />
              <h3>Phone</h3>
              <a href="tel:+61 402 756 685">+61 402 756 685</a>
            </div>
          </section> */}
            <section>
              <div className="contact-method">
                <span className="icon alt fa-home" />
                <h3>Address</h3>
                <span>
                  Tower 3
                  <br />
                  Lvl 25
                  <br />
                  300 Barangaroo Ave
                  <br />
                  Sydney, NSW, 2000
                  <br />
                  Australia
                </span>
              </div>
            </section>
          </section>
        </div>
      </section>
    );
  }
}

Contact.propTypes = {
  user: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    iss: PropTypes.string,
  }),
};

Contact.defaultProps = {
  user: undefined,
};

export default Contact;
