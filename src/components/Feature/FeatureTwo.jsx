import React, { useState } from "react";
import ModalDataPicker from "../../Hooks/ModalDataPicker";
import { FeatureContainer, FeatureButton } from './FeatureElementsTwo';

function FeatureTwo() {

	const [isOpen, setIsOpen] = useState(false);
  	const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = (value) => {
    setModalOpen(false);
    
  }

	const openModal = () => {
		setModalOpen(true);
	  };
	
	  const closeModal = () => {
		setModalOpen(false);
	  };
	return (
		<FeatureContainer>
			<h1>¿Eres más de cocina veggie?</h1>
			<p>Solo o en compañia difruta de lo bueno.</p>

			<FeatureButton onClick={openModal}>Reservar</FeatureButton>
			{modalOpen && <ModalDataPicker onSubmit = {handleButtonClick}
      onCancel ={handleButtonClick} onClose = {handleButtonClick} isOpen = {modalOpen} closeModal = {handleButtonClick} />} {/* Renderiza el modal si modalOpen es verdadero */}
		</FeatureContainer>
	);
}

export default FeatureTwo;