import React, { useState } from "react";
import CustomModal from "../../Hooks/Modal";
import welkhomeclub from '../../images/welkhomeclub.png';
import { Bars,Nav, NavIcon, NavLink} from './NavbarElements';

function NavBar({ toggle }) {
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
		<>
		 <Nav>
      <NavLink to='/' className='home_button'>
        <img className="welkhomeclub" src={welkhomeclub} alt="Welkhome Club" />
      </NavLink>
      <NavLink to='/' onClick={openModal}>Registrarse</NavLink>
      {modalOpen && <CustomModal onSubmit={handleButtonClick} onCancel={handleButtonClick} onClose={handleButtonClick} isOpen={modalOpen} closeModal={handleButtonClick} />}
      <NavIcon onClick={toggle}>
        <Bars />
      </NavIcon>
    </Nav>
	</>
	);
}

export default NavBar;