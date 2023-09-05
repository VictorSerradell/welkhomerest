import React, { useState } from "react";
import DatePickers from "../components/Feature/DataPickers";
import FormCustom from "../Hooks/FormCustom";
import {
  ModalContainer,
  Modal,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
} from "../Hooks/ModalElements";

const ModalDataPicker = ({ onSubmit, onCancel, closeModal, children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Modal>
      <ModalContainer>
        <ModalHeader>
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
