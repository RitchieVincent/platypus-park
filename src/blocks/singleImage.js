import React from "react"
import styled from "@emotion/styled"
import Container from "../components/container"
import Img from "gatsby-image"

const ImageContainer = styled.div`
  margin-bottom: 60px;
  max-width: 100%;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 70%;
  }
`

export default ({ data }) => {
  return (
    <Container>
      <ImageContainer
        data-sal="fade"
        data-sal-easing="easeOutQuad"
        data-sal-duration="1000"
      >
        <Img fluid={data.image.localFile.childImageSharp.fluid} />
      </ImageContainer>
    </Container>
  )
}
