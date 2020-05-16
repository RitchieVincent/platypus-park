import React from "react"
import styled from "@emotion/styled"
import { colours } from "../components/theme"
import Container from "../components/container"

const Title = styled.h2`
  border-bottom: 2px solid ${colours.blue};
  /* padding-top: 60px; */
  padding-bottom: 5px;
  margin-bottom: 30px;
  display: inline-flex;
  padding-right: 40px;
`

export default ({ data }) => {
  return (
    <Container>
      <Title dangerouslySetInnerHTML={{ __html: data.title }}></Title>
    </Container>
  )
}
