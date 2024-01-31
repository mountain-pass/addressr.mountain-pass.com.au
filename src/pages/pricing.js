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
            <h2 style={{ textAlign: 'center' }}>SaaS</h2>
            <div className="grid-wrapper">
              <div className="col-2 price-styles" style={{ display: 'block;' }}>
                &nbsp;
              </div>
              <div className="col-4 price-styles" style={{ display: 'block;' }}>
                <div className="pricing__item price-four-el" data-hover="">
                  <h3 className="pricing__title mbr-title-font mbr-primary-color">
                    Trial
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
                      <li className="pricing__feature">
                        Geo-location Enhanced Address Search
                      </li>
                      <li className="pricing__feature">
                        100 API Calls / month
                      </li>
                      <li className="pricing__feature">
                        Automatic Data Updates
                      </li>
                      <li className="pricing__feature">Community support</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="https://rapidapi.com/addressr-addressr-default/api/addressr/pricing"
                      className="button btn special mbr-title-font btn-primary next"
                    >
                      Get Started Free
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-4 price-styles" style={{ display: 'block;' }}>
                <div className="pricing__item price-four-el">
                  <h3 className="pricing__title mbr-title-font mbr-primary-color">
                    PRO
                  </h3>
                  <p className="pricing__sentence">Only pay for what you use</p>
                  <div className="pricing__price mbr-title-font">
                    <span className="pricing__currency">$USD</span>
                    <span>0.005/req</span>
                    {/* <span className="pricing__currency">(USD)</span> */}
                  </div>
                  <div>
                    <ul className="pricing__feature-list mbr-text-font">
                      <li className="pricing__feature">Address Validation</li>
                      <li className="pricing__feature">Address Autocomplete</li>
                      <li className="pricing__feature">Address Search</li>
                      <li className="pricing__feature">
                        Geo-location Enhanced Address Search
                      </li>
                      <li className="pricing__feature">
                        Only pay for what you use
                      </li>
                      <li className="pricing__feature">
                        Automatic Data Updates
                      </li>
                      <li
                        className="pricing__feature"
                        style={{ fontWeight: '600' }}
                      >
                        24×7 AEST SUPPORT
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="https://rapidapi.com/addressr-addressr-default/api/addressr/pricing"
                      className="button btn special mbr-title-font btn-primary next"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-2 price-styles" style={{ display: 'block;' }}>
                &nbsp;
              </div>
            </div>
          </div>
        </section>
        <section id="one-b">
          <div className="inner">
            <div className="grid-wrapper">
              <div className="col-2 price-styles" style={{ display: 'block;' }}>
                &nbsp;
              </div>

              <div className="col-4 price-styles" style={{ display: 'block;' }}>
                <div className="pricing__item price-four-el">
                  <h3 className="pricing__title mbr-title-font mbr-primary-color">
                    Ultra
                  </h3>
                  <p className="pricing__sentence">
                    Includes 20,000 requests/month
                  </p>
                  <div className="pricing__price mbr-title-font">
                    <span className="pricing__currency">$USD</span>
                    <span>49/month</span>
                  </div>
                  <div>
                    <ul className="pricing__feature-list mbr-text-font">
                      <li className="pricing__feature">Address Validation</li>
                      <li className="pricing__feature">Address Autocomplete</li>
                      <li className="pricing__feature">Address Search</li>
                      <li className="pricing__feature">
                        Geo-location Enhanced Address Search
                      </li>
                      <li className="pricing__feature">
                        $USD 0.005/additional request
                      </li>
                      <li className="pricing__feature">
                        Automatic Data Updates
                      </li>
                      <li
                        className="pricing__feature"
                        style={{ fontWeight: '600' }}
                      >
                        24×7 AEST SUPPORT
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="https://rapidapi.com/addressr-addressr-default/api/addressr/pricing"
                      className="button btn special mbr-title-font btn-primary next"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 price-styles" style={{ display: 'block;' }}>
                <div className="pricing__item price-four-el">
                  <h3 className="pricing__title mbr-title-font mbr-primary-color">
                    Mega
                  </h3>
                  <p className="pricing__sentence">
                    Includes 200,000 requests/month
                  </p>
                  <div className="pricing__price mbr-title-font">
                    <span className="pricing__currency">$USD</span>
                    <span>299/month</span>
                    {/* <span className="pricing__currency">(USD)</span> */}
                  </div>
                  <div>
                    <ul className="pricing__feature-list mbr-text-font">
                      <li className="pricing__feature">Address Validation</li>
                      <li className="pricing__feature">Address Autocomplete</li>
                      <li className="pricing__feature">Address Search</li>
                      <li className="pricing__feature">
                        Geo-location Enhanced Address Search
                      </li>
                      <li className="pricing__feature">
                        $USD 0.005/additional request
                      </li>
                      <li className="pricing__feature">
                        Automatic Data Updates
                      </li>
                      <li
                        className="pricing__feature"
                        style={{ fontWeight: '600' }}
                      >
                        24×7 AEST SUPPORT
                      </li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="https://rapidapi.com/addressr-addressr-default/api/addressr/pricing"
                      className="button btn special mbr-title-font btn-primary next"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-2 price-styles" style={{ display: 'block;' }}>
                &nbsp;
              </div>
            </div>
          </div>
        </section>
        <section id="two">
          <div className="inner">
            <h2 style={{ textAlign: 'center' }}>Self hosted</h2>
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
                      <li className="pricing__feature">
                        Geo-location Enhanced Address Search
                      </li>
                      <li className="pricing__feature">Unlimited API Calls</li>
                      <li className="pricing__feature">Containerised</li>
                      <li className="pricing__feature">
                        Run On-Prem or in Your Own Cloud
                      </li>
                      <li className="pricing__feature">
                        Manual or Automatic Data Updates
                      </li>
                      <li className="pricing__feature">Community support</li>
                    </ul>
                  </div>
                  <div>
                    <Link
                      to="/quick-start/"
                      className="button btn special mbr-title-font btn-primary next"
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
                    <span>Contact Us</span>
                  </div>
                  <div>
                    <ul className="pricing__feature-list mbr-text-font">
                      <li className="pricing__feature">Address Validation</li>
                      <li className="pricing__feature">Address Autocomplete</li>
                      <li className="pricing__feature">Address Search</li>
                      <li className="pricing__feature">
                        Geo-location Enhanced Address Search
                      </li>
                      <li className="pricing__feature">Unlimited API Calls</li>
                      <li className="pricing__feature">Containerised</li>
                      <li className="pricing__feature">
                        Run On-Prem or in Your Own Cloud
                      </li>
                      <li className="pricing__feature">
                        Manual or Automatic Data Updates
                      </li>
                      <li
                        className="pricing__feature"
                        style={{ fontWeight: '600' }}
                      >
                        24×7 AEST SUPPORT
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link
                      to="/enterprise-price-request/"
                      className="button btn special mbr-title-font btn-primary next"
                    >
                      Request Quote
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
