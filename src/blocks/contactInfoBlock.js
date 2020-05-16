import React from "react"
import styled from "@emotion/styled"
import { colours } from "../components/theme"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../components/container"

import Twitter from "../images/twitter.svg"
import Facebook from "../images/facebook.svg"
import Email from "../images/email.svg"
import Phone from "../images/phone.svg"
import Map from "../images/map.svg"

const BlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const IconContainer = styled.div`
  flex: 1;
`

const Icon = styled.a`
  display: flex;
  align-items: center;
  color: ${colours.blue};
  text-decoration: none;
  font-size: 0.7rem;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-weight: 600;

  &:hover {
    color: #000;
  }

  svg {
    width: 15px;
    height: 15px;
    margin-right: 5px;
    fill: currentColor;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`

const Text = styled.div`
  padding-bottom: 20px;
  flex: 1;

  @media (min-width: 768px) {
    padding-bottom: 0;
    padding-right: 60px;
  }
`

const ContactInfoBlock = ({ data }) => {
  const options = useStaticQuery(graphql`
    {
      allWordpressAcfOptions {
        edges {
          node {
            id
            options {
              address
              email
              facebook
              phone
              twitter
            }
          }
        }
      }
    }
  `)

  const newData = options.allWordpressAcfOptions.edges[0].node.options

  return (
    <Container>
      <BlockContainer>
        <Text dangerouslySetInnerHTML={{ __html: data.text }} />
        <IconContainer>
          <Icon
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              newData.address
            )}`}
            target="_blank"
            rel="noopener nofollow"
          >
            <Map />
            {newData.address}
          </Icon>
          <Icon href={`mailto:${newData.email}`}>
            <Email />
            {newData.email}
          </Icon>
          <Icon href={`tel:${newData.phone}`}>
            <Phone />
            {newData.phone}
          </Icon>
          <Icon href={newData.twitter} target="_blank" rel="noopener nofollow">
            <Twitter />
            <span>{newData.twitter}</span>
          </Icon>
          <Icon href={newData.facebook} target="_blank" rel="noopener nofollow">
            <Facebook />
            <span>{newData.facebook}</span>
          </Icon>
        </IconContainer>
      </BlockContainer>
    </Container>
  )
}

export default ContactInfoBlock
