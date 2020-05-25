import React from "react"
import styled from "@emotion/styled"
import Container from "../components/container"
import Img from "gatsby-image"
import { colours } from "../components/theme"

const Package = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  &:not(:last-of-type) {
    margin-bottom: 60px;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  flex: 1;

  @media (min-width: 768px) {
    padding-top: 0;
    padding-left: 40px;
  }
`

const Title = styled.h3`
  width: max-content;
  margin-bottom: 15px;
  padding-right: 40px;
  border-bottom: 2px solid ${colours.blue};
`

const Price = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1rem;
`

const Description = styled.p``

const Image = styled.div`
  flex: 1;
`

const Wrapper = styled.section`
  margin-bottom: 60px;
`

const Enquire = styled.a`
  background-color: ${colours.blue};
  color: ${colours.white};
  border: 0;
  text-transform: uppercase;
  font-weight: 600;
  align-self: flex-start;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.8rem;
`

export default ({ data }) => {
  return (
    <Wrapper>
      <Container>
        {data.package.map((item, index) => (
          <Package key={index}>
            <Image
              data-sal="fade"
              data-sal-easing="easeOutQuad"
              data-sal-duration="2000"
            >
              <Img fluid={item.image.localFile.childImageSharp.fluid} />
            </Image>
            <Info>
              <Title
                data-sal="slide-left"
                data-sal-easing="easeOutQuad"
                data-sal-duration="1000"
                data-sal-delay="400"
              >
                {item.title}
              </Title>
              <Price
                data-sal="slide-left"
                data-sal-easing="easeOutQuad"
                data-sal-duration="1000"
                data-sal-delay="500"
              >
                {item.price}
              </Price>
              <Description
                data-sal="slide-left"
                data-sal-easing="easeOutQuad"
                data-sal-duration="1000"
                data-sal-delay="600"
              >
                {item.description}
              </Description>
              <Enquire
                data-sal="slide-up"
                data-sal-easing="easeOutQuad"
                data-sal-duration="1400"
                data-sal-delay="800"
                href="/"
              >
                Enquire now!
              </Enquire>
            </Info>
          </Package>
        ))}
      </Container>
    </Wrapper>
  )
}
