import { Container } from "./styles";
import { TourCard } from "../tour-card";
import db from "../../db.json";
import { useEffect, useState } from "react";

export const Tours = ({ setTourSelected }) => {
  const [toursSelected, setToursSelected] = useState([]);

  useEffect(() => {
    const checkTours = setInterval(() => {
      const toursSelected = JSON.parse(sessionStorage.getItem("toursSelected"));
      setToursSelected(toursSelected || []);
    }, 1000);

    return () => {
      clearInterval(checkTours);
    };
  }, []);

  const { tours } = db;
  return (
    <Container>
      <h2>¿A dónde te gustaría viajar?</h2>
      <div className="tours-container">
        {tours?.map((tour) => (
          <TourCard
            key={tour.id}
            tour={tour}
            toursSelected={toursSelected}
            setToursSelected={setToursSelected}
            onClick={() => setTourSelected && setTourSelected(tour)}
          />
        ))}
      </div>
    </Container>
  );
};
