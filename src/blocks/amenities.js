import React from "react"
import styled from "@emotion/styled"
import Container from "../components/container"
import { colours } from "../components/theme"

import Golf from "../images/golf.svg"
import Water from "../images/water.svg"
import Smile from "../images/smile.svg"
import Fire from "../images/fire.svg"
import Camera from "../images/camera.svg"
import Sun from "../images/sun.svg"
import Canoe from "../images/canoe.svg"
import Platypus from "../images/platypus.svg"
import Volleyball from "../images/volleyball.svg"
import Electriccar from "../images/electriccar.svg"
import Birdwatching from "../images/birdwatching.svg"
import Ski from "../images/ski.svg"
import Vacations from "../images/vacations.svg"
import Tesla from "../images/tesla.svg"
import Fisherman from "../images/fisherman.svg"

const AmenitiesContainer = styled.div`
  display: flex;
  margin-bottom: 60px;
  justify-content: space-between;
  flex-wrap: wrap;
`

const AmenityUpper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

const Amenity = styled.div`
  flex-basis: 100%;

  @media (min-width: 768px) {
    flex-basis: calc(50% - 20px);
  }

  svg {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    fill: ${colours.blue};
  }
`

const Icons = {
  golf: Golf,
  water: Water,
  smile: Smile,
  fire: Fire,
  camera: Camera,
  sun: Sun,
  canoe: Canoe,
  platypus: Platypus,
  volleyball: Volleyball,
  electriccar: Electriccar,
  birdwatching: Birdwatching,
  ski: Ski,
  vacations: Vacations,
  tesla: Tesla,
  fisherman: Fisherman,
}

const Title = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.9rem;
`

const Text = styled.p``

export default ({ data }) => {
  return (
    <Container>
      <AmenitiesContainer>
        {data.items.map((item, index) => {
          let Icon = Icons[item.icon]

          if (!Icon) Icon = Icons["smile"]

          return (
            <Amenity
              key={index}
              data-sal="slide-up"
              data-sal-easing="easeOutQuad"
              data-sal-duration="1000"
              data-sal-delay={index * `50`}
            >
              <AmenityUpper>
                <Icon></Icon>
                <Title>{item.title}</Title>
              </AmenityUpper>
              <Text>{item.text}</Text>
            </Amenity>
          )
        })}
      </AmenitiesContainer>
    </Container>
  )
}
