import styled from "styled-components";
import { grey } from "@mui/material/colors";

export const FlexNav = styled.ul`
  display: flex;
  justify-content: ${(props) => props.center || center};
  align-items: ${(props) => props.center || center};
  list-style: none;
`;
