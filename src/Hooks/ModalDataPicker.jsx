import React, { useState } from "react";
import DatePickers from "../components/Feature/DataPickers";
import FormCustom  from "../Hooks/FormCustom";
import { ModalContainer, Modal, ModalHeader, ModalContent,ModalCloseButton,} from"../Hooks/ModalElements";



const ModalDataPicker = ({ onSubmit, onCancel, closeModal, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Función para cerrar el modal
  const closeModalHandler = () => {
    setIsModalOpen(false);
    closeModal(); // Llama a la función de cierre del modal pasada como prop
  };

  return (

    <Modal>
      <ModalContainer>
        <ModalHeader>
        <ModalCloseButton onClick={closeModalHandler}>X</ModalCloseButton> 
          <ModalContent>
            <DatePickers></DatePickers>
            <FormCustom></FormCustom>
          </ModalContent>
        </ModalHeader>

      </ModalContainer>

    </Modal>
  );
};
export default ModalDataPicker;