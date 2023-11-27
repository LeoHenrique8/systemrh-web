import styled from "styled-components";
import { Link } from "react-router-dom";

export const Main = styled.main`

  margin-left: 150px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
`
export const IconLink = styled(Link)`
margin: 50px 100px;
display: flex;
flex-direction: column;
align-items: center;
text-decoration: none;
justify-content: space-between;

&:hover{
  color: lightblue;
  transition: all.2s;
}
`
