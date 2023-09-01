import React, { useState } from "react";
import CustomModal from "../../Hooks/Modal";
import { FeatureContainer, FeatureButton } from './FeatureElementsThree';

function FeatureThree() {

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
			<h1>Pizza of the Day</h1>
			<p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
			<FeatureButton onClick={openModal}>Reservar</FeatureButton>
			{modalOpen && <CustomModal onSubmit = {handleButtonClick}
      onCancel ={handleButtonClick} onClose = {handleButtonClick} isOpen = {modalOpen} closeModal = {handleButtonClick} />} {/* Renderiza el modal si modalOpen es verdadero */}
		</FeatureContainer>
	);
}

export default FeatureThree;