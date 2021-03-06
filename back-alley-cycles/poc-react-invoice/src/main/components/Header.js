// @flow
import React from "react";
import { Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

const StyleWrap = styled.div`
  .navbar.navbar-inverse {
    border-radius: 0;
    font-family: "Roboto Slab", serif;
  }
  .navbar-header {
    float: left;
  }
  .navbar-right {
    float: right;
    margin-right: -15px;
  }
`;
const Header = () => (
  <StyleWrap>
    <Navbar bsStyle="inverse">
      <div className="navbar-header">
        <LinkContainer to="/" className="navbar-brand">
          <a>Back Alley Cycles</a>
        </LinkContainer>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="https://www.harley-davidson.com/us/en/index.html">
            <small>BAC</small>
          </a>
        </li>
      </ul>
    </Navbar>
  </StyleWrap>
);

export default Header;
