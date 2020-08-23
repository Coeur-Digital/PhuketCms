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
              Wordpress, Reactjs & all major Framework
            </ServH2gold>
            <Servh3Black>Front &amp; back end Development</Servh3Black>
          </Col>
          <Col xs={12} sm={6} md={3}>
            React
          </Col>
          <Col xs={12} sm={6} md={3}>
            Drupal
          </Col>
          <Col xs={12} sm={6} md={3}>
            WordPress
          </Col>
          <Col xs={12} sm={6} md={3}>
            NodeJS
          </Col>
        </Row>
      </Grid>
    </PaddingHome>
  );
};

export default SectionFiveHome;
