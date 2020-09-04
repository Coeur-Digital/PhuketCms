import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
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
const PadRow = styled.div`
  padding: 10vh 0;
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
    <Grid>
      <PadRow>
        <Row>
          <Col xs={12} md={6}>
            <WebDesignServices />
            <YellowH2>
              <FormattedMessage id="offer.rioh2" />
            </YellowH2>
            <PwebTwo>
              <FormattedMessage id="offer.riop" />
            </PwebTwo>
          </Col>
          <Col xs={12} md={6}>
            <WebLineChart />

            <YellowH2>
              <FormattedMessage id="offer.rioh2_2" />
            </YellowH2>
            <PwebTwo>
              <FormattedMessage id="offer.riop_2" />
            </PwebTwo>
          </Col>
          <Col xs={12} md={6}>
            <WebConnectWithoutContact />
            <YellowH2>
              <FormattedMessage id="offer.rioh2_3" />
            </YellowH2>
            <PwebTwo>
              <FormattedMessage id="offer.riop_3" />
            </PwebTwo>
          </Col>
          <Col xs={12} md={6}>
            <WebSalesforce />
            <YellowH2>
              <FormattedMessage id="offer.rioh2_4" />
            </YellowH2>
            <PwebTwo>
              <FormattedMessage id="offer.riop_4" />
            </PwebTwo>
          </Col>
          <Col xs={12} md={6}>
            <WebDeveloperMode />
            <YellowH2>
              <FormattedMessage id="offer.rioh2_5" />
            </YellowH2>
            <PwebTwo>
              <FormattedMessage id="offer.riop_5" />
            </PwebTwo>
          </Col>
          <Col xs={12} md={6}>
            <WebAssistant />
            <YellowH2>
              <FormattedMessage id="offer.rioh2_6" />
            </YellowH2>
            <PwebTwo>
              <FormattedMessage id="offer.riop_6" />
            </PwebTwo>
          </Col>
          <Col xs={12} md={6}>
            <WebBadgeCheck />
            <YellowH2>
              <FormattedMessage id="offer.rioh2_7" />
            </YellowH2>
            <PwebTwo>
              <FormattedMessage id="offer.riop_7" />
            </PwebTwo>
          </Col>
          <Col xs={12} md={6}>
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
          </Col>
        </Row>
      </PadRow>
    </Grid>
  );
};

export default WebTwo;
