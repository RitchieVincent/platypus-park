import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { colours } from "../components/theme"
import Container from "../components/container"

const ImageLinks = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1.2fr 0.8fr;
    grid-template-rows: 250px 250px;
  }
`

const ImageLink = styled.div`
  position: relative;

  &:hover {
    .imageLinkOverlay {
      background-color: rgba(41, 179, 186, 0.8);
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    &:nth-of-type(1) {
      grid-row: 1 / 3;
    }
    &:not(:last-of-type) {
      margin-bottom: 0;
    }
  }

  .gatsby-image-wrapper {
    height: 200px;

    @media (min-width: 768px) {
      height: 100%;
    }
  }
`
const ImageLinkTitle = styled.h3`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 2;
  color: ${colours.white};
  width: 80%;
  text-align: center;
  text-shadow: 1px 1px 10px #333;
`

const ImageLinkOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(2px);
  pointer-events: none;
  transition: all 0.3s ease;
`

const ImageLinksContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
`

const ImageLinksComponent = ({ data }) => {
  return (
    <ImageLinksContainer>
      <Container>
        <ImageLinks>
          {data.image_link.map((image, index) => {
            const link = image.link.url
            let words = link.split("/").filter(item => item)
            const newLink = `/${words[words.length - 1]}`

            let title = image.link.title
            title = title.replace(/&amp;/g, "&")
            return (
              <ImageLink
                data-sal="fade"
                data-sal-easing="easeOutQuad"
                data-sal-duration="600"
                key={index}
              >
                <Link to={newLink}>
                  <ImageLinkTitle>{title}</ImageLinkTitle>
                  <Img
                    fluid={image.image.localFile.childImageSharp.fluid}
                    alt={image.image.alt_text}
                  ></Img>
                  <ImageLinkOverlay className="imageLinkOverlay"></ImageLinkOverlay>
                </Link>
              </ImageLink>
            )
          })}
        </ImageLinks>
      </Container>
    </ImageLinksContainer>
  )
}

export default ImageLinksComponent
