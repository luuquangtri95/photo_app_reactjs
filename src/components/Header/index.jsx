import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./styles.scss";

Header.propTypes = {};

function Header(props) {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              href="/#"
              className="header__link header__title"
              rel="noopener noreferrer"
            >
              PHOTO APPS
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Redux Project
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
