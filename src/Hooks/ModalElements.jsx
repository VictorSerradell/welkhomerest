import styled from 'styled-components';

export const close = styled.div`
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Modal = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  margin: 50% 15%;
  z-index: 700;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 2rem;
`;

export const ModalContent = styled.div`
  margin-bottom: 2rem;
`;

export const ModalCloseButton = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  margin-right: 1rem;
`;
