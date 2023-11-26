import { Container } from "./styles";
import { Button } from "../button/button";

export const TourDetail = ({
  name,
  img,
  price,
  rate,
  description,
  setTourSelected,
}) => {
  return (
    <Container>
      <div className="detail-box">
        <div className="button-container">
          <Button
            style="close"
            onClick={() => setTourSelected && setTourSelected(null)}
          />
        </div>
        <div className="img-container">
          <img src={img} alt={name} />
        </div>
        <h2>
          Destino: <span>{name}</span>
        </h2>
        <div className="price-rate-box">
          <div className="rate">
            <p>
              Calificación <span>{rate}</span>
            </p>
          </div>
          <p className="price">
            Precio <span>${price}</span>
          </p>
        </div>
        <div className="description-container">
          <p className="description">{description}</p>
        </div>
      </div>
    </Container>
  );
};
