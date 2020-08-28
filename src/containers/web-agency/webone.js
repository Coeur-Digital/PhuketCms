import React from "react";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { DesignServices } from "@styled-icons/material";
const BgWeb = styled.div`
  background: url("https://res.cloudinary.com/insidebox/image/upload/q_auto/v159807146/PhuketCms/web-agency-thailand.jpg")
    no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 72vh;

  &:after {
    position: absolute;
    content: "";
    display: block;
    top: 0;
    left: 0;
    min-height: 72vh;
    width: 100%;
    z-index: 5;

    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );

    mix-blend-mode: multiply;
  }
`;
const H1Web = styled.h1`
  color: #fff;
  position: relative;
  text-align: center;
  padding-top: 20vh;
  font-size: 3.2rem;
  z-index: 6;
`;
const SpanH1Web = styled.span`
  font-size: 1.4rem;
`;
const WebOne = () => {
  return (
    <BgWeb>
      <Grid fluid>
        <Row>
          <Col xs={12} md={12}>
            <H1Web>
              web offers and expertise
              <br />
              <SpanH1Web>
                Find all the expertise and service offers of our web agency.
              </SpanH1Web>
            </H1Web>
          </Col>
        </Row>
      </Grid>
    </BgWeb>
  );
};

export default WebOne;
