import PropTypes from 'prop-types';
import React from 'react';

const Contact = props => {
  const { user } = props;
  console.log({ user });
  return (
    <section id="contact">
      <div className="inner">
        <section>
          <form method="post" action="#">
            {user === undefined ? (
              <>
                <div className="field half first">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" id="email" />
                </div>
              </>
            ) : (
              <>
                <input
                  type="hidden"
                  value={user.nickname}
                  name="name"
                  id="name"
                />
                <input
                  type="hidden"
                  value={user.email}
                  name="email"
                  id="email"
                />
              </>
            )}
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Clear" />
              </li>
            </ul>
          </form>
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
};

Contact.propTypes = {
  user: PropTypes.shape({
    nickname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

Contact.defaultProps = {
  user: undefined,
};

export default Contact;
