import React from "react";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { Link } from "gatsby";

const PaddingHome = styled.div`
  margin: 10vh 0 6vh;
`;
const YellowH2 = styled.h2`
  font-size: 1.8rem;
  color: rgb(204, 168, 110);
  letter-spacing: 0px;
  margin-bottom: 16px;
  font-transform: capitalize;
`;
const BlackUl = styled.ul`
  list-style-type: square;
`;
const BlackLi = styled.li`
  line-height: 1.2rem;
`;
const SectionTwoHome = () => {
  return (
    <Grid>
      <PaddingHome>
        <Row>
          <Col xs={12}>
            we have an
            <Link
              to="https://shop.phuketcms.com"
              rel="noopener nofollow"
              target="_blank"
            >
              Live Demo
            </Link>
            of an Headless ecommerce
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} id="ecommerce">
            <YellowH2> Creation of E-commerce site</YellowH2>
            <BlackUl>
              <BlackLi>Artistic direction and UX Design</BlackLi>
              <BlackLi>
                Integration and Development: Magento, Symfony, Prestashop,
                Woo-Commerce, Drupal, Typo3 ...
              </BlackLi>
              <BlackLi>
                Technical maintenance (preventive, corrective, evolving)
              </BlackLi>
              <BlackLi> Secure hosting and outsourcing</BlackLi>
            </BlackUl>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <YellowH2> E-Store management</YellowH2>
            <BlackUl>
              <BlackLi>
                Daily management of your e-store and follow-up of sales.
              </BlackLi>
              <BlackLi> Commercial animation / E-Merchandising.</BlackLi>
              <BlackLi>
                Customer relationship management (after-sales service).
              </BlackLi>
              <BlackLi> Monitoring and optimization of KPIs.</BlackLi>
              <BlackLi> Recommendations and reports</BlackLi>
            </BlackUl>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6}>
            <YellowH2> Acquisition and Webmarketing</YellowH2>
            <BlackUl>
              <BlackLi> Search marketing: SEA / SEO / Shopping</BlackLi>
              <BlackLi>
                Social Ads: Facebook Ads, Instagram Ads, Pinterest Ads…
              </BlackLi>
              <BlackLi> Campaigns Emailing and optimization of your @.</BlackLi>
              <BlackLi>
                Dissemination and management of your catalog on Marketplaces
              </BlackLi>
              <BlackLi> Campaigns Retargeting / Display</BlackLi>
            </BlackUl>
          </Col>

          <Col xs={12} sm={12} md={6} lg={6}>
            <YellowH2> Consulting and Strategy</YellowH2>
            <BlackUl>
              <BlackLi> Multichannel</BlackLi>
              <BlackLi>
                Logistics: partners, process, connector and flow synchronization
                module.
              </BlackLi>
              <BlackLi>
                SEO: audit and recommendations (techniques, semantic cocoon,
                etc.)
              </BlackLi>
              <BlackLi>
                Creation of content (via our photo & video partners).
              </BlackLi>
              <BlackLi>
                Photos and videos: recommendations, briefs, adaptation of
                existing content for your marketing actions.
              </BlackLi>
              <BlackLi>
                Information systems and ERP: integration, development of
                suitable connectors, Flow and Process recommendations
              </BlackLi>
            </BlackUl>
          </Col>
        </Row>
      </PaddingHome>
    </Grid>
  );
};

export default SectionTwoHome;
