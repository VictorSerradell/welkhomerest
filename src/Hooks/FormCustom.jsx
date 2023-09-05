import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  StyledForm,
  StyledInput,
  StyledError,
  StyledSubmitButton,
} from "./FormElements";
import styled from "styled-components";

function FormCustom() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);
  const [data, setData] = useState("");

  return (
    <StyledForm>
      <p>¿Cuantos somos?</p>
      <StyledInput
        type="number"
        placeholder="Número de personas"
        name="numeroPersonas"
        {...register("test", { required: "Este campo es requerido" })} // Validación requerida
      />
      {errors.telefono && <StyledError>{errors.telefono.message}</StyledError>}

      <StyledSubmitButton type="submit">Enviar</StyledSubmitButton>
    </StyledForm>
  );
}

export default FormCustom;
