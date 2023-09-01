import React, { useState } from "react";
import ModalDataPicker from "../../Hooks/ModalDataPicker";
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
			<p>Sabores increíbles, las bebidas al peso</p>
			<FeatureButton onClick={ModalDataPicker}>Reservar</FeatureButton>

		</FeatureContainer>
	);
}

export default Feature;