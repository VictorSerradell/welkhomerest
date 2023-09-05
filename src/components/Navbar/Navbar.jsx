import React, { useState } from "react";
import CustomModal from "../../Hooks/Modal";
import welkhomeclub from "../../images/welkhomeclub.png";
import { Bars, Nav, NavIcon, NavLink } from "./NavbarElements";

function NavBar({ toggle }) {
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

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(); // Cierra el modal solo si se hace clic en el fondo
    }
  };

  return (
    <>
    <Nav>
      
     <NavLink to='/' className='home_button'>
       <img className="welkhomeclub" src={welkhomeclub} alt="Welkhome Club" />
     </NavLink>
     
     {modalOpen && <CustomModal onSubmit={handleButtonClick} onCancel={handleButtonClick} onClose={handleButtonClick} isOpen={modalOpen} closeModal={handleButtonClick} />}
     <NavIcon onClick={toggle}>
       <Bars />
     </NavIcon>
   </Nav>
 </>
 );
}

export default NavBar;
