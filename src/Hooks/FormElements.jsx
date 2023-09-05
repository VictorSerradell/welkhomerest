import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0);
  padding: 1px;
  border-radius: 10px;
  width: 80vw;
  max-width: 400px;
  margin: 0 auto;

  p {
    color: #ffffff; /* Personaliza el color del texto */
    margin-bottom: 10px; /* Personaliza el margen inferior */
  }
`;

export const StyledInput = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 2px;
`;

export const StyledError = styled.p`
  color: black;
  font-size: 14px;
`;

export const ButtonContainer = styled.div`
  display: inline-block;
  justify-content: space-between; /* Coloca los botones alineados uno al lado del otro */
  width: 100%; /* Asegura que ocupen todo el ancho disponible */
  margin-top: 10px; /* Espacio entre los botones y otros elementos del formulario */
`;

export const StyleCancelButton = styled.button`
  padding: 10px 20px;
  background-color: #ffc500;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e31837;
  }
`;

export const StyledSubmitButton = styled.button`
  padding: 10px 28px;
  background-color: #ffc500;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e31837;
  }
`;
