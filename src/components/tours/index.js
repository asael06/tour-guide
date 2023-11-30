import { Container } from "./styles";
import { TourCard } from "../tour-card";
import { useEffect, useState } from "react";
import axios from "axios";

export const Tours = ({ setTourSelected }) => {
  const [toursSelected, setToursSelected] = useState([]);
  const [tours, setTours] = useState([]);

  const getTours = async () => {
    const response = await axios.get(process.env.REACT_APP_GET_TOURS);
    setTours(response.data.data);
    // const response = await axios.get("http://localhost:8000/tours");
    // setTours(response.data);
  };

  useEffect(() => {
    getTours();
    const checkTours = setInterval(() => {
      const toursSelected = JSON.parse(sessionStorage.getItem("toursSelected"));
      setToursSelected(toursSelected || []);
    }, 1000);

    return () => {
      clearInterval(checkTours);
    };
  }, []);

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
