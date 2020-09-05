import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import { Grid, Box } from "react-raster";
import styled from "styled-components";
const ServH2gold = styled.h2`
  font-size: 1.6rem;
  color: rgb(204, 168, 110);
  letter-spacing: 0px;
  margin-bottom: 16px;
  font-transform: capitalize;
  text-align: center;
`;

const SectionThreeHome = () => {
  return (
    <Grid
      breakpoints={[0, 400, 800, 1200]}
      colspan={12}
      left={"2vw"}
      right={"2vw"}
      top={"6vw"}
      bottom={"6vw"}
      gutterX={"2vw"}
      gutterY={"2vw"}
      control
    >
      <Box cols={[12, 12, 12]}>
        <ServH2gold>
          <FormattedMessage id="home.s3headingh2" />
        </ServH2gold>
      </Box>
    </Grid>
  );
};

export default SectionThreeHome;
