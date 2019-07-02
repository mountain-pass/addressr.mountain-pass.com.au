import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

const EnterprisePriceRequest = () => {
  return (
    <Layout>
      <Helmet>
        <title>Enterprise Price Request - Addressr by Mountain Pass</title>
        <meta
          name="description"
          content="Enterprise Price Request for Addressr by Mountain Pass"
        />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Enterprise Price Request</h1>
            </header>
            <p>Comming soon...</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default EnterprisePriceRequest;
