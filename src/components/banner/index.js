import { Container } from "./styles";
import banner from "../../assets/banner/banner.jpg";
import { Button } from "../button/button";

export const Banner = ({
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  heading = "Sed ut perspiciatis unde",
}) => {
  return (
    <Container>
      <img src={banner} alt="page banner" />
      <div className="text-container">
        <p>{text}</p>
        <h1>{heading}</h1>
        <Button label={"Contáctanos"} />
      </div>
    </Container>
  );
};
