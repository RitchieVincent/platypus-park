import React, { useState, useEffect, useCallback } from "react"
import { useEmblaCarousel } from "embla-carousel-react"
import styled from "@emotion/styled"
import { colours } from "../components/theme"
import Img from "gatsby-image"

import { DotButton, PrevButton, NextButton } from "./EmblaCarouselButtons"

const TestimonialsContainer = styled.section`
  position: relative;
  background-color: rgba(0, 0, 0, 0.6);
  padding-top: 60px;
  padding-bottom: 80px;
  margin-bottom: 40px;

  @media (min-width: 900px) {
    margin-bottom: 0;
  }
`

const Testimonials = styled.div`
  position: relative;
  max-width: 800px;
  width: 75%;
  margin: 0 auto;

  @media (min-width: 900px) {
    width: 100%;
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
    background-color: transparent;
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
      width: 1.5rem;
      height: 1.5rem;
    }
    &:not(:disabled) {
      cursor: pointer;
      fill: ${colours.blue};
    }
    &:disabled {
      fill: ${colours.white};
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  .embla__button--prev {
    left: -3.5rem;
  }

  .embla__button--next {
    right: -3.5rem;
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
    background-color: ${colours.white};
    width: 100%;
    height: 0.2rem;
    content: "";
  }

  .embla__dot.is-selected:after {
    background-color: ${colours.blue};
    opacity: 1;
  }
`

const Testimonial = styled.div`
  width: 100%;
  max-width: 90%;
  position: relative;
  flex: 0 0 auto;
  color: ${colours.darkBlue};
  padding: 10px;

  @media (min-width: 768px) {
  }
`

const TestimonialInner = styled.div`
  border-radius: 6px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  padding: 30px 30px 15px 30px;
  background-color: ${colours.white};
  height: 100%;
`

const TestimonialQuote = styled.div`
  font-size: 0.8rem;
  font-family: "Libre Baskerville", serif;
  margin-bottom: 15px;
`

const TestimonialName = styled.div`
  font-size: 0.8rem;
  line-height: 1;
  margin-bottom: 5px;
`
const TestimonialTitle = styled.div`
  font-size: 0.6rem;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
`

const TestimonialContainerTitle = styled.h3`
  text-align: center;
  color: ${colours.white};
`

const TestimonialsBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  /* backdrop-filter: blur(2px); */

  .gatsby-image-wrapper {
    height: 100%;
  }
`

const TestimonialComponent = data => {
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
    <>
      <TestimonialsContainer>
        <TestimonialsBg
          data-sal="fade"
          data-sal-easing="easeOutQuad"
          data-sal-duration="1000"
        >
          <Img
            fluid={
              data.data.options.background_image.localFile.childImageSharp.fluid
            }
          />
        </TestimonialsBg>
        <TestimonialContainerTitle>Testimonials</TestimonialContainerTitle>
        <Testimonials>
          <EmblaCarouselReact className="embla__viewport">
            <div className="embla__container">
              {data.data.options.testimonial.map((t, index) => (
                <Testimonial key={index}>
                  <TestimonialInner>
                    <TestimonialQuote>{t.quote}</TestimonialQuote>
                    <TestimonialName>{t.name}</TestimonialName>
                    <TestimonialTitle>{t.title}</TestimonialTitle>
                  </TestimonialInner>
                </Testimonial>
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
        </Testimonials>
      </TestimonialsContainer>
    </>
  )
}

export default TestimonialComponent
