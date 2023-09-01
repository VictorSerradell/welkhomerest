import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiChat } from 'react-icons/bi';

export const Nav = styled.nav`
	background: transparent;
	height: 100px;
	display: flex;
	justify-content: space-around;
	font-weight: 50px;
	

`;

export const NavLink = styled(Link)`
	color: #fff;
	font-size: 1rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	cursor: pointer;
	

	@media screen and (max-width: 400px) {
		position: absolute;
		top: 10px;
		left: 25px;
	}
`;

export const NavIcon = styled.div`
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	cursor: pointer;
	color: #fff;

	p {
		transform: translate(-175%, 100%);
		font-weight: bold;
	}
`;

export const Bars = styled(BiChat)`
	font-size: 2rem;
	transform: translate(-50%, -15%);
`;