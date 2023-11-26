import { Container } from "./styles";
import { Icon } from "@mui/material";

export const Button = ({
  label,
  style = "normal",
  onClick,
  disabled,
  type,
}) => {
  const renderButton = () => {
    switch (style) {
      case "cart":
        return <Icon>shopping_cart</Icon>;
      case "close":
        return <Icon>close</Icon>;
      case "delete":
        return <Icon>delete</Icon>;
      default:
        return;
    }
  };
  return (
    <Container
      className={style}
      onClick={onClick}
      label={label}
      disabled={disabled}
      type={type}
    >
      {renderButton()} {label && <p>{label}</p>}
    </Container>
  );
};
