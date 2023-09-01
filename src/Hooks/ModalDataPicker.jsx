import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import DatePickers from "../components/Feature/DataPicker";
import { ModalContainer, Modal, ModalHeader, ModalContent} from"../Hooks/ModalElements";



const ModalDataPicker = ({ onSubmit, onCancel, closeModal, children }) => {
  const { handleSubmit, register, errors } = useForm();



  return (

    <Modal>
      
      <ModalContainer>
        <ModalHeader>
          <ModalContent>
            <DatePickers></DatePickers>
          </ModalContent>
        </ModalHeader>

      </ModalContainer>

    </Modal>
  );
};
export default ModalDataPicker;