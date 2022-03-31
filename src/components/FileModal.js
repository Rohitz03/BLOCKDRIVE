import React, { useState } from "react";
import "./FileModal.css";
import Main from "./Main";

function Modal({ setOpenModal }) {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>File Details</h1>
        </div>
        <div className="body">
          <p>

              
          </p>
        </div>
        <div className="footer">
          <button>Download</button>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          
        </div>
      </div>
    </div>
  );
}


function FileModal() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App1">
    {modalOpen && <Modal setOpenModal={setModalOpen} />}

      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

    </div>
  );
}


export default FileModal;

