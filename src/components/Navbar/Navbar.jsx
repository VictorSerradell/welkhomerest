import React from 'react';
import { Nav, NavIcon, NavLink } from './NavbarElements';

function NavBar({ toggle }) {
	return (
		<>
			<Nav>
				<NavLink to='/'>RESTAURANTE</NavLink>
				<NavLink to='/'>BEBIDAS AL PESO</NavLink>
				<NavLink to='/'>CARTA</NavLink>
				<NavLink to='/'>RESERVAR</NavLink>
				<NavLink to='/'>DELIVERY</NavLink>
				<NavLink to='/'>TU CLUB</NavLink>
				<NavLink to='/'>EVENTOS</NavLink>
				<NavIcon onClick={toggle}>
					
				</NavIcon>
			</Nav>
		</>
	);
}

export default NavBar;