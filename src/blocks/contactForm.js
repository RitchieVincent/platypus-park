import React from "react"
import styled from "@emotion/styled"
import { colours } from "../components/theme"
import Container from "../components/container"

const Form = styled.form`
  display: flex;
  padding-bottom: 60px;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
`

const Textarea = styled.textarea`
  resize: vertical;
  min-height: 100px;
  width: 100%;
  border: 1px solid ${colours.blue};
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-basis: 100%;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    flex-basis: calc((100% / 2) - 10px);
  }

  @media (min-width: 768px) {
    flex-basis: calc((100% / 3) - 10px);
  }

  span {
    margin-left: 10px;
    color: red;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.6rem;
  }

  &:last-of-type {
    flex-basis: 100%;

    @media (min-width: 600px) {
      flex-basis: calc((100% / 2) - 10px);
    }

    @media (min-width: 768px) {
      flex-basis: 100%;
    }
  }
`

const Input = styled.input`
  width: 100%;
  border: 1px solid ${colours.blue};
`

const Submit = styled.button`
  background-color: ${colours.blue};
  color: ${colours.white};
  text-transform: uppercase;
  font-weight: 600;
  border: 0;
  cursor: pointer;
  width: max-content;
  padding: 5px 20px;
  grid-column-end: -1;
  margin-left: auto;
`

const ContactContainer = styled.div``

export default () => {
  return (
    <Container>
      <ContactContainer>
        <Form method="post" action="#">
          <Label>
            <div>
              Name <span>Required</span>
            </div>
            <Input type="text" name="name" required />
          </Label>
          <Label>
            <div>
              Email <span>Required</span>
            </div>
            <Input type="email" name="email" required />
          </Label>
          <Label>
            <div>Phone</div>
            <Input type="text" name="phone" />
          </Label>
          <Label>
            <div>Message</div>
            <Textarea name="message" />
          </Label>
          <Submit type="submit">Submit</Submit>
        </Form>
      </ContactContainer>
    </Container>
  )
}
