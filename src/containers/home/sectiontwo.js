import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import { Grid, Box } from "react-raster";
import styled from "styled-components";
import { Link } from "gatsby";

const YellowH2 = styled.h2`
  font-size: 1.8rem;
  color: rgb(204, 168, 110);
  letter-spacing: 0px;
  margin-bottom: 16px;
  font-transform: capitalize;
`;
const BlackUl = styled.ul`
  list-style-type: square;
`;
const BlackLi = styled.li`
  line-height: 1.2rem;
`;
const LinkBlue = styled(Link)`
  color: blue;
  text-decoration: none;
  &:hover {
    color: rgb(204, 168, 110);
  }
`;
const SectionTwoHome = () => {
  return (
    <>
      <div id="ecommerce" />
      <Grid
        breakpoints={[0, 400, 800, 1200]}
        colspan={12}
        left={"2vw"}
        right={"2vw"}
        top={"6vw"}
        bottom={"3vw"}
        gutterX={"2vw"}
        gutterY={"2vw"}
      >
        <Box cols={[12, 12, 12, 12]}>
          <FormattedMessage id="home.s2link_1" />
          &nbsp;
          <LinkBlue
            to="https://shop.phuketcms.com"
            rel="noopener nofollow"
            target="_blank"
          >
            <FormattedMessage id="home.s2link_2" />
          </LinkBlue>
          &nbsp; <FormattedMessage id="home.s2link_3" />
        </Box>
        <Box cols={[12, 12, 6, 6]}>
          <YellowH2>
            <FormattedMessage id="home.s2headingh2" />
          </YellowH2>
          <BlackUl>
            <BlackLi>
              <FormattedMessage id="home.s2headingli1" />
            </BlackLi>
            <BlackLi>
              <FormattedMessage id="home.s2headingli2" />
            </BlackLi>
            <BlackLi>
              <FormattedMessage id="home.s2headingli3" />
            </BlackLi>
            <BlackLi>
              <FormattedMessage id="home.s2headingli4" />
            </BlackLi>
          </BlackUl>
        </Box>
        <Box cols={[12, 12, 6, 6]}>
          <YellowH2>
            <FormattedMessage id="home.s2headingli5" />
          </YellowH2>
          <BlackUl>
            <BlackLi>
              <FormattedMessage id="home.s2headingli6" />
            </BlackLi>
            <BlackLi>
              <FormattedMessage id="home.s2headingli7" />
            </BlackLi>
            <BlackLi>
              <FormattedMessage id="home.s2headingli8" />
            </BlackLi>
            <BlackLi>
              <FormattedMessage id="home.s2headingli9" />
            </BlackLi>
            <BlackLi>
              <FormattedMessage id="home.s2headingli10" />
            </BlackLi>
          </BlackUl>
        </Box>{" "}
        <Box cols={[12, 12, 6, 6]}>
          <YellowH2>
            <FormattedMessage id="home.s2headingli11" />
          </YellowH2>
          <BlackUl>
            <BlackLi>
              <FormattedMessage id="home.s2headingli12" />
            </BlackLi>
            <BlackLi>
              <FormattedMessage id="home.s2headingli13" />
            </BlackLi>
            <BlackLi>
              <FormattedMessage id="home.s2headingli14" />
            </BlackLi>
            <BlackLi>
              <FormattedMessage id="home.s2headingli15" />
            </BlackLi>
            <BlackLi>
              <FormattedMessage id="home.s2headingli16" />
            </BlackLi>
          </BlackUl>
        </Box>
        <Box cols={[12, 12, 6, 6]}>
          <YellowH2>
            <FormattedMessage id="home.s2headingli17" />
          </YellowH2>
          <BlackUl>
            <BlackLi>
              <FormattedMessage id="home.s2headingli18" />
            </BlackLi>
            <BlackLi>
              <FormattedMessage id="home.s2headingli19" />
            </BlackLi>
            <BlackLi>
              <FormattedMessage id="home.s2headingli20" />
            </BlackLi>
            <BlackLi>
              <FormattedMessage id="home.s2headingli21" />
            </BlackLi>
            <BlackLi>
              <FormattedMessage id="home.s2headingli22" />
            </BlackLi>
            <BlackLi>
              <FormattedMessage id="home.s2headingli23" />
            </BlackLi>
          </BlackUl>
        </Box>
      </Grid>
    </>
  );
};

export default SectionTwoHome;
