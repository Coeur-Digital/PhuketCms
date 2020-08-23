import React from "react";
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
            <YellowH2>RIO Convertion</YellowH2>
            <PwebTwo>
              Improve your conversion rate with our UX Design agency Why is it
              important to build a good user experience? Our answer: 10 seconds
              ... 10 seconds is the time it takes for a user to decide whether
              to leave or stay on a website. That&apos;s it!
            </PwebTwo>
          </Col>
          <Col xs={12} md={6}>
            <WebLineChart />
            <YellowH2>Boost your positioning with our SEO agency</YellowH2>
            <PwebTwo>
              Whenever you create or want to create your site, you hear about
              "SEO". If this notion seems fuzzy to you, SEO is an essential
              element for the success of your presence on the internet
            </PwebTwo>
          </Col>
          <Col xs={12} md={6}>
            <WebConnectWithoutContact />
            <YellowH2>
              Stay connected with our mobile development agency
            </YellowH2>
            <PwebTwo>
              The explosion in the use of smartphones for surfing the web since
              2013 has put mobile development at the heart of web strategies.
              Today almost everyone has a mobile device. So it was only natural
              that the ...
            </PwebTwo>
          </Col>
          <Col xs={12} md={6}>
            <WebSalesforce />
            <YellowH2>
              Increase your sales thanks to our E-Commerce agency
            </YellowH2>
            <PwebTwo>
              From writing the specifications to the development of your
              project, our E-commerce Web agency supports you in your strategy
              by selecting the best open source technology. Our e-commerce
              experience at the service of your business
            </PwebTwo>
          </Col>
          <Col xs={12} md={6}>
            <WebDeveloperMode />
            <YellowH2>
              Develop your site with our Symfony &amp; Wordpress Web agency
            </YellowH2>
            <PwebTwo>
              Expert in PHP development and in particular with the Symfony
              framework and Wordpress, our Web agency relies on Open Source
              solutions in order to offer you the most durable and flexible
              solutions for the development of your website.
            </PwebTwo>
          </Col>
          <Col xs={12} md={6}>
            <WebAssistant />
            <YellowH2>
              Find reinforcement with our technical assistance agency
            </YellowH2>
            <PwebTwo>
              Our Web agency, with its many years of experience in the
              development of technical digital projects, also comes in another
              form: technical assistance. Technical assistance (or management),
              for Phuket CMS, is the basis
            </PwebTwo>
          </Col>
          <Col xs={12} md={6}>
            <WebBadgeCheck />
            <YellowH2>Web Service Center</YellowH2>
            <PwebTwo>
              PhuketCms offers a comprehensive web service center offering that
              allows us to call on our different skills to answer to your
              Digital needs (advice, strategy, scripting, engineering, web
              design, web marketing, SEO.
            </PwebTwo>
          </Col>
          <Col xs={12} md={6}>
            <WebKubernetes />
            <YellowH2>Web hosting - Servers - Kubernetes</YellowH2>
            <PwebTwo>
              The Phuket Cms web agency offers it&apos;s clients to support them
              throughout the life of their site, including through hosting and
              outsourcing of their site. Hosting consists of storing the
              internet pages that make up your site on a secure server. Meet our
              partner
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
