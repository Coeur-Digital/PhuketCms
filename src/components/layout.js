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
import { ThemeProvider } from "styled-components";
import FreshChat from "react-freshchat";
import "normalize.css";
import "./layout.css";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/footer";

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: "only screen",
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76 // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75 // em
    }
  }
};
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
      <FreshChat token="83dd2e66-e289-4709-9ba2-d2762377d3e9" />
      <ThemeProvider theme={theme}>
        <main>{children}</main>
      </ThemeProvider>

      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default injectIntl(Layout);
