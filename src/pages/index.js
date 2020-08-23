import React from "react";
import { FormattedMessage, Link, useIntl } from "gatsby-plugin-intl";
import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionOneHome from "../containers/home/sectionone";
import SectionTwoHome from "../containers/home/sectiontwo";
import SectionFourHome from "../containers/home/sectionfour";
import SectionThreeHome from "../containers/home/sectionthree";
import SectionFiveHome from "../containers/home/sectionfive";

const IndexPage = () => {
  const intl = useIntl();
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "title" })}
        keywords={[`gatsby`, `application`, `react`]}
      />
      <SectionOneHome />
      <SectionTwoHome />
      <SectionThreeHome />
      <SectionFourHome />
      <SectionFiveHome />
    </Layout>
  );
};

export default IndexPage;
