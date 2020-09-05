import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import { Grid, Box } from "react-raster";
import styled from "styled-components";
import { Wordpress } from "@styled-icons/boxicons-logos";
import { Drupal, Shopify, AppStoreIos, Magento } from "@styled-icons/fa-brands";
import { Ubuntu } from "@styled-icons/simple-icons";
import { Prestashop } from "@styled-icons/simple-icons/Prestashop";
import { Gatsby } from "@styled-icons/simple-icons/Gatsby";
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
const YellowGatsby = styled(Gatsby)`
  height: 80px;
  margin: 1vh 2vw;
  widht: 80px;
  color: rgb(204, 168, 110);
`;
const WrapSvg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BlueH3 = styled.h3`
  color: blue;
  text-align: center;
`;

const WebThree = () => {
  return (
    <Grid
      breakpoints={[0, 400, 800, 1200]}
      colspan={12}
      left={"2vw"}
      right={"2vw"}
      top={"2vw"}
      bottom={"2vw"}
      gutterX={"2vw"}
      gutterY={"2vw"}
      alignY={"center"}
      control
    >
      <Box cols={[12, 12, 12]}>
        <BlueH3>
          <FormattedMessage id="offer.favorite" />
        </BlueH3>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WrapSvg>
          <YellowWordpress alt="Wordpress Development Phuket Thailand" />
        </WrapSvg>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WrapSvg>
          <YellowDrupal alt="Drupal Development Phuket Thailand" />
        </WrapSvg>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WrapSvg>
          {" "}
          <YellowShopify alt="Shopify Development Phuket Thailand" />
        </WrapSvg>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WrapSvg>
          {" "}
          <YellowAppStoreIos alt="Ios Development Phuket Thailand" />
        </WrapSvg>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WrapSvg>
          {" "}
          <YellowMagento alt="Magento Development Phuket Thailand" />
        </WrapSvg>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WrapSvg>
          {" "}
          <YellowUbuntu alt="Ubuntu server managment Phuket Thailand" />
        </WrapSvg>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WrapSvg>
          {" "}
          <YellowPrestashop alt="Prestashop Development Phuket Thailand" />
        </WrapSvg>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WrapSvg>
          {" "}
          <YellowReactLogo alt="ReactJs Development Phuket Thailand" />
        </WrapSvg>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WrapSvg>
          {" "}
          <YellowRedux alt="Reactjs Redux Development Phuket Thailand" />
        </WrapSvg>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WrapSvg>
          {" "}
          <YellowAngular alt="Angular Development Phuket Thailand" />
        </WrapSvg>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WrapSvg>
          <YellowAndroid alt="Android Development Phuket Thailand" />
        </WrapSvg>
      </Box>{" "}
      <Box cols={[6, 6, 3]}>
        <WrapSvg>
          <YellowGatsby alt="Android Development Phuket Thailand" />
        </WrapSvg>
      </Box>
    </Grid>
  );
};

export default WebThree;
