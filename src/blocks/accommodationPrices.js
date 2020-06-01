import React from "react"
import styled from "@emotion/styled"
import Container from "../components/container"
import { colours } from "../components/theme"

const Categories = styled.div``

const Category = styled.div`
  margin-bottom: 60px;
`

const Title = styled.h2`
  border-bottom: 2px solid ${colours.blue};
  padding-bottom: 5px;
  padding-right: 40px;
  margin-bottom: 0;
  display: inline-flex;
`

const Subtitle = styled.div`
  margin-top: 20px;
`

const Table = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: ${colours.white};
  color: #000;
  border-radius: 6px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  padding: 30px 15px;
  overflow-x: scroll;

  &::after {
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    content: "Scroll \u2192";
    font-size: 0.7rem;
  }

  @media (min-width: 400px) {
    padding: 30px;

    &::after {
      display: none;
    }
  }
`

const TableTitle = styled.div`
  margin-bottom: 0;
  font-weight: 600;
  text-transform: uppercase;
`

const TableSubtitle = styled.div`
  font-style: italic;
  font-size: 0.8rem;
`

const TableHeaders = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media (min-width: 600px) {
    justify-content: flex-end;
  }
`

const TableHeader = styled.div`
  align-self: flex-end;
  min-width: 100px;
  text-align: center;
  font-weight: 600;

  &:not(:first-of-type) {
    margin-right: 20px;
  }
`

const TableBodies = styled.div`
  display: flex;
  padding-top: 5px;
  padding-bottom: 5px;
  border-top: 1px solid ${colours.blue};
`

const TableBody = styled.div`
  display: flex;
  text-align: center;
  min-width: 100px;

  &:not(:first-of-type) {
    margin-right: 20px;
    justify-content: center;
  }

  &:first-of-type {
    margin-right: auto;
  }
`

const Note = styled.div`
  font-style: italic;
  font-size: 0.7rem;
  line-height: 1;
`

export default ({ data }) => {
  console.log(data)
  return (
    <Container>
      <Categories>
        {data.category.map((item, index) => (
          <Category key={index}>
            {item.title ? (
              <Title dangerouslySetInnerHTML={{ __html: item.title }} />
            ) : null}
            {item.subtitle ? (
              <Subtitle dangerouslySetInnerHTML={{ __html: item.subtitle }} />
            ) : null}

            {item.price_tables.map((i, index2) => (
              <Table
                key={index2}
                data-sal="slide-up"
                data-sal-easing="easeOutQuad"
                data-sal-duration="1200"
                data-sal-delay={index2 * `150`}
              >
                {i.title ? (
                  <TableTitle dangerouslySetInnerHTML={{ __html: i.title }} />
                ) : null}
                {i.subtitle ? (
                  <TableSubtitle
                    dangerouslySetInnerHTML={{ __html: i.subtitle }}
                  />
                ) : null}

                <TableHeaders>
                  {i.prices.header.map((x, index3) => (
                    <TableHeader
                      key={index3}
                      dangerouslySetInnerHTML={{ __html: x.c }}
                    />
                  ))}
                </TableHeaders>

                <div>
                  {i.prices.body.map((y, index4) => (
                    <TableBodies key={index4}>
                      {y.map((z, index5) => (
                        <TableBody
                          key={index5}
                          dangerouslySetInnerHTML={{ __html: z.c }}
                        />
                      ))}
                    </TableBodies>
                  ))}
                </div>
              </Table>
            ))}
            <Note dangerouslySetInnerHTML={{ __html: item.note }} />
          </Category>
        ))}
      </Categories>
    </Container>
  )
}
