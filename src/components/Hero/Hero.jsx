import React, { useState } from "react";
import NavBar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import CustomModal from "../../Hooks/Modal"; // Asegúrate de ajustar la ruta y el nombre del componente
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
} from './HeroElements';

function Hero() {
  const [isopen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleButtonClick = (value) => {
    setModalOpen(false);
    
  }

  const toggle = () => {
    setIsOpen(!isopen);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <HeroContainer>
      <NavBar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>WELKHOME CLUB</HeroH1>
          <HeroP>A tu futura casa para comer y beber... de manera única</HeroP>
          <HeroBtn onClick={openModal}>Reservar</HeroBtn> {/* Usa openModal para abrir el modal */}
        </HeroItems>
      </HeroContent>
      {modalOpen && <CustomModal onSubmit = {handleButtonClick}
      onCancel ={handleButtonClick} onClose = {handleButtonClick} isOpen = {modalOpen} closeModal = {handleButtonClick} />} {/* Renderiza el modal si modalOpen es verdadero */}
    </HeroContainer>
  );
}

export default Hero;