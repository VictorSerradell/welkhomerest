import React from 'react';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarRoute,
} from './SideBarElements';

function Sidebar({ isOpen, toggle }) {
	return (
		<SidebarContainer isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarMenu>
				<SidebarLink to='/'>Reservas</SidebarLink>
				<SidebarLink to='/'>Registrarse</SidebarLink>
			</SidebarMenu>
			<SideBtnWrap>
				<SidebarRoute to='/'>Order Now</SidebarRoute>
			</SideBtnWrap>
		</SidebarContainer>
	);
}

export default Sidebar;