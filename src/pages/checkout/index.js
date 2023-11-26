import { useEffect, useState } from "react";
import { Form } from "../../components/form";
import { Container } from "./styles";
import { TourInCart } from "../../components/tour-in-car";

export const Checkout = () => {
  const [tours, setTours] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const toursSelected = JSON.parse(sessionStorage.getItem("toursSelected"));
    setTours(toursSelected);
  }, []);

  useEffect(() => {
    let sum = 0;
    tours.forEach((tr) => (sum += tr.price));
    setTotal(sum);
  }, [tours]);

  return (
    <Container>
      <Form setTours={setTours} />
      <div className="purchase-detail">
        <div className="text-container">
          <h2>Detalle del pedido</h2>
          <h2>
            Total $<span>{total}</span>
          </h2>
        </div>
        <div className="tours-container">
          {tours.map((tour, i) => (
            <TourInCart key={i} tour={tour} setTours={setTours} />
          ))}
        </div>
      </div>
    </Container>
  );
};
