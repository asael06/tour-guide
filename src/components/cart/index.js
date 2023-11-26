import { Container } from "./styles";
import { TourInCart } from "../tour-in-car";
import { Button } from "../button/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Cart = ({ setShowCart }) => {
  const [tours, setTours] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const toursSelected = JSON.parse(sessionStorage.getItem("toursSelected"));
    setTours(toursSelected || []);
  }, []);

  useEffect(() => {
    let sum = 0;
    tours.forEach((tour) => {
      sum += tour.price;
    });
    setTotal(sum);
  }, [tours]);

  return (
    <Container>
      <div className="cart-container">
        <Button
          style="close"
          onClick={() => setShowCart && setShowCart(false)}
        />
        <h2>Resumen del pedido</h2>
        <div className="tours-list">
          {tours.length ? (
            tours.map((tour, i) => (
              <TourInCart key={i} tour={tour} setTours={setTours} />
            ))
          ) : (
            <h2 className="emtpy-cart">Carrito vacío</h2>
          )}
        </div>
        <div className="button-container">
          <Button
            style="normal"
            label="Checkout"
            disabled={tours.length === 0}
            onClick={() => {
              setShowCart && setShowCart(false);
              navigate("/checkout");
            }}
          />
          <h2>
            Total $<span>{total}</span>
          </h2>
        </div>
      </div>
    </Container>
  );
};
