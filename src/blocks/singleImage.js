import React from "react"
import styled from "@emotion/styled"
import Container from "../components/container"
import Img from "gatsby-image"

const Caption = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 10px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  outline: 1px solid rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  color: #000;
  font-family: "Libre Baskerville", serif;
`

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 60px;
  max-width: 100%;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 70%;
  }

  &:hover {
    ${Caption} {
      opacity: 1;
      visibility: visible;
    }
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
        {data.image.caption ? (
          <Caption>{data.image.caption.replace(/(<([^>]+)>)/gi, "")}</Caption>
        ) : null}
      </ImageContainer>
    </Container>
  )
}
