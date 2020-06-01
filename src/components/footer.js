import React from "react"
import styled from "@emotion/styled"
import { colours } from "../components/theme"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "./container"

import Twitter from "../images/twitter.svg"
import Facebook from "../images/facebook.svg"
import Email from "../images/email.svg"
import Phone from "../images/phone.svg"
import Map from "../images/map.svg"

const FooterContainer = styled.footer`
  color: ${colours.darkBlue};

  a {
    display: block;
    color: ${colours.darkBlue};
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: ${colours.blue};
    }
  }
`

const FooterUpper = styled.div`
  padding-top: 40px;
  font-size: 0.9rem;
  border-bottom: 8px solid ${colours.blue};
  font-weight: 400;
  background-color: #f9f9fa;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%2329b3ba' fill-opacity='0.06' fill-rule='evenodd'/%3E%3C/svg%3E");
`

const FooterUpperInner = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`

const FooterUpperContact = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;
`

const IconContainer = styled.div`
  display: flex;
  margin-left: auto;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Icon = styled.a`
  display: flex;
  align-items: center;
  color: ${colours.white};
  text-decoration: none;
  font-size: 12px;
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
    margin-bottom: 20px;

    @media (min-width: 768px) {
      margin-right: 20px;
      margin-bottom: 0;
    }
  }
`

const SocialIcons = styled.div`
  display: flex;

  a {
    margin-right: 10px;
  }
`

const FooterLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media (min-width: 640px) {
    margin-right: 60px;
    margin-bottom: 0;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

const FooterLower = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${colours.darkBlue};
  color: ${colours.white};
  font-size: 0.6rem;
  text-transform: uppercase;
  font-weight: 600;
  padding: 5px 40px 15px 40px;

  @media (min-width: 640px) {
    flex-direction: row;
    padding: 5px 40px;
  }

  a {
    color: ${colours.white};
    border-bottom: 1px solid currentColor;
    transition: all 0.3s ease;
    line-height: 1;

    &:hover {
      color: ${colours.blue};
    }
  }
`

const LinkContainer = styled.div`
  flex: 1;
  column-count: 2;
  column-gap: 40px;

  @media (min-width: 768px) {
    column-count: 3;
  }
`

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allWordpressWpApiMenusMenusItems(
        filter: { name: { eq: "Footer Menu" } }
      ) {
        edges {
          node {
            items {
              title
              object_slug
            }
          }
        }
      }
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
      file(name: { eq: "header-logo" }) {
        childImageSharp {
          fixed(width: 170, height: 55) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <FooterContainer>
      <FooterUpper>
        <Container>
          <FooterUpperInner>
            <FooterLogo>
              <Link to="/">
                <Img fixed={data.file.childImageSharp.fixed} />
              </Link>
            </FooterLogo>
            <LinkContainer>
              {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                (node, index) => {
                  let title = node.title
                  title = title.replace(/&#038;/g, "&")
                  return (
                    <Link
                      to={`/${node.object_slug}`}
                      key={index}
                      activeStyle={{ color: "#29b3ba" }}
                    >
                      {title}
                    </Link>
                  )
                }
              )}
            </LinkContainer>
          </FooterUpperInner>
          <FooterUpperContact>
            <IconContainer>
              <Icon
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  data.allWordpressAcfOptions.edges[0].node.options.address
                )}`}
                target="_blank"
                rel="noopener nofollow"
              >
                <Map />
                {data.allWordpressAcfOptions.edges[0].node.options.address}
              </Icon>
              <Icon
                href={`mailto:${data.allWordpressAcfOptions.edges[0].node.options.email}`}
              >
                <Email />
                {data.allWordpressAcfOptions.edges[0].node.options.email}
              </Icon>
              <Icon
                href={`tel:${data.allWordpressAcfOptions.edges[0].node.options.phone}`}
              >
                <Phone />
                {data.allWordpressAcfOptions.edges[0].node.options.phone}
              </Icon>
              <SocialIcons>
                <Icon
                  href={
                    data.allWordpressAcfOptions.edges[0].node.options.twitter
                  }
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <Twitter />
                </Icon>
                <Icon
                  href={
                    data.allWordpressAcfOptions.edges[0].node.options.facebook
                  }
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <Facebook />
                </Icon>
              </SocialIcons>
            </IconContainer>
          </FooterUpperContact>
        </Container>
      </FooterUpper>
      <FooterLower>
        <div>© {new Date().getFullYear()} Platypus Park Riverside Retreat</div>
        <div>
          <a href="mailto:info@rcfranklin.co.uk">Site by R C Franklin Ltd</a>
        </div>
      </FooterLower>
    </FooterContainer>
  )
}

export default Footer
