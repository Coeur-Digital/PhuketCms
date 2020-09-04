import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";

const BgWeb = styled.div`
  background: url("https://res.cloudinary.com/insidebox/image/upload/c_scale,w_auto,dpr_auto,q_auto/v159807146/PhuketCms/web-agency-thailand.jpg")
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
              <FormattedMessage id="offer.expertise" />

              <br />
              <SpanH1Web>
                <FormattedMessage id="offer.expertise_2" />
              </SpanH1Web>
            </H1Web>
          </Col>
        </Row>
      </Grid>
    </BgWeb>
  );
};

export default WebOne;
