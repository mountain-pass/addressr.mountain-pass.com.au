import { Link } from 'gatsby';
import React from 'react';

const Footer = () => (
  <footer id="footer">
    <div className="inner">
      <div className="grid-wrapper">
        <div className="col-3">
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/pricing">Sign up</Link>
            </li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="links">
            <li>
              <Link to="/r/docs">Docs</Link>
            </li>
            <li>
              <Link to="/r/downloads">Downloads</Link>
            </li>
            <li>
              <Link to="/r/community-support">Community Support</Link>
            </li>
            <li>
              <Link to="/r/enterprise-support">Enterprise Support</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <ul className="icons">
        <li>
          <a href="#" className="icon alt fa-twitter">
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-facebook">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-github">
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon alt fa-linkedin">
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul> */}
      <ul className="copyright">
        <li>
          &copy; <a href="mountain-pass.com.au">Mountain Pass PTY LTD</a>
        </li>
        <li>
          <em>Mountain Pass</em>, <em>Addressr</em> and{' '}
          <em>the Address Logo</em> are trade marks of{' '}
          <a href="mountain-pass.com.au">Mountain Pass PTY LTD</a>
        </li>
        <li>
          Base Website Design by <a href="https://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
