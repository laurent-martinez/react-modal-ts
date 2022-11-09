import React from "react";
import './modal.css'



export interface ModalProps {
    img: string;
    text: string;
    open: boolean;
    hideModal: any;
  }

export function Modal({text,img,open,hideModal}: ModalProps) {
    if (!open) return null;
  
    return (
      <div className="modalContainer">
        <div className="overlay">
          <div className="modal">
            <div className="modalImg">
              <img src={img} alt="" />
            </div>
            <div className="modalContent">{text}</div>
            <button type="button" className="closeBtn" onClick={hideModal}>
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
