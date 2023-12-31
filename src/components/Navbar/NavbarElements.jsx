import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { BiChat } from "react-icons/bi";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: space-between;
  justify-content: center;
  font-weight: 700;
  z-index: 100;
  padding: 0 20px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 24px;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  margin-right: auto;

  &:hover {
    color: #9e9d99;
  }

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
    flex-direction: row;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: #fff;
`;

export const Bars = styled(BiChat)`
  top: 20px;
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
