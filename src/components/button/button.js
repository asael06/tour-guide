import { Container } from "./styles";

export const Button = ({ label, style = "normal" }) => {
  return <Container className={style}>{label}</Container>;
};
