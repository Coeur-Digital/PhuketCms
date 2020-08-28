import React from "react";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";
const ServH2gold = styled.h2`
  font-size: 1.6rem;
  color: rgb(204, 168, 110);
  letter-spacing: 0px;
  margin-bottom: 16px;
  text-transform: capitalize;
  text-align: center;
`;
const Servh3Black = styled.h3`
  text-align: center;
`;
const ServH2goldSpan = styled.span`
  font-size: 1.2rem;
`;
const ServH4gold = styled.h4`
  font-size: 1.2rem;
  color: rgb(204, 168, 110);

  text-transform: capitalize;
  text-align: center;
`;
const PaddingHome = styled.div`
  padding: 6vh 0;
`;
const SectionFiveHome = () => {
  return (
    <PaddingHome id="website">
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <ServH2gold>
              Optimized website creation <br />
              <ServH2goldSpan>
                Wordpress, Reactjs & all major Framework
              </ServH2goldSpan>
            </ServH2gold>
            <Servh3Black>Front &amp; back end Development</Servh3Black>
          </Col>

          <Col xs={12} sm={6} md={6}>
            <ServH4gold>React JS</ServH4gold>
            <p>
              Phuket CMS specializes in front-office development. We carefully
              integrate your website, this is what constitutes the visual part
              of the website. We are enriching subtle animations to enhance our
              clients websites. We pay particular attention to the rendering of
              typographies and the mobile. To integrate our websites, we are
              very rigorous so that it is easily maintainable. For the CSS part,
              we work with tools / languages like Styled Component and PostCSS.
              At the nomenclature level, we use the BEM which allows to better
              structure the CSS. On React, we like to use CSS Modules.
            </p>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <ServH4gold>Drupal</ServH4gold>
            <p>
              Drupal is an open-source content manager (CMS) that allows you to
              build different types of sites. We use it to design community
              platforms, institutional sites, e-commerce sites (Drupal
              commerce), web apps for tablets, etc. The latter is used
              extensively by large state institutions, large companies or
              innovative startups. Drupal is an ideal CMS for quickly designing
              content / product listings with smart filters (faceted search).
              The Drupal contributor community offers a huge library of free
              modules and themes. These allow an existing site to evolve without
              “reinventing the wheel” in terms of functionality. More recently,
              Drupal 8 (the most recent version of drupal) has been completely
              redesigned to work with object classes. More specifically, it now
              accommodates in its core application all the power of the French
              PHP framework Symfony, a leader in the global technological
              landscape.
            </p>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <ServH4gold>WordPress</ServH4gold>
            <p>
              We are specialized in web development and webdesign, supports
              companies of all sizes in the realization of their website in
              WordPress. Our mission is to create an optimized and efficient
              site, adapted to your project. We carry out the design and / or
              development of the site. 100% of development is carried out in
              France by our experts. WordPress a powerful solution WordPress is
              the most widely used open-source content manager (CMS) for
              building websites. Our experts can extend its functionality with
              plugins to meet your needs. It can, for example, make it possible
              to create “One page” sites, advanced showcase sites, e-commerce
              sites (WooCommerce), etc. Our customers appreciate it because it
              offers an easy-to-use back office that allows you to contribute
              all kinds of content and finely manage users.
            </p>
          </Col>
          <Col xs={12} sm={6} md={6}>
            <ServH4gold>Node JS</ServH4gold>
            <p>
              Focused on performance and innovation, our agency sees Node.js as
              the future of programming. The combined use of Node.js and
              Express.js indeed makes it possible to rapidly develop entire
              websites. This framework is a real toolbox for developers who want
              to create a JavaScript website on both client and server side. By
              generating all the basic necessities at the start of an empty
              project and by providing all the directories and typical files to
              avoid the developer having to write them himself, the Express
              “generator” thus simplifies the creation of complex applications.
              For developers, the time savings is considerable. Express allows
              them to do everything that Node.js does, but by reducing the
              number of lines of code. Express.js maps the URL in a template and
              populates the values ​​with data from a generic data store. This
              use of templates to create HTML greatly reduces the amount of
              input for the developer and thus speeds up agency work.
            </p>
          </Col>
        </Row>
      </Grid>
    </PaddingHome>
  );
};

export default SectionFiveHome;
