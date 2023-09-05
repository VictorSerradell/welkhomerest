import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;

  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    color: black;
  }

  button {
    font-size: 1.4rem;
    padding: 10px 20px;
    border: none;
    background: #007bff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s ease-out;
    margin-bottom: 10px;
  }

  button.accept {
    background: #28a745;
  }

  button.cancel {
    background: #dc3545;
  }
`;
