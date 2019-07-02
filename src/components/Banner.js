import { Link } from 'gatsby';
import React from 'react';

const Banner = () => {
  return (
    <section id="banner" className="major">
      <div className="inner">
        <header className="major">
          <h1>Addressr</h1>
        </header>
        <div className="content">
          <p>
            Because address validation&nbsp;
            <br />
            Shouldn&apos;t cost the world
          </p>
          <ul className="actions">
            <li>
              <Link to="/signup" className="button next">
                Get Started Free
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
