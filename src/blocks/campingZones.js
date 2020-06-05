import React from "react"
import styled from "@emotion/styled"
import { colours } from "../components/theme"
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

const CampingZones = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 40px;
`

const Zone = styled.div`
  flex-basis: 100%;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    flex-basis: calc(50% - 20px);
  }
`

const Title = styled.h3`
  display: inline-flex;
  padding-right: 10px;
  padding-bottom: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom: 2px solid ${colours.blue};
`

const Text = styled.div``

const ImageContainer = styled.div`
  position: relative;

  .gatsby-image-wrapper {
    max-height: 200px;
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
      <CampingZones>
        {data.zone.map((zone, index) => (
          <Zone key={index}>
            <ImageContainer
              data-sal="fade"
              data-sal-easing="easeOutQuad"
              data-sal-duration="1000"
            >
              <Img fluid={zone.image.localFile.childImageSharp.fluid} />
              {zone.image.caption ? (
                <Caption>
                  {zone.image.caption.replace(/(<([^>]+)>)/gi, "")}
                </Caption>
              ) : null}
            </ImageContainer>
            <Title>{zone.title}</Title>
            <Text dangerouslySetInnerHTML={{ __html: zone.text }} />
          </Zone>
        ))}
      </CampingZones>
    </Container>
  )
}
