import React, { useState } from "react";
import ModalDataPicker from "../../Hooks/ModalDataPicker";
import CustomModal from "../../Hooks/Modal";
import { FeatureContainer, FeatureButton } from './FeatureElements';

function Feature() {
	
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
			<h1>Sabores increíbles, las bebidas al peso</h1>
			<p></p>
			<FeatureButton onClick={openModal}>Reservar</FeatureButton>
			{modalOpen && <ModalDataPicker onSubmit = {handleButtonClick}
      onCancel ={handleButtonClick} onClose = {handleButtonClick} isOpen = {modalOpen} closeModal = {handleButtonClick} />} {/* Renderiza el modal si modalOpen es verdadero */}
			

		</FeatureContainer>
	);
}

export default Feature;