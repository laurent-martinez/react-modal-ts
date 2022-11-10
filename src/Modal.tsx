import React from "react";
import styled from 'styled-components'

const Container = styled.div`
  position : absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 997;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(2 2 2 / 63%);
  z-index: 998;
`
const Modal = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  z-index: 999;
  height: 400px;
  border-radius: 5px;

.closeBtn {
  padding: 0.3rem 0.5rem;
  border: none;
  border-radius: 5px;
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  background-color: #93ad18;
  color: #fff;
  cursor: pointer;
}

.modalImg {
width: 100%;
display: flex;
justify-content: center;
align-items: center;
}
.modalImg img {
  width: 100%;
  height: max-content;
  object-fit: contain;
}

.modalContent {
  text-align: center;
}
`
export interface ModalProps {
    img?: string;
    children: React.ReactNode;
    open: boolean;
    hideModal: ()=> boolean;
  }

export function MyModal({children,img,open,hideModal}: ModalProps) {
    if (!open) return null;
  
    return (
      <Container>
        <Overlay>
          <Modal>
            <div className="modalImg">
              <img src={img} alt="" />
            </div>
            <div className="modalContent">{children}</div>
            <button type="button" className="closeBtn" onClick={hideModal}>
              X
            </button>
          </Modal>
        </Overlay>
      </Container>
    );
  }
