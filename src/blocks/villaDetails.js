import React, { useState, useEffect, useCallback } from "react"
import { useEmblaCarousel } from "embla-carousel-react"
import styled from "@emotion/styled"
import Container from "../components/container"
import Img from "gatsby-image"
import { colours } from "../components/theme"
import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons"

import Aircon from "../images/aircon.svg"
import Bathroom from "../images/bathroom.svg"
import BathroomItems from "../images/bathroomitems.svg"
import Cooking from "../images/cooking.svg"
import Dining from "../images/dining.svg"
import Hanger from "../images/hanger.svg"
import Heating from "../images/heating.svg"
import Iron from "../images/iron.svg"
import Kitchen from "../images/kitchen.svg"
import LBed from "../images/lbed.svg"
import Lounge from "../images/lounge.svg"
import SBed from "../images/sbed.svg"
import SofaBed from "../images/sofabed.svg"
import Towel from "../images/towel.svg"
import TV from "../images/tv.svg"
import Utensils from "../images/utensils.svg"
import Washing from "../images/washing.svg"

const Icons = {
  aircon: Aircon,
  bathroom: Bathroom,
  bathroomitems: BathroomItems,
  cooking: Cooking,
  dining: Dining,
  hanger: Hanger,
  heating: Heating,
  iron: Iron,
  kitchen: Kitchen,
  lbed: LBed,
  lounge: Lounge,
  sbed: SBed,
  sofabed: SofaBed,
  towel: Towel,
  tv: TV,
  utensils: Utensils,
  washing: Washing,
}

const DetailsContainer = styled.div`
  padding-top: 60px;
`

const Info = styled.div`
  padding-top: 60px;
`

const ImageContainer = styled.div`
  position: relative;
  padding: 0;

  @media (min-width: 768px) {
    padding: 0 50px;
  }

  .gatsby-image-wrapper {
    height: 100%;
  }

  .embla__viewport {
    overflow: hidden;
  }

  .embla__viewport.is-draggable {
    cursor: move;
    cursor: grab;
  }

  .embla__viewport.is-dragging {
    cursor: grabbing;
  }

  .embla__container {
    display: flex;
    will-change: transform;
  }

  .embla__button {
    background-color: ${colours.white};
    position: absolute;
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    width: 3rem;
    height: 3rem;
    justify-content: center;
    align-items: center;
    padding: 0;

    svg {
      position: relative;
      top: 3px;
      width: 1.5rem;
      height: 1.5rem;
    }
    &:not(:disabled) {
      cursor: pointer;
      fill: ${colours.blue};
    }
    &:disabled {
      fill: ${colours.darkBlue};
      opacity: 0.2;
      cursor: not-allowed;
    }

    @media (min-width: 768px) {
      background-color: transparent;
    }
  }
  .embla__button--prev {
    left: 0;
  }

  .embla__button--next {
    right: 0;
  }

  .embla__dots {
    position: absolute;
    display: flex;
    list-style: none;
    padding-left: 0;
    justify-content: center;
    left: 0;
    right: 0;
    top: 100%;
  }

  .embla__dot {
    background-color: transparent;
    cursor: pointer;
    position: relative;
    padding: 0;
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    border: 0;
    display: flex;
    align-items: center;
  }

  .embla__dot:after {
    background-color: ${colours.darkBlue};
    width: 100%;
    height: 0.2rem;
    content: "";
    opacity: 0.5;
  }

  .embla__dot.is-selected:after {
    background-color: ${colours.blue};
    opacity: 1;
  }
`

const Title = styled.h3`
  display: inline-flex;
  padding-right: 20px;
  border-bottom: 2px solid ${colours.blue};
`

const ItemContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const ItemCategory = styled.div`
  flex-basis: 100%;
  padding-bottom: 15px;

  @media (min-width: 768px) {
    flex-basis: calc(50% - 10px);
  }
`

const ItemTitle = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 10px;
`

const ItemCategoryInner = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.div`
  display: flex;
  margin-right: 30px;
  margin-bottom: 10px;
`

const IconContainer = styled.div`
  display: flex;
  margin-right: 10px;

  svg {
    width: 20px;
    height: 20px;
    opacity: 0.7;
  }
`

const ImageWrap = styled.div`
  padding: 0 10px;
  flex: 0 0 100%;
  height: 400px;

  @media (min-width: 768px) {
    flex: 0 0 50%;
  }
`

const VillaDetails = ({ data }) => {
  const [EmblaCarouselReact, embla] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: true,
    autoplay: true,
    delayLength: 2000,
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollTo = useCallback(index => embla.scrollTo(index), [embla])
  const scrollPrev = useCallback(() => embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla.scrollNext(), [embla])

  useEffect(() => {
    if (embla) {
      const onSelect = () => {
        setSelectedIndex(embla.selectedScrollSnap())
        setPrevBtnEnabled(embla.canScrollPrev())
        setNextBtnEnabled(embla.canScrollNext())
      }
      setScrollSnaps(embla.scrollSnapList())
      embla.on("select", onSelect)
      onSelect()
    }
  }, [embla])

  return (
    <Container>
      <DetailsContainer>
        <ImageContainer>
          <EmblaCarouselReact className="embla__viewport">
            <div className="embla__container">
              {data.images.map((image, index3) => (
                <ImageWrap key={index3}>
                  <Img fluid={image.localFile.childImageSharp.fluid} />
                </ImageWrap>
              ))}
            </div>
          </EmblaCarouselReact>
          <div className="embla__dots">
            {scrollSnaps.map((snap, index) => (
              <DotButton
                selected={index === selectedIndex}
                onClick={() => scrollTo(index)}
                key={index}
              />
            ))}
          </div>
          <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
          <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </ImageContainer>
        <Info>
          <Title>{data.title}</Title>
          <ItemContainer>
            {data.info.map((item, index) => (
              <ItemCategory key={index}>
                <ItemTitle>{item.title}</ItemTitle>

                <ItemCategoryInner>
                  {item.items.map((i, index2) => {
                    let Icon = Icons[i.icon]

                    if (!Icon) Icon = Icons["aircon"]

                    return (
                      <Item key={index2}>
                        <IconContainer>
                          <Icon></Icon>
                        </IconContainer>
                        {i.item}
                      </Item>
                    )
                  })}
                </ItemCategoryInner>
              </ItemCategory>
            ))}
          </ItemContainer>
        </Info>
      </DetailsContainer>
    </Container>
  )
}

export default VillaDetails
