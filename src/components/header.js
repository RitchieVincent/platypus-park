import { Link, useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import { colours } from "../components/theme"
import { useInView } from "react-intersection-observer"
import { RemoveScroll } from "react-remove-scroll"

import Twitter from "../images/twitter.svg"
import Facebook from "../images/facebook.svg"
import Email from "../images/email.svg"
import Phone from "../images/phone.svg"
import Map from "../images/map.svg"
import Bars from "../images/bars.svg"
import Times from "../images/times.svg"

const logo = css`
  filter: contrast(0) brightness(2);
`
const LogoContainer = styled.div`
  padding-top: 10px;

  @media (min-width: 1000px) {
    margin-right: 100px;
  }
`

const HeaderUpper = styled.div`
  justify-content: space-between;
  padding: 2px 40px;
  font-weight: 400;
  background-color: ${colours.blue};
  display: none;

  @media (min-width: 600px) {
    display: flex;
  }
`

const IconContainer = styled.div`
  display: flex;
  margin-left: auto;
`

const Icon = styled.a`
  display: flex;
  align-items: center;
  color: ${colours.white};
  text-decoration: none;
  font-size: 9px;
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

const Menu = styled.nav`
  display: none;
  justify-content: space-between;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 12px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #f9f9fa;
    font-weight: 800;
    transition: all 0.3s ease;

    &:not(:last-of-type) {
      margin-right: 30px;
    }

    ${({ sticky }) => sticky && `color: #000;`}

    &.active {
      color: ${colours.blue};
      ${({ sticky }) => sticky && `color: ${colours.white};`}
    }

    &:hover {
      color: ${colours.blue};
      ${({ sticky }) => sticky && `color: ${colours.darkBlue};`}
    }
  }

  @media (min-width: 1000px) {
    display: flex;
  }
`

const HeaderLower = styled.header`
  padding: 0 20px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -73px;
  z-index: 3;
  transition: all 0.3s ease;
  will-change: transform;

  ${({ sticky }) =>
    sticky &&
    `background-color: rgba(41, 179, 186, 0.8);
    backdrop-filter: blur(5px);`}

  @media (min-width: 1000px) {
    padding: 0 40px;
  }
`

const MenuToggle = styled.div`
  display: flex;

  svg {
    width: 30px;
    height: 30px;
    fill: ${colours.white};
  }

  @media (min-width: 1000px) {
    display: none;
  }
`

const MenuToggleButton = styled.button`
  display: flex;
  border: 0;
  background: none;
  cursor: pointer;
`

const menuListTrans = () => {
  let styles = {}
  for (let $i = 0; $i < 10; $i++) {
    styles["&:nth-of-type(" + $i + ")"] = {
      transition: "all 0.3s ease " + $i * 0.08 + "s",
    }
  }
  return styles
}

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 11;
  padding: 20px 10px;
  background-color: rgba(41, 179, 186, 0.8);
  backdrop-filter: blur(5px);
  color: ${colours.white};
  text-align: center;
  transition: all 0.3s ease;
  opacity: 0;
  visibility: hidden;

  a {
    color: ${colours.white};
    width: 100%;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 1;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    will-change: transform;
    ${menuListTrans};

    &:hover {
      color: ${colours.darkBlue};
    }

    &:not(:last-of-type) {
      padding-bottom: 40px;
    }
  }

  &.active {
    opacity: 1;
    visibility: visible;

    a {
      opacity: 1;
      visibility: visible;
      transform: none;
    }
  }

  svg {
    position: absolute;
    top: 20px;
    right: 25px;
    width: 35px;
    height: 35px;
    cursor: pointer;
    fill: ${colours.white};
  }

  @media (min-width: 1000px) {
    display: none;
  }
`

const Header = () => {
  const [ref, inView] = useInView({ threshold: 0 })
  const [menuOpen, setMenuOpen] = useState(false)

  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "header-logo" }) {
        childImageSharp {
          fixed(width: 170, height: 55, grayscale: true) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
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
      allWordpressWpApiMenusMenusItems(
        filter: { name: { eq: "Header Menu" } }
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
    }
  `)

  return (
    <>
      <HeaderUpper ref={ref}>
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
          <Icon
            href={data.allWordpressAcfOptions.edges[0].node.options.twitter}
            target="_blank"
            rel="noopener nofollow"
          >
            <Twitter />
          </Icon>
          <Icon
            href={data.allWordpressAcfOptions.edges[0].node.options.facebook}
            target="_blank"
            rel="noopener nofollow"
          >
            <Facebook />
          </Icon>
        </IconContainer>
      </HeaderUpper>
      <HeaderLower sticky={!inView}>
        <LogoContainer>
          <Link to="/">
            <Img css={logo} fixed={data.file.childImageSharp.fixed} />
          </Link>
        </LogoContainer>
        {!menuOpen ? (
          <MenuToggle>
            <MenuToggleButton
              aria-label="Open Mobile Menu"
              onClick={() => setMenuOpen(true)}
            >
              <Bars />
            </MenuToggleButton>
          </MenuToggle>
        ) : null}
        <Menu sticky={!inView}>
          {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            (node, index) => {
              let title = node.title
              title = title.replace(/&#038;/g, "&")
              return (
                <Link
                  to={`/${node.object_slug}`}
                  key={index}
                  activeClassName="active"
                >
                  {title}
                </Link>
              )
            }
          )}
        </Menu>
      </HeaderLower>
      <RemoveScroll enabled={menuOpen}>
        <MobileMenu className={menuOpen ? "active" : ""}>
          <Times
            aria-label="Close Mobile Menu"
            onClick={() => setMenuOpen(false)}
          />
          {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
            (node, index) => {
              let title = node.title
              title = title.replace(/&#038;/g, "&")
              return (
                <Link
                  to={`/${node.object_slug}`}
                  key={index}
                  activeClassName="active"
                >
                  {title}
                </Link>
              )
            }
          )}
        </MobileMenu>
      </RemoveScroll>
    </>
  )
}

export default Header
