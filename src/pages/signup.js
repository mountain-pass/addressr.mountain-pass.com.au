import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';

const SignUp = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sign Up - Addressr by Mountain Pass</title>
        <meta
          name="description"
          content="Pricing for Addressr by Mountain Pass"
        />
      </Helmet>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>Sign Up</h1>
            </header>
            <p>Comming soon...</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SignUp;
