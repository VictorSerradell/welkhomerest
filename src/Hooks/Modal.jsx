import React, { useState } from "react";
import { createPortal } from "react-dom";
import "../Hooks/Modal.css";

 const CustomModal = ({ onSubmit, onCancel, closeModal, children }) => {
  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
      }}
    >
      <div className="modal">
        <div
          className="modal-header"
          onClick={() => closeModal("Modal was closed")}
        >
          <p className="close">&times;</p>
        </div>
        <div className="modal-content">{children}
        <h1>Formulario de reserva</h1>
        </div>
        <div className="modal-footer">
          <button
            type="submit"
            className="btn btn-submit"
            onClick={() => onSubmit ()}
          >Enviar
          </button>
          <button
            type="submit"
            className="btn btn-cancel"
            onClick={() => onCancel ()}
          >Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
export default CustomModal;