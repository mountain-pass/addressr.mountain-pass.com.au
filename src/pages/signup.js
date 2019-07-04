import { faCalendarCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import Banner from '../components/Banner';
import Layout from '../components/layout';
import { setProfile } from '../utils/auth';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    const { user } = this.props;
    this.state = {
      name: user ? user.nickname : '',
      nameValidation: undefined,
      email: user ? user.name : '',
      emailValidation: undefined,
      phone: '',
      phoneValidation: '',
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
      phone: user ? user.phone : '',
      phoneValidation: undefined,
      org: user ? user.org : '',
      orgValidation: undefined,
      purpose: '',
      purposeValidation: undefined,
      wait: '',
      waitValidation: undefined,
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
    const fieldValidationName = `${name}Validation`;
    this.setState({
      [name]: value,
      [fieldValidationName]: this.validateField(target),
    });
  }

  validateField(target) {
    const value = target.value;
    const name = target.name;
    var labels = document.getElementsByTagName('LABEL');
    console.log(labels);
    const label = Array.prototype.slice
      .call(labels, 0)
      .filter(l => l.htmlFor == name)[0];
    console.log(label);

    const labelText = label === undefined ? name : label.innerHTML;
    return value === '' ? (
      <>
        <em>{labelText}</em> is required
      </>
    ) : (
      undefined
    );
  }

  validate() {
    return this.setState({
      nameValidation: this.validateField(document.getElementById('name')),
      emailValidation: this.validateField(document.getElementById('email')),
      phoneValidation: this.validateField(document.getElementById('phone')),
      orgValidation: this.validateField(document.getElementById('org')),
      purposeValidation: this.validateField(document.getElementById('purpose')),
      waitValidation: this.validateField(document.getElementById('wait')),
      sent: false,
      sending: false,
    });
  }

  async handleSubmit(e) {
    console.log('POST!', e);
    e.preventDefault();
    await this.validate();
    const {
      name,
      nameValidation,
      email,
      emailValidation,
      phone,
      phoneValidation,
      org,
      orgValidation,
      purpose,
      purposeValidation,
      wait,
      waitValidation,
    } = this.state;
    if (
      nameValidation === undefined &&
      emailValidation === undefined &&
      phoneValidation === undefined &&
      orgValidation === undefined &&
      purposeValidation === undefined &&
      waitValidation === undefined
    ) {
      // do it
    } else {
      fetch(
        'https://hooks.slack.com/services/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',
        {
          method: 'POST',
          body: JSON.stringify({
            text: JSON.stringify({
              name,
              email,
              phone,
              org,
              purpose,
              wait,
              complete: false,
            }),
          }),
        },
      ).catch(() => {
        // meh
      });
      return;
    }
    this.setState({ sending: true, sent: false });
    const { user } = this.props;
    if (user === undefined || user.iss === undefined) {
      setProfile({ name: email, nickname: name, phone, org });
    }
    return fetch(
      'https://hooks.slack.com/services/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',
      {
        method: 'POST',
        body: JSON.stringify({
          text: JSON.stringify({
            name,
            email,
            phone,
            org,
            purpose,
            wait,
            complete: true,
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
      name,
      nameValidation,
      email,
      emailValidation,
      phone,
      phoneValidation,
      org,
      orgValidation,
      purpose,
      purposeValidation,
      wait,
      waitValidation,
      sending,
      sent,
      error,
    } = this.state;

    return (
      <Layout>
        <Helmet>
          <title>Sign Up - Addressr by Mountain Pass</title>
          <meta
            name="description"
            content="Sign Up for Addressr by Mountain Pass"
          />
        </Helmet>

        <Banner>
          <header className="major">
            <h1>Sign Up</h1>
          </header>
        </Banner>

        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <p>
                Addressr is currently in{' '}
                <span className="status amber">Closed Beta</span>
              </p>
              <p>
                <strong>Reserve</strong> your spot on the waitlist by applying
                below.
              </p>
              <form method="post" onSubmit={this.handleSubmit}>
                <div className="first field half">
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
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={this.handleChange}
                  />
                  <div className="error">{emailValidation}</div>
                </div>
                <div className="first field half">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    value={phone}
                    onChange={this.handleChange}
                  />
                  <div className="error">{phoneValidation}</div>
                </div>
                <div className="field half">
                  <label htmlFor="org">Organisation</label>
                  <input
                    type="text"
                    name="org"
                    id="org"
                    value={org}
                    onChange={this.handleChange}
                  />
                  <div className="error">{orgValidation}</div>
                </div>
                <div className="field">
                  <label htmlFor="purpose">Main purpose for Addressr?</label>
                  <textarea
                    name="purpose"
                    id="purpose"
                    rows="1"
                    value={purpose}
                    onChange={this.handleChange}
                  />
                  <div className="error">{purposeValidation}</div>
                </div>
                <div className="field">
                  <label htmlFor="wait">How long can you wait?</label>
                  <textarea
                    name="wait"
                    id="wait"
                    rows="1"
                    value={wait}
                    onChange={this.handleChange}
                  />
                  <div className="error">{waitValidation}</div>
                </div>

                <ul className="actions">
                  <li>
                    <button
                      onClick={this.handleSubmit}
                      onKeyPress={this.handleSubmit}
                      tabIndex={-1}
                      className={`special ${sending ? 'disabled' : ''}`}
                      type="submit"
                    >
                      Reserve your spot&nbsp;
                      <FontAwesomeIcon
                        icon={sending ? faSpinner : faCalendarCheck}
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
                    You&apos;re on the list!{' '}
                    <span role="img" aria-label="Thumbs up">
                      👍
                    </span>
                    <p>
                      We&apos;ll reach out to you shorlty to get you started
                    </p>
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
              </div>{' '}
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

SignUp.propTypes = {
  user: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    iss: PropTypes.string,
    phone: PropTypes.string,
    org: PropTypes.string,
  }),
};

SignUp.defaultProps = {
  user: undefined,
};
export default SignUp;
