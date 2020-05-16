import React, { useEffect } from "react"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import { colours } from "../components/theme"
import { Parallax, useController } from "react-scroll-parallax"

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  margin-bottom: 60px;

  .gatsby-image-wrapper {
    height: 100%;
  }

  .parallax-container {
    height: 100%;
  }

  .parallax-inner {
    height: 100%;
    ${({ small }) => small && `position: relative; top: -45px;`}
  }

  ${({ small }) => small && `height: 40vh;`}
`

const Title = styled.h1`
  font-size: 1.6rem;

  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
`

const SubTitle = styled.h2`
  font-size: 0.8rem;
  font-family: "Nunito Sans", sans-serif;
  text-transform: uppercase;
  font-weight: 800;
`

const Content = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%) translateY(-30%);
  color: ${colours.white};
  text-align: center;
  width: 90%;
  padding-right: 10px;
  padding-left: 10px;

  ${({ small }) =>
    small &&
    `
    width: 100%;
    max-width: 1200px;
    top: 70%;
    transform: translateX(-50%) translateY(-70%);
    text-align: left;
  `}
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`

const Hero = ({ data }) => {
  const { parallaxController } = useController()

  useEffect(() => {
    window.requestAnimationFrame(() => {
      parallaxController.update()
    })
  })

  return (
    <HeroContainer small={data.small_hero}>
      <Content small={data.small_hero}>
        <Title>{data.title}</Title>
        <SubTitle>{data.subtitle}</SubTitle>
      </Content>
      <Parallax className="parallax-container" y={[-30, 30]}>
        <Img fluid={data.image.localFile.childImageSharp.fluid} />
      </Parallax>
      <Overlay />
    </HeroContainer>
  )
}

export default Hero
