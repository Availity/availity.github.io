import React from "react"
import { Container, Row } from "reactstrap"
import { Helmet } from "react-helmet"
import Card from "../components/Card"
import Footer from "../components/Footer"
import { FaReact, FaPlayCircle, FaCss3, FaJs } from "react-icons/fa"
import "availity-uikit"
import "./index.scss"

const IndexPage = () => (
  <div className="h-100 d-flex flex-column" role="main">
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>Availity Developers Home</title>
    </Helmet>
    <h1 className="sr-only">Availity Developers Home</h1>
    <Container className="flex-fill">
      <a href="https://availity.com" target="__blank">
        <img
          alt="Availity Developers Home"
          src="https://www.cmsimaging.com/assets/img/brands/authpal/availity.png"
          className="d-block mr-auto ml-auto mb-4 mt-4"
          style={{ maxHeight: 150 }}
        />
      </a>
      <Row>
        <Card
          name="Getting Started"
          icon={<FaPlayCircle size="2em" />}
          className="bg-secondary"
          link="https://github.com/Availity/availity-workflow"
          description="Get started by following our intuitive CRA workflow to kick start your project."
        />
        <Card
          name="UI Kit"
          icon={<FaCss3 size="2em" />}
          className="bg-danger"
          link="https://availity.github.io/availity-uikit"
          description="Our custom CSS Kit that is built on top of Bootstrap 4."
        />
        <Card
          name="React Library"
          icon={<FaReact size="2em" />}
          className="bg-primary"
          link="https://availity.github.io/availity-react/"
          description="React components using Availity UIKit and Bootstrap 4."
        />
        <Card
          name="SDK"
          icon={<FaJs size="2em" />}
          className="bg-success"
          link="https://github.com/Availity/sdk-js"
          description="SDK containing different packages for interfacing with our systems."
        />
      </Row>
    </Container>
    <Footer />
  </div>
)

export default IndexPage
