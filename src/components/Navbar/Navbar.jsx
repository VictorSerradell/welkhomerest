import React, { useState } from "react";
import CustomModal from "../../Hooks/Modal";
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
				<NavLink to='/'>welkhomeclub</NavLink>
				<NavLink to='/' onClick={openModal}>Registrarse</NavLink>
				{modalOpen && <CustomModal onSubmit = {handleButtonClick}
				onCancel ={handleButtonClick} onClose = {handleButtonClick} isOpen = {modalOpen} closeModal = {handleButtonClick} />} {/* Renderiza el modal si modalOpen es verdadero */}
				<NavIcon onClick={toggle}>
				<p>Menu</p>
					<Bars />
					
				</NavIcon>
			</Nav>
		</>
	);
}

export default NavBar;