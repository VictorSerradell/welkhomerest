import React, { useState } from "react";
import DatePickers from "../components/Feature/DataPickers";

import { ModalContainer, Modal, ModalHeader, ModalContent} from"../Hooks/ModalElements";



const ModalDataPicker = ({ onSubmit, onCancel, closeModal, children }) => {

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