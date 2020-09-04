import React from "react";
import { useIntl } from "gatsby-plugin-intl";
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
        keywords={[
          `Web agency`,
          `wordpress development`,
          `react`,
          `Wordpress`,
          `seo`,
          `phuket`,
          `wordpress phuket`,
          `wordpress phuket thailand`,
          `web phuket`,
          `thailand web phuket`,
          `web design phuket`,
          `design phuket`,
          `php phuket`,
          `developer phuket`,
          `phuket web development`,
          `phuket website design`,
          `web design phuket`,
          `Phuket app design`,
          `professional webdesign company phuket`,
          `business web design phuket`,
          `web designs phuket`,
          `web graphic phuket`,
          `e-newsletter phuket`,
          `phuket domain `,
          `hosting phuket`,
          `phuket advertising`,
          `phuket php`,
          `mysql phuket`,
          `phuket reactJS`,
          `wpa phuket`,
          `headless cms phuket`
        ]}
      />
      <SectionOneHome />
      <SectionTwoHome />
      <SectionFiveHome />
      <SectionThreeHome />
      <SectionFourHome />
    </Layout>
  );
};

export default IndexPage;
