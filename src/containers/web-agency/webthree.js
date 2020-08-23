import React from "react";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { Wordpress } from "@styled-icons/boxicons-logos";
import { Drupal, Shopify, AppStoreIos, Magento } from "@styled-icons/fa-brands";
import { Ubuntu } from "@styled-icons/simple-icons";
import { Prestashop } from "@styled-icons/simple-icons/Prestashop";
import {
  ReactLogo,
  Redux,
  Angular,
  Android
} from "@styled-icons/boxicons-logos";
const YellowWordpress = styled(Wordpress)`
  height: 80px;
  margin: 1vh 2vw;
  widht: 80px;
  color: rgb(204, 168, 110);
`;
const YellowDrupal = styled(Drupal)`
  height: 80px;
  margin: 1vh 2vw;
  widht: 80px;
  color: rgb(204, 168, 110);
`;
const YellowShopify = styled(Shopify)`
  height: 80px;
  margin: 1vh 2vw;
  widht: 80px;
  color: rgb(204, 168, 110);
`;
const YellowAppStoreIos = styled(AppStoreIos)`
  height: 80px;
  margin: 1vh 2vw;
  widht: 80px;
  color: rgb(204, 168, 110);
`;
const YellowMagento = styled(Magento)`
  height: 80px;
  margin: 1vh 2vw;
  widht: 80px;
  color: rgb(204, 168, 110);
`;
const YellowUbuntu = styled(Ubuntu)`
  height: 80px;
  margin: 1vh 2vw;
  widht: 80px;
  color: rgb(204, 168, 110);
`;

const YellowPrestashop = styled(Prestashop)`
  height: 80px;
  margin: 1vh 2vw;
  widht: 80px;
  color: rgb(204, 168, 110);
`;
const YellowReactLogo = styled(ReactLogo)`
  height: 80px;
  margin: 1vh 2vw;
  widht: 80px;
  color: rgb(204, 168, 110);
`;
const YellowRedux = styled(Redux)`
  height: 80px;
  margin: 1vh 2vw;
  widht: 80px;
  color: rgb(204, 168, 110);
`;
const YellowAngular = styled(Angular)`
  height: 80px;
  margin: 1vh 2vw;
  widht: 80px;
  color: rgb(204, 168, 110);
`;
const YellowAndroid = styled(Android)`
  height: 80px;
  margin: 1vh 2vw;
  widht: 80px;
  color: rgb(204, 168, 110);
`;
const WrapSvg = styled.div`
  display: block;
  margin: auto;
`;
const BlueH3 = styled.h3`
  color: blue;
  text-align: center;
`;
const WebThree = () => {
  return (
    <Grid>
      <Row>
        <WrapSvg>
          <Col xs={12} md={12}>
            <BlueH3>Our favorite solutions</BlueH3>

            <YellowWordpress alt="Wordpress Development Phuket Thailand" />
            <YellowDrupal alt="Drupal Development Phuket Thailand" />
            <YellowShopify alt="Shopify Development Phuket Thailand" />
            <YellowAppStoreIos alt="Ios Development Phuket Thailand" />
            <YellowMagento alt="Magento Development Phuket Thailand" />
            <YellowUbuntu alt="Ubuntu server managment Phuket Thailand" />
            <YellowPrestashop alt="Prestashop Development Phuket Thailand" />
            <YellowReactLogo alt="ReactJs Development Phuket Thailand" />
            <YellowRedux alt="Reactjs Redux Development Phuket Thailand" />
            <YellowAngular alt="Angular Development Phuket Thailand" />
            <YellowAndroid alt="Android Development Phuket Thailand" />
          </Col>
        </WrapSvg>
      </Row>
    </Grid>
  );
};

export default WebThree;
