import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ModalContainer,
  Modal,
  ModalHeader,
  ModalContent,ModalCloseButton
} from "../Hooks/ModalElements";
import Form from "./Form";

const CustomModal = ({ onSubmit, onCancel, closeModal, children }) => {
  const { handleSubmit, register, errors } = useForm();

  const handleFormSubmit = (data) => {
    // Lógica para manejar el envío del formulario aquí
    onSubmit(data);
  };

  return (
    <Modal>
      <ModalContainer>
        <ModalHeader>
          <ModalContent>
            <Form></Form>
          </ModalContent>
        </ModalHeader>
      </ModalContainer>
    </Modal>
  );
};
export default CustomModal;
