import { Container } from "./styles";
import { Banner } from "../../components/banner";
import { Tours } from "../../components/tours";
import { Services } from "../../components/services";
import { TourDetail } from "../../components/tour-detail";
import { useState } from "react";
import { Cart } from "../../components/cart";

export const Home = () => {
  const [tourSelected, setTourSelected] = useState(null);
  return (
    <Container>
      <Banner />
      <Tours setTourSelected={setTourSelected} />
      <Services />

      {tourSelected && (
        <TourDetail
          name={tourSelected?.name || "-"}
          price={tourSelected?.price || "-"}
          description={tourSelected?.description || "-"}
          rate={tourSelected?.rate || "-"}
          img={
            require(`../../assets/destinations/${tourSelected?.id}.jpg`) || "-"
          }
          setTourSelected={setTourSelected}
        />
      )}
    </Container>
  );
};
