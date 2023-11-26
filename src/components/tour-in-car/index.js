import { manageCart } from "../../utils";
import { Button } from "../button/button";
import { Container } from "./styles";

export const TourInCart = ({ tour, setTours }) => {
  const { id, name, price, rate } = tour;
  return (
    <Container>
      <div className="img-container">
        <img src={require(`../../assets/destinations/${id}.jpg`)} alt={name} />
      </div>
      <div className="tour-detail">
        <p>Lucar: {name}</p>
        <p>Precio: {price}</p>
        <p>Calificación: {rate}</p>
      </div>
      <div className="button-delete">
        <Button
          style="delete"
          onClick={() => manageCart("remove", tour, setTours)}
        />
      </div>
    </Container>
  );
};
