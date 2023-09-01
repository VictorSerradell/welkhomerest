import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1); 
  padding: 20px; 
  border-radius: 10px;
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

export const StyledSubmitButton = styled.button`
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