import React from "react";
import { FormattedMessage, injectIntl, Link } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={`404: ${intl.formatMessage({ id: "title" })}`}
    />

    <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
          <h1>
            <FormattedMessage id="notfound.oops" />
          </h1>
        </div>
        <h2>
          <FormattedMessage id="notfound.header" />
        </h2>
        <p>
          <FormattedMessage id="notfound.description" />
        </p>
        <Link to="/">
          <FormattedMessage id="notfound.link" />
        </Link>
      </div>
    </div>
  </Layout>
);

export default injectIntl(NotFoundPage);
