import React from "react";
import { Grid, Col, Row } from "react-styled-flexboxgrid";
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
      <Grid>
        <Row>
          <Col xs={12} md={12}>
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
                  Gather Information
                </H3TimeWhite>
                <h4 className="vertical-timeline-element-subtitle">
                  Find the website frameworks that fits your needs
                </h4>
                <p>
                  There are too many possibility wordpress, prestashop, custom
                  development platforms available in the markets. We find for
                  you the best easy to use platforms, framework. Some of the
                  tools are expensive while others are affordable. So, let’s
                  list some of the best tools and their features for your online
                  store development.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Day 4-5"
                iconStyle={{ background: "rgb(204,168,110)", color: "#fff" }}
                icon={<HomeDrawPolygon />}
              >
                <H3Time className="vertical-timeline-element-title">
                  wireframe creation
                </H3Time>
                <h4 className="vertical-timeline-element-subtitle">
                  With Search engine optimization in mind
                </h4>
                <p>
                  With the scope well-defined, we can start digging into the
                  sitemap, defining how the content and features we defined in
                  scope definition will interrelate.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Day 5-10"
                iconStyle={{ background: "rgb(33, 92, 236)", color: "#fff" }}
                icon={<HomePen />}
              >
                <H3Time className="vertical-timeline-element-title">
                  Content Creation
                </H3Time>
                <h4 className="vertical-timeline-element-subtitle">
                  Writting content, picture, video , competitive research &amp;
                  strategic research
                </h4>
                <p>
                  Now that we have a bigger picture of the site in mind, we can
                  start creating content for the individual pages, always
                  keeping search engine optimization (SEO) in mind to help keep
                  pages focused on a single topic. It's vital that you have real
                  content to work with for our next stage:
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Day 10-15"
                iconStyle={{ background: "rgb(204,168,110)", color: "#fff" }}
                icon={<HomeImage />}
              >
                <H3Time className="vertical-timeline-element-title">
                  Visual elements
                </H3Time>
                <h4 className="vertical-timeline-element-subtitle">
                  Find or create the best content for your needs
                </h4>
                <p>
                  With the site architecture and some content in place, we can
                  start working on the visual brand. We call it the first
                  painting. All our website are build with code optimization in
                  mind
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Day 15-20"
                iconStyle={{ background: "rgb(33, 92, 236)", color: "#fff" }}
                icon={<HomeBug />}
              >
                <H3Time className="vertical-timeline-element-title">
                  Debug session &amp; optimization
                </H3Time>
                <h4 className="vertical-timeline-element-subtitle">
                  Online debugging
                </h4>
                <p>
                  we analyze your code on a test server, this allows us to
                  optimize your site to the maximum. this is what allows us to
                  have incomparable performance. Our partners have extensive
                  knowledge of servers and continuous integration.
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="Day 20-22"
                iconStyle={{ background: "rgb(204,168,110)", color: "#fff" }}
                icon={<HomeFacebook />}
              >
                <H3Time className="vertical-timeline-element-title">
                  Seo &amp; social media strategie
                </H3Time>
                <h4 className="vertical-timeline-element-subtitle">
                  Content Marketing for Social Media,
                </h4>
                <p>
                  Let’s propel yourself to the first places of google thanks to
                  the keywords that we have defined together.
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Col>
        </Row>
      </Grid>
    </TimeLine>
  );
};

export default SectionFourHome;
