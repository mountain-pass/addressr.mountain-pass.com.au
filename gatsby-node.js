/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreatePage = async ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/signup`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/quick-start/`,
  });

  createRedirect({
    fromPath: `/community-support`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `https://app.gitter.im/#/room/#mountainpass-addressr_community:gitter.im`,
  });

  createRedirect({
    fromPath: `/community-support/`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `https://app.gitter.im/#/room/#mountainpass-addressr_community:gitter.im`,
  });

};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    /*
     * During the build step, `auth0-js` will break because it relies on
     * browser-specific APIs. Fortunately, we don’t need it during the build.
     * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
     * during the build. (See `src/utils/auth.js` to see how we prevent this
     * from breaking the app.)
     */
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /auth0-js/,
            use: loaders.null(),
          },
          {
            test: /swagger-ui/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
