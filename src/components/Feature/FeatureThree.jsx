import React, { useState } from "react";
import ModalDataPicker from "../../Hooks/ModalDataPicker";
import { FeatureContainer, FeatureButton } from "./FeatureElementsThree";

function FeatureThree() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = (value) => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <FeatureContainer>
      <h1>¿Eres más de cocina tradicional?</h1>
      <p>Solo o en compañia difruta de lo bueno.</p>
      <FeatureButton onClick={openModal}>Reservar</FeatureButton>
      {modalOpen && (
        <ModalDataPicker
          onSubmit={handleButtonClick}
          onCancel={handleButtonClick}
          onClose={handleButtonClick}
          isOpen={modalOpen}
          closeModal={handleButtonClick}
        />
      )}{" "}
      {/* Renderiza el modal si modalOpen es verdadero */}
    </FeatureContainer>
  );
}

export default FeatureThree;
