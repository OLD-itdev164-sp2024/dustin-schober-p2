import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import { H1 } from "../Heading"
import { Section } from '../Section'

const StyledHeader = styled.header`
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background: ${props => props.theme.header.backgroundColor};
`

const StyledLink = styled(Link)`
  font-size: var(--font-sm);
  text-decoration: none;
  color: ${props => props.theme.header.color};
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
  <Section width={4/12}>
    <StyledLink to="/">
      <H1>
        {siteTitle}
      </H1>
    </StyledLink>
    </Section>
    <Section width={3/12}>
    <StyledLink to="/projects">
      <H1>
        Projects
      </H1>
    </StyledLink>
    </Section>
    <Section width={3/12}>
    <StyledLink to="/about">
      <H1>
        About Me
      </H1>
    </StyledLink>
    </Section>
    <Section width={3/12}>
    <StyledLink to="/contact">
      <H1>
        Contact Me
      </H1>
    </StyledLink>
    </Section>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ""
}

export { Header }
