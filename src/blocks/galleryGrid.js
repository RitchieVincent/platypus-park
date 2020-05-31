import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { colours } from "../components/theme"
import Container from "../components/container"
import { RemoveScroll } from "react-remove-scroll"

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
  background-color: rgba(0, 0, 0, 0.8);
  outline: 1px solid rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;
  color: ${colours.white};
  font-family: "Libre Baskerville", serif;
`

const GalleryGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 180px);
  grid-gap: 10px;
  padding-bottom: 60px;
  justify-content: center;

  @media (min-width: 768px) {
    padding-top: 60px;
  }
`

const GalleryGridItem = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;

  &:hover {
    ${Caption} {
      opacity: 1;
      visibility: visible;
    }
  }
`

const LightBoxContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;

  ${({ active }) => active && `opacity: 1; visibility: visible;`}
`

const LightBoxOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(41, 179, 186, 0.8);
  backdrop-filter: blur(5px);
`

const LighBoxImage = styled.div`
  position: absolute;
  top: 60px;
  right: 60px;
  bottom: 60px;
  left: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  .gatsby-image-wrapper {
    flex: 1;
    max-height: 100%;
  }

  &:hover {
    ${Caption} {
      opacity: 1;
      visibility: visible;
    }
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  margin-left: auto;
  background-color: ${colours.darkBlue};
  border: 0;
  color: ${colours.white};
  padding: 10px;
  font-size: 2rem;
  border-bottom: 3px solid ${colours.blue};
  box-shadow: 0px 2px 5px #333;
`

const Button = styled.button`
  cursor: pointer;
  background-color: ${colours.darkBlue};
  border: 0;
  color: ${colours.white};
  padding: 10px;
  font-size: 0.8rem;
  border-bottom: 3px solid ${colours.blue};
  text-transform: uppercase;
  font-weight: 600;
  box-shadow: 0px 2px 5px #333;
`

const GalleryGridComponent = ({ data }) => {
  const [lightboxOpen, setLightBoxOpen] = useState(false)
  const [lightboxImage, setLightBoxImage] = useState(0)

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      // console.log(keyCode)
      if (keyCode === 27) {
        setLightBoxOpen(false)
      }
      if (keyCode === 39) {
        setLightBoxImage(
          lightboxImage === data.images.length - 1 ? 0 : lightboxImage + 1
        )
      }
      if (keyCode === 37) {
        setLightBoxImage(
          lightboxImage === 0 ? data.images.length - 1 : lightboxImage - 1
        )
      } else {
        return
      }
    }

    if (lightboxOpen) {
      document.addEventListener("keydown", keyHandler)
      return () => document.removeEventListener("keydown", keyHandler)
    }
  })

  return (
    <>
      <Container>
        <GalleryGridContainer>
          {data.images.map((image, index) => (
            <GalleryGridItem
              key={index}
              data-sal="slide-up"
              data-sal-easing="easeOutQuad"
              data-sal-duration="1000"
              data-sal-delay={index * `50`}
              onClick={() => {
                setLightBoxOpen(true)
                setLightBoxImage(index)
              }}
            >
              <Img fixed={image.localFile.childImageSharp.fixed} />
              {image.caption ? (
                <Caption>{image.caption.replace(/(<([^>]+)>)/gi, "")}</Caption>
              ) : null}
            </GalleryGridItem>
          ))}
        </GalleryGridContainer>
      </Container>
      <RemoveScroll enabled={lightboxOpen}>
        <LightBoxContainer active={lightboxOpen}>
          <LightBoxOverlay onClick={() => setLightBoxOpen(false)} />
          <CloseButton onClick={() => setLightBoxOpen(false)}>
            &times;
          </CloseButton>
          <LighBoxImage>
            <Button
              css={{ marginRight: "20px" }}
              onClick={() =>
                setLightBoxImage(
                  lightboxImage === 0
                    ? data.images.length - 1
                    : lightboxImage - 1
                )
              }
            >
              Previous
            </Button>
            <Img
              imgStyle={{
                objectFit: "contain",
              }}
              fluid={data.images[lightboxImage].localFile.childImageSharp.fluid}
            />
            <Button
              css={{ marginLeft: "20px" }}
              onClick={() =>
                setLightBoxImage(
                  lightboxImage === data.images.length - 1
                    ? 0
                    : lightboxImage + 1
                )
              }
            >
              Next
            </Button>
            {data.images[lightboxImage].caption ? (
              <Caption>
                {data.images[lightboxImage].caption.replace(
                  /(<([^>]+)>)/gi,
                  ""
                )}
              </Caption>
            ) : null}
          </LighBoxImage>
        </LightBoxContainer>
      </RemoveScroll>
    </>
  )
}

export default GalleryGridComponent
