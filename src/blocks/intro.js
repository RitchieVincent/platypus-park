import React from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { colours } from "../components/theme"
import Container from "../components/container"

const Intro = styled.div`
  display: flex;
  padding-top: 30px;
  padding-bottom: 60px;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const IntroTitle = styled.h2`
  padding-bottom: 10px;
  border-bottom: 3px solid ${colours.blue};
`

const IntroText = styled.div``

const IntroImages = styled.div`
  display: none;

  @media (min-width: 768px) {
    position: relative;
    display: flex;
    margin-left: 300px;
    left: -120px;
  }
`

const IntroImage = styled.div`
  padding: 10px 10px 25px 10px;
  box-shadow: 0px 2px 15px #333;
  background-color: #eee;
  border: 1px solid #fff;
  height: max-content;

  @media (min-width: 768px) {
    &:nth-of-type(1) {
      position: relative;
      top: -10px;
      z-index: 1;
    }
    &:nth-of-type(2) {
      position: absolute;
      left: -70px;
      transform: rotate(-5deg);
    }
    &:nth-of-type(3) {
      position: absolute;
      right: -70px;
      transform: rotate(5deg);
    }
  }
`

export default ({ data }) => {
  return (
    <Container>
      <Intro>
        <IntroText>
          <IntroTitle>{data.title}</IntroTitle>
          <div>{data.text}</div>
        </IntroText>
        <IntroImages>
          {data.images.map((image, index) => (
            <IntroImage
              key={index}
              data-sal="slide-up"
              data-sal-easing="easeOutQuad"
              data-sal-duration="1000"
            >
              <Img fixed={image.localFile.childImageSharp.fixed} />
            </IntroImage>
          ))}
        </IntroImages>
      </Intro>
    </Container>
  )
}
