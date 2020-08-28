import React from "react";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";
import { Link } from "gatsby";
const FooterWrap = styled.footer`
  padding: 8vh 0;
`;
const FooterH3 = styled.h3`
  color: rgb(33, 92, 236);
`;
const ImgFooter = styled.img`
  float: right;
`;
const RightP = styled.p`
  text-allign: right;
`;
const FooterLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 1vh 0;
  font-weight: 600;
  &:hover {
    color: rgb(33, 92, 236);
  }
  &:visited {
    color: inherit;
  }
`;
const Footer = () => {
  return (
    <FooterWrap>
      <Grid>
        <Row>
          <Col xs={12} md={6}>
            <FooterH3>Our partners</FooterH3>
            <FooterLink
              to="https://phuketserver.com"
              rel="noopener"
              target="_blank"
            >
              Phuket Server
            </FooterLink>
            <FooterLink
              to="https://coeur-digital.com"
              rel="noopener"
              target="_blank"
            >
              Coeur Digital
            </FooterLink>
            <FooterLink
              to="https://ns1.com"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              NsOne
            </FooterLink>
          </Col>
          <Col xs={12} md={6}>
            <p>Phuket Cms</p>
            <ImgFooter src="https://res.cloudinary.com/insidebox/image/upload/v1596384334/Gatsby/logo-light.png" />
          </Col>
        </Row>
      </Grid>
    </FooterWrap>
  );
};

export default Footer;
