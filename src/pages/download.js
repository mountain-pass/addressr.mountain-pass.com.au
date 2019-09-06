import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import { getProfile } from '../utils/auth';

const Downloads = () => {
  const user = getProfile();
  return (
    <Layout user={user}>
      <Helmet>
        <title>Download - Addressr by Mountain Pass</title>
        <meta name="description" content="Download Addressr by Mountain Pass" />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Download</h1>
            </header>
            <p>
              Addressr runs in <a href="https://nodejs.org/">Node.js</a> and is
              installed using{' '}
              <a href="https://docs.npmjs.com/about-npm/">npm</a> as follows.
            </p>
            <pre>npm install -g @mountainpass/addressr</pre>
            <p>
              <Link to="/README">Find out more</Link>
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Downloads;
