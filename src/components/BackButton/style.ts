import styled from "styled-components"
import { Link } from "react-router-dom"
export const Back = styled(Link)`
  position: fixed;
      top: 20px;
      left: 20px;
      &:hover{
        color: lightblue;
  transition: all.2s;
      }
`
