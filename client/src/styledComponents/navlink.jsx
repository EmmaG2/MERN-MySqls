import styled from "styled-components";
import { Link } from "react-router-dom";
import { grey, cyan } from "@mui/material/colors";

export const NavLink = styled(Link)`
  color: ${grey[50]};
  text-decoration: none;
  padding: 0 10px;

  &:hover {
    color: ${cyan[300]};
  }
`;
