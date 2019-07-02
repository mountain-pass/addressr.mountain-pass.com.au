import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../../components/layout';

const Docs = () => {
  return (
    <Layout>
      <Helmet>
        <title>Enterprise Support - Addressr by Mountain Pass</title>
        <meta
          name="description"
          content="Enterprise Support for Addressr by Mountain Pass"
        />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Enterprise Support</h1>
            </header>
            <p>Comming soon...</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Docs;
