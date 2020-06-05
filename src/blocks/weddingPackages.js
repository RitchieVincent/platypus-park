import React from "react"
import styled from "@emotion/styled"
import Container from "../components/container"
import Img from "gatsby-image"
import { colours } from "../components/theme"
import { Link } from "gatsby"

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
  position: relative;
  flex: 1;

  &:hover {
    ${Caption} {
      opacity: 1;
      visibility: visible;
    }
  }
`

const Wrapper = styled.section`
  margin-bottom: 60px;
`

const Enquire = styled.div`
  background-color: ${colours.blue};
  align-self: flex-start;
  cursor: pointer;

  a {
    display: block;
    padding: 10px 20px;
    color: ${colours.white};
    border: 0;
    text-transform: uppercase;
    font-weight: 600;
    text-decoration: none;
    font-size: 0.8rem;
  }
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
              {item.image.caption ? (
                <Caption>
                  {item.image.caption.replace(/(<([^>]+)>)/gi, "")}
                </Caption>
              ) : null}
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
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
              <Enquire
                data-sal="slide-up"
                data-sal-easing="easeOutQuad"
                data-sal-duration="1400"
                data-sal-delay="800"
              >
                <Link to="/contact">Enquire now!</Link>
              </Enquire>
            </Info>
          </Package>
        ))}
      </Container>
    </Wrapper>
  )
}
