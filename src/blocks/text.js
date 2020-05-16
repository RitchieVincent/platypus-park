import React from "react"
import styled from "@emotion/styled"
import Container from "../components/container"
import { colours } from "../components/theme"

const TextContainer = styled.div`
  padding-bottom: 60px;

  a {
    color: ${colours.blue};
  }
`

export default ({ data }) => {
  return (
    <Container>
      <TextContainer
        dangerouslySetInnerHTML={{ __html: data.text }}
      ></TextContainer>
    </Container>
  )
}
