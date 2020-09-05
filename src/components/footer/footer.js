import React from "react";
import { Grid, Box } from "react-raster";
import styled from "styled-components";
import { Link } from "gatsby";

const FooterH3 = styled.h3`
  color: rgb(33, 92, 236);
`;
const ImgFooter = styled.img`
  float: right;
`;
const RightP = styled.p`
  float: right;
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
    <Grid
      breakpoints={[0, 400, 800, 1200]}
      colspan={6}
      left={"2vw"}
      right={"2vw"}
      top={"8vw"}
      bottom={"4vw"}
      gutterX={"2vw"}
      gutterY={"2vw"}
      control
    >
      <Box cols={[6, 6, 3]}>
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
      </Box>
      <Box cols={[6, 6, 3]}>
        <RightP>Phuket Cms</RightP>
        <ImgFooter src="https://res.cloudinary.com/insidebox/image/upload/v1596384334/Gatsby/logo-light.png" />
      </Box>
    </Grid>
  );
};

export default Footer;
