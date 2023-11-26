import { Container } from "./styles";
import db from "../../db.json";
import { Service } from "../service";

export const Services = () => {
  const { services } = db;
  return (
    <Container>
      <h2>Nuestros Servicios</h2>
      <div className="services-container">
        {services.map(({ icon, title, description }, i) => (
          <Service
            key={i}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </Container>
  );
};
