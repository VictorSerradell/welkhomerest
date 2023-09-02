import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h2 {
    font-size: clamp(2rem, 5vw, 3rem);
    color: black;
  }

  button {
    font-size: 1.4rem;
    padding: 10px 20px;
    border: none;
    background: #007BFF;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.2s ease-out;
    margin-bottom: 10px;
  }

  button.accept {
    background: #28A745;
  }

  button.cancel {
    background: #DC3545;
  }
`;
