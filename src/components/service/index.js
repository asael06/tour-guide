import { Icon } from "@mui/material";
import { Container } from "./styles";

export const Service = ({ icon, title, description }) => {
  return (
    <Container>
      <div className="title-container">
        <Icon>{icon}</Icon>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </Container>
  );
};
