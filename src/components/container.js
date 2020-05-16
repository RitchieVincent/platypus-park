import React from "react"
import styled from "@emotion/styled"

const ContainerComponent = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 10px;
  padding-left: 10px;
  width: 100%;
  overflow: hidden;
`

const Container = ({ children }) => {
  return <ContainerComponent>{children}</ContainerComponent>
}

export default Container
