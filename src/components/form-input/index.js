import { Container } from "./styles";

export const FormInput = ({ state, setSate, field, required, placeHolder }) => {
  const onChange = (e) => {
    e.preventDefault();
    setSate({ ...state, [field]: e.target.value });
  };

  return (
    <Container>
      <input
        id={field}
        name={field}
        type="text"
        value={state[field]}
        onChange={onChange}
        required={required}
        placeholder={placeHolder || ""}
      />
    </Container>
  );
};
