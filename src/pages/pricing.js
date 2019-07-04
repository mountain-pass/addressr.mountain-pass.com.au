import { Link } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import Banner from '../components/Banner';
import Layout from '../components/layout';

const Pricing = () => {
  return (
    <Layout>
      <Helmet>
        <title>Pricing - Addressr by Mountain Pass</title>
        <meta
          name="description"
          content="Pricing for Addressr by Mountain Pass"
        />
      </Helmet>

      <Banner>
        <header className="major">
          <h1>Pricing</h1>
        </header>
      </Banner>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner">
            <div className="grid-wrapper">
              <div className="col-2 price-styles" style={{ display: 'block;' }}>
                &nbsp;
              </div>
              <div className="col-4 price-styles" style={{ display: 'block;' }}>
                <div className="pricing__item price-four-el" data-hover="">
                  <h3 className="pricing__title mbr-title-font mbr-primary-color">
                    FREE
                  </h3>
                  <p className="pricing__sentence">100% Free. FOREVER</p>
                  <div className="pricing__price mbr-title-font">
                    <span className="pricing__currency">$</span>
                    <span>0</span>
                  </div>
                  <div>
                    <ul className="pricing__feature-list mbr-text-font">
                      <li className="pricing__feature">Address Validation</li>
                      <li className="pricing__feature">Address Autocomplete</li>
                      <li className="pricing__feature">Address Search</li>
                      <li className="pricing__feature">Unlimited API Calls</li>
                      <li className="pricing__feature">Docker Image</li>
                      <li className="pricing__feature">
                        Run on-prem or in your own cloud
                      </li>
                      <li className="pricing__feature">
                        Automatically updated data source
                      </li>
                      <li className="pricing__feature">Community support</li>
                    </ul>
                  </div>
                  <div>
                    <Link
                      to="/signup"
                      className="button btn special mbr-title-font btn-primary"
                    >
                      Get Started Free
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-4 price-styles" style={{ display: 'block;' }}>
                <div className="pricing__item price-four-el">
                  <h3 className="pricing__title mbr-title-font mbr-primary-color">
                    ENTERPRISE
                  </h3>
                  <p className="pricing__sentence">Mission Critical Support</p>
                  <div className="pricing__price mbr-title-font">
                    <span className="pricing__currency">$</span>
                    <span>POA</span>
                  </div>
                  <div>
                    <ul className="pricing__feature-list mbr-text-font">
                      <li className="pricing__feature">Address Validation</li>
                      <li className="pricing__feature">Address Autocomplete</li>
                      <li className="pricing__feature">Address Search</li>
                      <li className="pricing__feature">Unlimited API Calls</li>
                      <li className="pricing__feature">Docker Image</li>
                      <li className="pricing__feature">
                        Run on-prem or in your own cloud
                      </li>
                      <li className="pricing__feature">
                        Automatically updated data source
                      </li>
                      <li
                        className="pricing__feature"
                        style={{ fontWeight: '600' }}
                      >
                        MISSION CRITICAL SUPPORT
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link
                      to="/enterprise-price-request"
                      className="button btn special mbr-title-font btn-primary"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-2 price-styles" style={{ display: 'block;' }}>
                &nbsp;
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Pricing;
