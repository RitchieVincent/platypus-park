import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import Container from "../components/container"
import { Link } from "gatsby"
import { colours } from "../components/theme"

const Wrapper = styled.div`
  padding-top: 150px;
  padding-bottom: 100px;
  background-color: ${colours.blue};
  color: ${colours.white};
  border-bottom: 10px solid ${colours.darkBlue};

  h1 {
    margin-bottom: 0;
  }

  a {
    color: ${colours.darkBlue};
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Wrapper>
      <Container>
        <h1>404 NOT FOUND</h1>
        <p>
          This page doesn't exist. Please{" "}
          <Link to="/">go back to the homepage</Link> and try again.
        </p>
      </Container>
    </Wrapper>
  </Layout>
)

export default NotFoundPage
