import { useEffect, useState } from "react";

import { Container } from "./styles";
import { FormInput } from "../form-input";
import { Button } from "../button/button";

export const Form = ({ setTours }) => {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    country: "",
    postalCode: "",
    state: "",
    city: "",
  });

  const labels = {
    name: "Nombre",
    lastName: "Apellidos",
    country: "País",
    postalCode: "Código postal",
    state: "Estado",
    city: "Ciudad",
  };

  const getLocationData = async () => {
    const postalCode = data.postalCode;
    const country = data.country;
    const apiKey = "c05d1019edbf4c4388d547493ab069e0";
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
      postalCode
    )},${encodeURIComponent(country)}&key=${apiKey}`;
    const response = await fetch(apiUrl);
    const info = await response.json();
    const result = info.results[0];
    if (result) {
      const city = result.components.city || result.components.county || "";
      const state = result.components.state;
      console.log(result.components);
      setData({ ...data, city, state });
    }
  };

  useEffect(() => {
    if (data.postalCode.length === 5 && data.country) {
      getLocationData();
    }
  }, [data.postalCode, data.country]);

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Reservación exitosa");
    sessionStorage.setItem("toursSelected", JSON.stringify([]));
    setData({
      name: "",
      lastName: "",
      country: "",
      postalCode: "",
      state: "",
      city: "",
    });
    setTours([]);
  };

  return (
    <Container>
      <h2>Ingresa tus datos</h2>
      <form onSubmit={onSubmit}>
        <div className="input-container">
          {Object.keys(data).map((key, i) => (
            <FormInput
              key={i}
              state={data}
              setSate={setData}
              field={key}
              required
              placeHolder={`${labels[key]}`}
            />
          ))}
        </div>

        <Button label={"Reservar"} type={"submit"} />
      </form>
    </Container>
  );
};
