import { Title } from "../styledComponents/Tittle";
import { red } from "@mui/material/colors";

function notFound() {
  return <Title color={red[500]}>Error</Title>;
}

export default notFound;
