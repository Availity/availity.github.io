import React from "react"
import PropTypes from "prop-types"
import { Col, Card as RCard, CardTitle } from "reactstrap"
import AppIcon from "@availity/app-icon"

const Card = ({ name, icon, description, className, link, ...rest }) => (
  <Col xs={12} md={6} lg={6} xl={3} className="d-flex flex-fill">
    <RCard
      body
      tag="a"
      role="link"
      href={link}
      aria-label={name}
      className={`mb-3 d-flex flex-column align-items-center text-white text-center no-underline ${className}`}
      {...rest}
    >
      <AppIcon
        size="lg"
        color="none"
        className="d-flex flex-row align-items-center justify-content-center"
      >
        {icon}
      </AppIcon>
      <CardTitle tag="h2" className="pt-2 h3">
        {name}
      </CardTitle>
      <span className="mb-0 mt-1">{description}</span>
    </RCard>
  </Col>
)

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
  className: PropTypes.string,
  link: PropTypes.string,
}

export default Card
