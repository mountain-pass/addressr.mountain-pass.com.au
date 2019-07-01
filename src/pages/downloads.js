import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { getProfile, isAuthenticated, login } from '../utils/auth';

const Downloads = () => {
  if (!isAuthenticated()) {
    login();
    return (
      <Layout basicFooter>
        <Helmet>
          <title>Downloads - Addressr by Mountain Pass</title>
          <meta
            name="description"
            content="Downloads for Addressr by Mountain Pass"
          />
        </Helmet>

        <div id="main" className="alt">
          <section id="one">
            <div className="inner">
              <header className="major">
                <h1>Downloads</h1>
              </header>
              <p>Redirecting to login...</p>
            </div>
          </section>
        </div>
      </Layout>
    );
  }

  const user = getProfile();
  return (
    <Layout user={user}>
      <Helmet>
        <title>Downloads - Addressr by Mountain Pass</title>
        <meta
          name="description"
          content="Documentation for Addressr by Mountain Pass"
        />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Downloads</h1>
            </header>
            <p>Comming soon...</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Downloads;
