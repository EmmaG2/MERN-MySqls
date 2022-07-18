import { FlexNav } from "../styledComponents/flex";
import { Header } from "../styledComponents/header";
import { NavLink } from "../styledComponents/navlink";
import { Title } from "../styledComponents/Tittle";
import { lightBlue } from "@mui/material/colors";

function navbar() {
  return (
    <Header>
      <NavLink to="/">
        <Title>Tasks App</Title>
      </NavLink>

      <FlexNav center="center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/new">New Task</NavLink>
        </li>
      </FlexNav>
    </Header>
  );
}

export default navbar;
