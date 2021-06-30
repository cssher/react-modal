import React from "react";
import ReactDOM from "react-dom";
import "./ModalPortal.css";

export default function ModalPortal(props) {
  const { open, closeModal } = props;

  if (!open) return "";

  return ReactDOM.createPortal(
    <div className="modal_overlay">
      <div className="modal_body">
        <h1>MODAL CONTENT</h1>
        <p>
          In linear algebra, the modal matrix is used in the diagonalization
          process involving eigenvalues and eigenvectors. It is utilized in the
          similarity transformation.
        </p>
        <button className="close_btn" onClick={closeModal}>
          Close Modal
        </button>
      </div>
    </div>,

    document.getElementById("portal-root")
  );
}
