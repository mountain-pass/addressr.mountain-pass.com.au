import React from 'react';
import Helmet from 'react-helmet';
import 'swagger-ui-react/swagger-ui.css';
import Layout from '../components/layout';
import SwaggerUI from '../components/SwaggerUI';
import spec from '../swagger.yaml';

const ApiDocs = () => {
  return (
    <Layout>
      <Helmet>
        <title>API Docs - Addressr by Mountain Pass</title>
        <meta
          name="description"
          content="API Docs for Addressr by Mountain Pass"
        />
      </Helmet>
      <div className="swagger-wrapper">
        <SwaggerUI
          spec={spec}
          docExpansion="full"
          supportedSubmitMethods={[]}
        />
      </div>
    </Layout>
  );
};

export default ApiDocs;
