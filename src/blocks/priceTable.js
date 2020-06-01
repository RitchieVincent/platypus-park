import React from "react"
import styled from "@emotion/styled"
import { colours } from "../components/theme"
import Container from "../components/container"

const PriceTableContainer = styled.div`
  padding-bottom: 60px;
`

const CategoryTitle = styled.h2`
  display: inline-flex;
  padding-bottom: 10px;
  border-bottom: 2px solid ${colours.blue};
`

const PriceBlockContainer = styled.div`
  padding: 20px 0;
`

const PriceCategory = styled.div`
  &:not(:first-of-type) {
    margin-top: 60px;
  }
`

const PriceBlock = styled.div`
  background-color: ${colours.white};
  color: #000;
  border-radius: 6px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  padding: 30px 30px 30px 30px;

  &:not(:last-of-type) {
    margin-bottom: 40px;
  }
`

const Title = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${colours.blue};
  display: inline-flex;
`

const SubTitle = styled.div`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.6rem;
  line-height: 1.3;
  margin-bottom: 5px;
`

const PriceContainer = styled.div`
  padding-top: 10px;

  &:not(:last-of-type) {
    padding-bottom: 10px;
    border-bottom: 1px solid ${colours.darkBlue};
  }
`

const OuterNotes = styled.div`
  padding-top: 20px;
  border-top: 1px solid ${colours.blue};

  a {
    color: ${colours.blue};
  }
`

const Notes = styled.div`
  padding-bottom: 20px;

  a {
    color: ${colours.blue};
  }
`

const Price = styled.div`
  font-weight: 600;
`

const Note = styled.div`
  font-size: 0.8rem;
  font-style: italic;
`

export default ({ data }) => {
  return (
    <PriceTableContainer>
      {data.category.map((item, index) => (
        <PriceCategory key={index}>
          <Container>
            <CategoryTitle>{item.title}</CategoryTitle>
          </Container>
          <Container>
            <PriceBlockContainer>
              {item.type.map((i, index2) => (
                <PriceBlock
                  key={index2}
                  data-sal="slide-up"
                  data-sal-easing="easeOutQuad"
                  data-sal-duration="1200"
                  data-sal-delay={index2 * `150`}
                >
                  <Title>{i.title}</Title>
                  {i.subtitle && <SubTitle>{i.subtitle}</SubTitle>}
                  {i.prices.map((p, index3) => (
                    <PriceContainer key={index3}>
                      <Price>{p.price}</Price>
                      {p.note && <Note>{p.note}</Note>}
                    </PriceContainer>
                  ))}
                </PriceBlock>
              ))}
            </PriceBlockContainer>
          </Container>
          {item.notes && (
            <Container>
              <Notes dangerouslySetInnerHTML={{ __html: item.notes }} />
            </Container>
          )}
        </PriceCategory>
      ))}
      {data.notes && (
        <Container>
          <OuterNotes dangerouslySetInnerHTML={{ __html: data.notes }} />
        </Container>
      )}
    </PriceTableContainer>
  )
}
