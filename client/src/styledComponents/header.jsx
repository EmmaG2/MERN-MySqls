import styled from "styled-components";
import { teal, grey } from "@mui/material/colors";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${grey[900]};

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }
`;
