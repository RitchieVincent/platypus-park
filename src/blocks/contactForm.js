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
  margin-left: auto;
`

const Radios = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  span {
    margin-left: 10px;
    color: red;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.6rem;
  }

  input {
    margin-right: 10px;
  }

  label {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  label:not(:last-of-type) {
    margin-right: 50px;
  }
`

const RadiosTitle = styled.div`
  margin-right: 50px;
  margin-bottom: 20px;
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
          <Radios>
            <RadiosTitle>
              Enquiry Type <span>Required</span>
            </RadiosTitle>
            <label for="weddingFunction">
              <input
                type="radio"
                id="weddingFunction"
                name="enquirytype"
                value="weddingFunction"
              />
              Wedding/Function
            </label>
            <label for="villa">
              <input type="radio" id="villa" name="enquirytype" value="villa" />
              Villa Accommodation
            </label>
            <label for="camping">
              <input
                type="radio"
                id="camping"
                name="enquirytype"
                value="camping"
              />
              Camping
            </label>
          </Radios>
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
