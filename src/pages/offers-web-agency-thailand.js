import React from "react";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import SEO from "../components/seo";
import WebOne from "../containers/web-agency/webone";
import WebTwo from "../containers/web-agency/webtwo";
import WebThree from "../containers/web-agency/webthree";

const OfferWeb = ({ intl }) => (
  <Layout>
    <SEO
      lang={intl.locale}
      title={intl.formatMessage({ id: "title_agency" })}
       keywords={intl.formatMessage({ id: 'keytwo' })}
    />
    <WebOne />

    <WebTwo />
    <WebThree />
  </Layout>
);

export default injectIntl(OfferWeb);
