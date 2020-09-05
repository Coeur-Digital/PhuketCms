/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { injectIntl } from "gatsby-plugin-intl";

import "normalize.css";
import "./layout.css";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/footer";
import loadable from "@loadable/component";

const FreshChat = loadable(() => import("react-freshchat"));

const Layout = ({ children, intl }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Navbar siteTitle={intl.formatMessage({ id: "title" })} />
      <FreshChat token="83dd2e66-e289-4709-9ba2-d2762377d3e9" />{" "}
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default injectIntl(Layout);
