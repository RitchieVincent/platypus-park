import React, { useState } from "react"
import styled from "@emotion/styled"
import { colours } from "../components/theme"
import Container from "../components/container"

const Form = styled.form`
  display: flex;
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

  &[disabled] {
    cursor: not-allowed;
    background-color: #bfbfbf;
  }
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

const ContactContainer = styled.div`
  position: relative;
  padding-bottom: 60px;
`

export default () => {
  const [inputs, setInputs] = useState({})
  const [formState, setFormState] = useState(null)
  const url =
    "https://kdz5miu56d.execute-api.eu-west-2.amazonaws.com/dev/email/send"

  const handleInputChange = e => {
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))
  }

  const post = (url, body, callback) => {
    const req = new XMLHttpRequest()
    req.open("POST", url, true)
    req.setRequestHeader("Content-Type", "application/json")
    req.addEventListener("load", function () {
      if (req.status < 400) {
        callback(null, JSON.parse(req.responseText))
      } else {
        callback(new Error("Request failed: " + req.statusText))
      }
    })
    req.send(JSON.stringify(body))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setFormState("submitting")

    post(url, inputs, (err, res) => {
      if (err) {
        console.error(err)
        setFormState("error")
        return
      }
      setFormState("success")
    })
  }

  const Submitting = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(41, 179, 186, 0.7);
    color: #fff;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;

    ${formState === "error" ? "background-color: rgba(214, 0, 0, 0.7)" : null}
    ${formState === "success"
      ? "background-color: rgba(6, 160, 12, 0.7)"
      : null}
  `

  return (
    <Container>
      <ContactContainer>
        <Form method="post" action="#" onSubmit={handleSubmit}>
          <Label>
            <div>
              Name <span>Required</span>
            </div>
            <Input
              type="text"
              name="name"
              value={inputs.name}
              required
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            <div>
              Email <span>Required</span>
            </div>
            <Input
              type="email"
              name="email"
              value={inputs.email}
              required
              onChange={handleInputChange}
            />
          </Label>
          <Label>
            <div>Phone</div>
            <Input
              type="text"
              name="phone"
              value={inputs.phone}
              onChange={handleInputChange}
            />
          </Label>
          <Radios>
            <RadiosTitle>
              Enquiry Type <span>Required</span>
            </RadiosTitle>
            <label for="weddingFunction">
              <input
                type="radio"
                id="weddingFunction"
                name="type"
                value="Wedding/Function"
                required
                onChange={handleInputChange}
              />
              Wedding/Function
            </label>
            <label for="villa">
              <input
                type="radio"
                id="villa"
                name="type"
                value="Villa Accommodation"
                required
                onChange={handleInputChange}
              />
              Villa Accommodation
            </label>
            <label for="camping">
              <input
                type="radio"
                id="camping"
                name="type"
                value="Camping"
                required
                onChange={handleInputChange}
              />
              Camping
            </label>
          </Radios>
          <Label>
            <div>Message</div>
            <Textarea
              name="message"
              value={inputs.message}
              onChange={handleInputChange}
            />
          </Label>
          <Submit
            disabled={formState === "submitting" || formState === "error"}
            type="submit"
          >
            Submit
          </Submit>
        </Form>
        {formState ? (
          <Submitting>
            {formState === "submitting"
              ? "Submitting..."
              : formState === "error"
              ? "Error, please refresh the page and try again"
              : formState === "success"
              ? "Success! Thank you for your enquiry. We will be in touch!"
              : null}
          </Submitting>
        ) : null}
      </ContactContainer>
    </Container>
  )
}
