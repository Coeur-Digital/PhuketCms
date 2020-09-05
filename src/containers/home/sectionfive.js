import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import { Grid, Box } from "react-raster";
import styled from "styled-components";
const ServH2gold = styled.h2`
  font-size: 1.6rem;
  color: rgb(204, 168, 110);
  letter-spacing: 0px;
  margin-bottom: 16px;
  text-transform: capitalize;
  text-align: center;
`;
const Servh3Black = styled.h3`
  text-align: center;
`;
const ServH2goldSpan = styled.span`
  font-size: 1.2rem;
`;
const ServH4gold = styled.h4`
  font-size: 1.2rem;
  color: rgb(204, 168, 110);

  text-transform: capitalize;
  text-align: center;
`;
const PaddingHome = styled.div`
  padding: 6vh 0;
`;
const SectionFiveHome = () => {
  return (
    <Grid
      id="website"
      breakpoints={[0, 400, 800, 1200]}
      colspan={6}
      left={"2vw"}
      right={"2vw"}
      top={"6vw"}
      bottom={"3vw"}
      gutterX={"2vw"}
      gutterY={"2vw"}
    >
      <Box cols={[6, 6, 6]}>
        <ServH2gold>
          <FormattedMessage id="home.s5homeh2" /> <br />
          <ServH2goldSpan>
            <FormattedMessage id="home.s5homeh2span" />
          </ServH2goldSpan>
        </ServH2gold>
        <Servh3Black>
          <FormattedMessage id="home.s5homeh3" />
        </Servh3Black>
      </Box>
      <Box cols={[6, 3, 3]}>
        <ServH4gold>
          <FormattedMessage id="home.s5homeh4_1" />
        </ServH4gold>
        <p>
          <FormattedMessage id="home.s5homep_1" />
        </p>
      </Box>
      <Box cols={[6, 3, 3]}>
        <ServH4gold>
          <FormattedMessage id="home.s5homeh4_2" />
        </ServH4gold>
        <p>
          <FormattedMessage id="home.s5homep_2" />
        </p>
      </Box>
      <Box cols={[6, 3, 3]}>
        <ServH4gold>
          <FormattedMessage id="home.s5homeh4_3" />
        </ServH4gold>
        <p>
          <FormattedMessage id="home.s5homep_3" />
        </p>
      </Box>
      <Box cols={[6, 3, 3]}>
        <ServH4gold>
          <FormattedMessage id="home.s5homeh4_4" />
        </ServH4gold>
        <p>
          <FormattedMessage id="home.s5homep_4" />
        </p>
      </Box>
    </Grid>
  );
};

export default SectionFiveHome;
