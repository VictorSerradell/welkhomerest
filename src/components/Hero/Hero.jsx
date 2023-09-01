import React, { useState } from "react";
import NavBar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import ModalDataPicker from "../../Hooks/ModalDataPicker";
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

  const [isOpen, setIsOpen] = useState(false);
 

  const toggle = ({toggle}) => {
    setIsOpen(!isOpen);
  };


  return (
    <HeroContainer>
      <NavBar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>WELKHOME CLUB</HeroH1>
          <HeroP>A tu futura casa para comer y beber... de manera única</HeroP>
          <HeroBtn onClick={() => <ModalDataPicker />}>Reservar</HeroBtn>
        </HeroItems>
      </HeroContent>

    </HeroContainer>
  );
}

export default Hero;