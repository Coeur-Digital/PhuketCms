import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import styled from "styled-components";
import { Link } from "gatsby-plugin-intl";
import Language from "../language";

const NavItem = styled(Link)`
  font-weight: 800;
  text-decoration: none;
  color: #fff;
  padding: 2vh 1.2vw;

  &:hover {
    color: #215cec;
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
    postion: absolute;
    top: 10vh;
  }
`;
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/offers-web-agency-thailand">
        <FormattedMessage id="offers" />
      </NavItem>
      <Language />
    </>
  );
};

export default NavbarLinks;
