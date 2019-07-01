import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { isAuthenticated, login } from '../utils/auth';

const Docs = () => {
  if (!isAuthenticated()) {
    login();
    return (
      <Layout basicFooter>
        <Helmet>
          <title>Docs - Addressr by Mountain Pass</title>
          <meta
            name="description"
            content="Documentation for Addressr by Mountain Pass"
          />
        </Helmet>

        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>Docs</h1>
              </header>
              <p>Redirecting to login...</p>
            </div>
          </section>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Helmet>
        <title>Docs - Addressr by Mountain Pass</title>
        <meta
          name="description"
          content="Documentation for Addressr by Mountain Pass"
        />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Docs</h1>
            </header>
            <p>Comming soon...</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Docs;
