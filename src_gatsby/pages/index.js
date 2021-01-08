import React from "react";
import PropTypes from "prop-types";
import { Layout, TopNavigation } from "@availity/gatsby-theme-core";
import { Container, Row, Col, Alert } from "reactstrap";
import { StaticQuery, graphql } from "gatsby";
import { FaReact, FaPlayCircle, FaCss3, FaJs } from "react-icons/fa";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "./index.scss";

const navConfig = {
  "/availity-workflow": {
    text: "Getting Started",
    matchRegex: "^/availity-workflow"
  },
  "/availity-react": {
    text: "Components",
    matchRegex: "^/availity-react"
  },
  "/sdk-js": {
    text: "Resources",
    matchRegex: "^/sdk-js"
  }
};

function generateNavItems(baseUrl, config) {
  return Object.entries(config).map(([value, { text, matchRegex }]) => ({
    text,
    value: value.startsWith("/") ? baseUrl + value : value,
    matchRegex
  }));
}

const IndexPage = ({ location }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={({
        site: {
          siteMetadata: { description, title }
        }
      }) => {
        return (
          <Layout role="main">
            <TopNavigation
              pathname={location.pathname}
              baseUrl="https://availity.github.io"
              className="pl-0 border-bottom-0"
              brandAttrs={{ className: "pl-4" }}
              navItems={generateNavItems(
                "https://availity.github.io",
                navConfig
              )}
            />
            <Container className="flex-fill pt-5">
              <Row>
                <Col xs={12} className="mb-3 border-bottom pb-3">
                  <h1 className="mb-3">{title}</h1>
                  <h2 className="h4 text-secondary">{description}</h2>
                </Col>
                <Col xs={12} className="mb-5" tag={Alert} color="light">
                  Documentation for Availity Javascript SDK, React Components,
                  UIKit, and Workflow Toolkit.
                </Col>
                <Card
                  name="Getting Started"
                  icon={<FaPlayCircle size="2em" />}
                  className="bg-secondary"
                  to="/availity-workflow"
                  description="Get started with our toolkit for web application development."
                />
                <Card
                  name="UI Kit"
                  icon={<FaCss3 size="2em" />}
                  className="bg-danger"
                  to="/availity-uikit"
                  description="Our custom CSS Kit that is built on top of Bootstrap 4."
                />
                <Card
                  name="React Library"
                  icon={<FaReact size="2em" />}
                  className="bg-primary"
                  to="/availity-react"
                  description="React components built with Availity UI Kit and Reactstrap."
                />
                <Card
                  name="Resources"
                  icon={<FaJs size="2em" />}
                  className="bg-success"
                  to="/sdk-js"
                  description="SDK containing different packages for interfacing with our systems."
                />
              </Row>
            </Container>
            <Footer />
          </Layout>
        );
      }}
    />
  );
};

IndexPage.propTypes = {
  location: PropTypes.object
};

export default IndexPage;
