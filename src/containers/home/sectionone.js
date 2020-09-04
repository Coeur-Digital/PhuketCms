import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";
import scrollTo from "gatsby-plugin-smoothscroll";
import { DownArrowAlt } from "@styled-icons/boxicons-regular";
const BgRed = styled.div`
  background-color: rgb(248, 248, 248);
`;
const BgImg = styled.img`
  height: 60vh;
  widht: auto;
  display: block;
  margin: auto;
  @media (min-width: 1281px) {
    height: 65vh;
  }

  @media (min-width: 725px) and (max-width: 1280px) {
    height: 45vh;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
    widht: auto;
    padding-top: 20vh;
    height: 40vh;
  }
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) {
    padding-top: 20vh;
    widht: auto;
    height: 40vh;
  }
`;
const PaddingHome = styled.div`
  padding: 20vh 0 0 0;
`;
const YellowH1 = styled.h1`
  font-size: 16px;
  color: rgb(204, 168, 110);
  letter-spacing: 0px;
  margin-bottom: 16px;
  font-transform: capitalize;
`;
const BlackH2 = styled.h2`
  font-size: 2.3rem;
  line-height: 2.5rem;
  font-family: "Poppins";
  font-weight: 800;
`;
const BlackH3 = styled.h3`
  font-size: 1.3rem;
  line-height: 1.9rem;
`;
const Button = styled.li`
  display: inline;
  margin-right: 2vw;
  &:hover {
    color: #215cec;
  }
`;
const DisplayB = styled.ul`
  list-style: none;
  display: table;
`;
const BlueArrowFromTop = styled(DownArrowAlt)`
  height: 23px;
  widht: auto;
  &:hover {
    color: #215cec;
  }
`;
const SectionOneHome = () => {
  return (
    <BgRed>
      <PaddingHome>
        <Grid>
          <Row>
            <Col xs={12} sm={12} md={6}>
              <YellowH1>
                <FormattedMessage id="home.headingh1" />
              </YellowH1>
              <BlackH2>
                <FormattedMessage id="home.headingh2" />
                <br /> <br />
              </BlackH2>
              <BlackH3>
                <FormattedMessage id="home.headingh3" />
                <br />
                <FormattedMessage id="home.headingh3_2" />
              </BlackH3>
              <DisplayB>
                <Button onClick={() => scrollTo("#ecommerce")}>
                  <FormattedMessage id="home.headingbuttonone" />
                  <BlueArrowFromTop />
                </Button>

                <Button onClick={() => scrollTo("#website")}>
                  <FormattedMessage id="home.headingbuttontwo" />
                  <BlueArrowFromTop />
                </Button>
              </DisplayB>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <BgImg src="https://res.cloudinary.com/insidebox/image/upload/v1596355026/Gatsby/hero.png" />
            </Col>
          </Row>
        </Grid>
      </PaddingHome>
    </BgRed>
  );
};

export default SectionOneHome;
