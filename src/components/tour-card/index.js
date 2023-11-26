import { Container } from "./styles";
import { Button } from "../button/button";
import { manageCart } from "../../utils";
import { useEffect, useState } from "react";

export const TourCard = ({
  tour,
  onClick,
  toursSelected,
  setToursSelected,
}) => {
  const [inCart, setInCart] = useState(false);
  const { id, name } = tour;

  useEffect(() => {
    const tr = toursSelected.find((item) => item.id === tour.id);
    setInCart(tr);
  }, [toursSelected]);

  return (
    <Container onClick={onClick}>
      <div className="filter">
        <h3>Click para saber más...</h3>
      </div>
      <img src={require(`../../assets/destinations/${id}.jpg`)} alt={name} />
      <h3>{name}</h3>
      {inCart ? (
        <Button
          style="cart"
          label={"Quitar del carrito"}
          onClick={(e) => {
            e.stopPropagation();
            manageCart("remove", tour, setToursSelected);
          }}
        />
      ) : (
        <Button
          style="cart"
          label={"Agregar al carrito"}
          onClick={(e) => {
            e.stopPropagation();
            manageCart("add", tour, setToursSelected);
          }}
        />
      )}
    </Container>
  );
};
