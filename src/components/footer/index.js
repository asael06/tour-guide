import { Container } from "./styles";
import { Icon } from "@mui/material";

export const Footer = () => {
  return (
    <Container>
      <div className="contact-data">
        <div className="contact-info">
          <h3>Contáctanos</h3>
          <p>
            <Icon>phone</Icon> +51 311 150 9793
          </p>
          <p>
            <Icon>mail</Icon> asael.mb@hotmail.com
          </p>
          <p>
            <Icon>place</Icon> Tepic, Nayarit México
          </p>
        </div>
        <div className="social">
          <h3>Síguenos en</h3>
          <p>
            <Icon>facebook</Icon> www.facebook.com
          </p>
          <p>
            <Icon>tiktok</Icon> www.tiktok.com
          </p>
          <p>
            <Icon>play_circle_filled</Icon> www.youtube.com
          </p>
        </div>
      </div>
      <div className="copyright">
        <p>© Copyright</p>
      </div>
    </Container>
  );
};
