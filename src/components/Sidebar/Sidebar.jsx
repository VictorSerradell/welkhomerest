import React, { useState } from "react";
import ModalDataPicker from "../../Hooks/ModalDataPicker";
import FormCustom from "../../Hooks/FormCustom";
import CustomModal from "../../Hooks/Modal";
import styled from "styled-components";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SideBarElements";

function Sidebar({ isOpen, toggle }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [showFormCustom, setShowFormCustom] = useState(false);

  const handleButtonClick = (value) => {
    setModalOpen(false);
    setShowCustomModal(false);
    setShowFormCustom(false);
  };

  const openModal = () => {
    setModalOpen(true);
    setShowCustomModal(true);
    setShowFormCustom(false);
  };

  const openFormCustom = () => {
    setModalOpen(true);
    setShowCustomModal(false);
    setShowFormCustom(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setShowCustomModal(false);
    setShowFormCustom(false);
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/" onClick={openFormCustom}>
          Reserva
        </SidebarLink>
        {showCustomModal && <CustomModal />}
        <SidebarLink to="/" onClick={openModal}>
          Registrarse
        </SidebarLink>
        {showFormCustom && <ModalDataPicker />}
      </SidebarMenu>
    </SidebarContainer>
  );
}

export default Sidebar;
