import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import { Grid, Box } from "react-raster";
import styled from "styled-components";
import { DesignServices, DeveloperMode } from "@styled-icons/material";
import { LineChart, BadgeCheck } from "@styled-icons/boxicons-regular";
import { ConnectWithoutContact } from "@styled-icons/material-twotone";
import { Salesforce } from "@styled-icons/fa-brands";
import { Assistant } from "@styled-icons/material-outlined";
import { Kubernetes } from "@styled-icons/simple-icons";
const WebDesignServices = styled(DesignServices)`
  height: 80px;
  color: rgb(33, 92, 236);
  widht: auto;
  display: block;
  margin: auto;
  padding-bottom: 2vh;
`;
const WebLineChart = styled(LineChart)`
  height: 80px;
  color: rgb(33, 92, 236);
  widht: auto;
  display: block;
  margin: auto;
  padding-bottom: 2vh;
`;
const WebConnectWithoutContact = styled(ConnectWithoutContact)`
  height: 80px;
  color: rgb(33, 92, 236);
  widht: auto;
  display: block;
  margin: auto;
  padding-bottom: 2vh;
`;
const WebSalesforce = styled(Salesforce)`
  height: 80px;
  color: rgb(33, 92, 236);
  widht: auto;
  display: block;
  margin: auto;
  padding-bottom: 2vh;
`;
const WebDeveloperMode = styled(DeveloperMode)`
  height: 80px;
  color: rgb(33, 92, 236);
  widht: auto;
  display: block;
  margin: auto;
  padding-bottom: 2vh;
`;

const WebAssistant = styled(Assistant)`
  height: 80px;
  color: rgb(33, 92, 236);
  widht: auto;
  display: block;
  margin: auto;
  padding-bottom: 2vh;
`;
const WebBadgeCheck = styled(BadgeCheck)`
  height: 80px;
  color: rgb(33, 92, 236);
  widht: auto;
  display: block;
  margin: auto;
  padding-bottom: 2vh;
`;
const WebKubernetes = styled(Kubernetes)`
  height: 80px;
  color: rgb(33, 92, 236);
  widht: auto;
  display: block;
  margin: auto;
  padding-bottom: 2vh;
`;

const PwebTwo = styled.p`
  text-align: center;
  margin: 0 5vw;
  padding-bottom: 6vh;
`;
const YellowH2 = styled.h2`
  font-size: 16px;
  color: rgb(204, 168, 110);
  letter-spacing: 0px;
  margin-bottom: 16px;
  text-align: center;
  font-transform: capitalize;
`;
const LinkYellow = styled.a`
  color: rgb(204, 168, 110);
  text-decoration: none;
  &:hover {
    color: black;
  }
`;
const WebTwo = () => {
  return (
    <Grid
      breakpoints={[0, 400, 800, 1200]}
      colspan={6}
      left={"2vw"}
      right={"2vw"}
      top={"10vw"}
      bottom={"7vw"}
      gutterX={"2vw"}
      gutterY={"2vw"}
    >
      <Box cols={[6, 6, 3]}>
        <WebDesignServices />
        <YellowH2>
          <FormattedMessage id="offer.rioh2" />
        </YellowH2>
        <PwebTwo>
          <FormattedMessage id="offer.riop" />
        </PwebTwo>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WebLineChart />

        <YellowH2>
          <FormattedMessage id="offer.rioh2_2" />
        </YellowH2>
        <PwebTwo>
          <FormattedMessage id="offer.riop_2" />
        </PwebTwo>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WebConnectWithoutContact />
        <YellowH2>
          <FormattedMessage id="offer.rioh2_3" />
        </YellowH2>
        <PwebTwo>
          <FormattedMessage id="offer.riop_3" />
        </PwebTwo>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WebSalesforce />
        <YellowH2>
          <FormattedMessage id="offer.rioh2_4" />
        </YellowH2>
        <PwebTwo>
          <FormattedMessage id="offer.riop_4" />
        </PwebTwo>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WebDeveloperMode />
        <YellowH2>
          <FormattedMessage id="offer.rioh2_5" />
        </YellowH2>
        <PwebTwo>
          <FormattedMessage id="offer.riop_5" />
        </PwebTwo>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WebAssistant />
        <YellowH2>
          <FormattedMessage id="offer.rioh2_6" />
        </YellowH2>
        <PwebTwo>
          <FormattedMessage id="offer.riop_6" />
        </PwebTwo>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WebBadgeCheck />
        <YellowH2>
          <FormattedMessage id="offer.rioh2_7" />
        </YellowH2>
        <PwebTwo>
          <FormattedMessage id="offer.riop_7" />
        </PwebTwo>
      </Box>
      <Box cols={[6, 6, 3]}>
        <WebKubernetes />
        <YellowH2>
          <FormattedMessage id="offer.rioh2_8" />
        </YellowH2>
        <PwebTwo>
          <FormattedMessage id="offer.riop_8" />
          <LinkYellow
            href="https://phuketserver.com"
            target="_blank"
            rel="noopener"
          >
            &nbsp;Phuket Server
          </LinkYellow>
          &nbsp;And&nbsp;
          <LinkYellow
            href="https://coeur-digital.com"
            target="_blank"
            rel="noopener"
          >
            Coeur Digital
          </LinkYellow>
        </PwebTwo>
      </Box>
    </Grid>
  );
};

export default WebTwo;
