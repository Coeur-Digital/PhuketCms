import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
import styled from "styled-components";
const ServH2gold = styled.h2`
  font-size: 1.6rem;
  color: rgb(204, 168, 110);
  letter-spacing: 0px;
  margin-bottom: 16px;
  font-transform: capitalize;
  text-align: center;
`;
const PaddingHome = styled.div`
  padding: 6vh 0;
`;
const SectionThreeHome = () => {
  return (
    <PaddingHome>
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            <ServH2gold>
              {" "}
              <FormattedMessage id="home.s3headingh2" />
            </ServH2gold>
          </Col>
        </Row>
      </Grid>
    </PaddingHome>
  );
};

export default SectionThreeHome;
