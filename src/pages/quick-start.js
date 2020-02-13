import React from 'react';
import Helmet from 'react-helmet';
import howitworks from '../assets/images/addressr.svg';
import Banner from '../components/Banner';
import Layout from '../components/layout';
import { getProfile } from '../utils/auth';

const QuickStart = () => {
  const user = getProfile();

  return (
    <Layout user={user}>
      <Helmet>
        <title>Quick Start - Addressr by Mountain Pass</title>
        <meta
          name="description"
          content="Quick Start for Addressr by Mountain Pass"
        />
      </Helmet>

      <Banner>
        <header className="major">
          <h1>Quick Start</h1>
        </header>
      </Banner>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <ol>
              <li>
                Install addressr
                <pre>
                  <code>npm install @mountainpass/addressr -g</code>
                </pre>
              </li>
              <li>
                Start elastic search. For example
                <pre>
                  <code>
                    {`docker pull docker.elastic.co/elasticsearch/elasticsearch:7.2.0
docker run -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" docker.elastic.co/elasticsearch/elasticsearch:7.2.0`}
                  </code>
                </pre>
              </li>
              <li>
                Start API server
                <pre>
                  <code>
                    {`export ELASTIC_PORT=9200
export ELASTIC_HOST=localhost
addressr-server`}
                  </code>
                </pre>
              </li>
              <li>
                Run Data Loader
                <pre>
                  <code>
                    {`export ELASTIC_PORT=9200
export ELASTIC_HOST=localhost
addressr-loader`}
                  </code>
                </pre>
              </li>
              <li>
                OK, so we stretched the truth a bit with the &quot;Quick
                Start&quot; heading. The truth is that it takes quite a while to
                download, store and index the 13+ million addresses from
                data.gov.au. So make a coffee, or tea, or find something else to
                do and come back in about an hour when it&apos;s done.
              </li>
              <li>
                Search for an address
                <pre>
                  <code>
                    {`curl -i http://localhost:8080/addresses?q=LEVEL+25,+TOWER+3`}
                  </code>
                </pre>
              </li>
              <li>Wire you address form up to the address-server api.</li>
              <li>
                An updated G-NAF is released every 3 months. Put{' '}
                <code>addressr-loader</code> in a cron job or similar to keep
                addressr regularly updated
              </li>
            </ol>
            <h2>How it works</h2>
            <img
              src={howitworks}
              alt="how it works"
              style={{
                border: 'solid white 20px',
              }}
            />

            <h2>System requirements</h2>
            <h3>Elastic Search:</h3>
            <p>elasticsearch-oss &gt;= 7.2.0 with 1.4GiB of memory</p>
            <h3>Addressr Loader</h3>
            <p>Node JS &gt;= 11.14.0 with 1GiB of memory</p>
            <h3>Addressr Server</h3>
            <p>Node JS &gt;= 11.14.0 with 64MiB of memory</p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default QuickStart;
