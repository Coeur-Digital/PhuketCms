import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import { Grid, Box } from "react-raster";
import styled from "styled-components";
import { CodeWorking } from "@styled-icons/ionicons-solid";
import { DrawPolygon } from "@styled-icons/fa-solid";
import { InfoCircle, Bug } from "@styled-icons/bootstrap";
import { Pen } from "@styled-icons/boxicons-regular";
import { Image } from "@styled-icons/entypo";
import { Facebook } from "@styled-icons/boxicons-logos";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const H3Time = styled.h3`
  color: rgb(33, 92, 236);
  text-transform: capitalize;
`;
const H3TimeWhite = styled.h3`
  color: gold;
  text-transform: capitalize;
`;
const TimeLine = styled.div`
  background-color: rgb(248, 248, 248);
`;
const HomeCodeWorking = styled(CodeWorking)`
  height: 20px;
`;
const HomeInfoCircle = styled(InfoCircle)`
  height: 20px;
`;
const HomeDrawPolygon = styled(DrawPolygon)`
  height: 20px;
`;
const HomePen = styled(Pen)`
  height: 20px;
`;
const HomeImage = styled(Image)`
  height: 20px;
`;
const HomeBug = styled(Bug)`
  height: 20px;
`;
const HomeFacebook = styled(Facebook)`
  height: 20px;
`;
const SectionFourHome = () => {
  return (
    <TimeLine>
      <Grid
        breakpoints={[0, 400, 800, 1200]}
        colspan={6}
        left={"2vw"}
        right={"2vw"}
        top={"2vw"}
        bottom={"2vw"}
        gutterX={"2vw"}
        gutterY={"2vw"}
        control
      >
        {" "}
        <Box cols={[6, 6, 6]}>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "rgb(33, 92, 236)",
                color: "#fff"
              }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 92, 236)"
              }}
              date="Day One"
              iconStyle={{ background: "rgb(33, 92, 236)", color: "#fff" }}
              icon={<HomeInfoCircle />}
            >
              <H3TimeWhite className="vertical-timeline-element-title">
                <FormattedMessage id="home.s4headingh3" />
              </H3TimeWhite>
              <h4 className="vertical-timeline-element-subtitle">
                <FormattedMessage id="home.s4headingh4" />
              </h4>
              <p>
                {" "}
                <FormattedMessage id="home.s4headingp" />
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Day 4-5"
              iconStyle={{ background: "rgb(204,168,110)", color: "#fff" }}
              icon={<HomeDrawPolygon />}
            >
              <H3Time className="vertical-timeline-element-title">
                <FormattedMessage id="home.s4headingh3_2" />
                creation
              </H3Time>
              <h4 className="vertical-timeline-element-subtitle">
                <FormattedMessage id="home.s4headingh4_2" />
              </h4>
              <p>
                {" "}
                <FormattedMessage id="home.s4headingp_1" />
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Day 5-10"
              iconStyle={{ background: "rgb(33, 92, 236)", color: "#fff" }}
              icon={<HomePen />}
            >
              <H3Time className="vertical-timeline-element-title">
                <FormattedMessage id="home.s4headingh3_3" />
              </H3Time>
              <h4 className="vertical-timeline-element-subtitle">
                <FormattedMessage id="home.s4headingh4_3" />
              </h4>
              <p>
                <FormattedMessage id="home.s4headingp_2" />
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Day 10-15"
              iconStyle={{ background: "rgb(204,168,110)", color: "#fff" }}
              icon={<HomeImage />}
            >
              <H3Time className="vertical-timeline-element-title">
                <FormattedMessage id="home.s4headingh3_4" />
              </H3Time>
              <h4 className="vertical-timeline-element-subtitle">
                <FormattedMessage id="home.s4headingh4_4" />
              </h4>
              <p>
                {" "}
                <FormattedMessage id="home.s4headingp_4" />
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Day 15-20"
              iconStyle={{ background: "rgb(33, 92, 236)", color: "#fff" }}
              icon={<HomeBug />}
            >
              <H3Time className="vertical-timeline-element-title">
                <FormattedMessage id="home.s4headingh3_5" />
              </H3Time>
              <h4 className="vertical-timeline-element-subtitle">
                <FormattedMessage id="home.s4headingh4_5" />
              </h4>
              <p>
                <FormattedMessage id="home.s4headingp_5" />
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="Day 20-22"
              iconStyle={{ background: "rgb(204,168,110)", color: "#fff" }}
              icon={<HomeFacebook />}
            >
              <H3Time className="vertical-timeline-element-title">
                <FormattedMessage id="home.s4headingh3_6" />
              </H3Time>
              <h4 className="vertical-timeline-element-subtitle">
                <FormattedMessage id="home.s4headingh4_6" />
              </h4>
              <p>
                <FormattedMessage id="home.s4headingp_6" />
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Box>
      </Grid>
    </TimeLine>
  );
};

export default SectionFourHome;
