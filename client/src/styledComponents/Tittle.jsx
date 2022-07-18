import styled from "styled-components";
import { indigo } from "@mui/material/colors";

export const Title = styled.h1`
  color: ${(props) => props.color || indigo[400]};
  font-size: 2rem;
  padding: 1em 0.5em;
  font-weight: 700;
`;
