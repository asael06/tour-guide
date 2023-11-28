import { Container } from "./styles";
import { NavLink } from "react-router-dom";
import { Button } from "../button/button";
import { useState } from "react";
import { Cart } from "../cart";
import { Icon } from "@mui/material";

export const Menu = () => {
  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Container>
      <ul className={showMenu ? "show-menu" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/next-trips">Próximos viajes</NavLink>
        </li>
        <li>
          <NavLink to="/about">Nosotros</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contacto</NavLink>
        </li>
      </ul>
      <div className="cart-container">
        <Button style="menu" onClick={() => setShowMenu(!showMenu)} />
        <Button style="cart" onClick={() => setShowCart(true)} />
      </div>
      {showCart && <Cart setShowCart={setShowCart} />}
    </Container>
  );
};
