import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 997;
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
`;
const Modal = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35%;
  z-index: 999;
  border-radius: 5px;
  overflow: hidden;

  .closeBtn {
    padding: 0.2rem 0.5rem;
    border: none;
    border-radius: 5px;
    position: absolute;
    margin-bottom: 2rem;
    top: 0.8rem;
    right: 0.8rem;
    color: #fff;
    cursor: pointer;
  }

  .modalImg {
    width: 100%;
  }
  .modalImg img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`;
export interface ModalProps {
  img: string;
  children: React.ReactNode;
  closeBtnStyle: string;
  open: boolean;
  styledContent: string;
  hideModal: () => boolean;
}

export function SublimeModal({
  children,
  img,
  open,
  hideModal,
  styledContent,
  closeBtnStyle,
}: ModalProps) {
  if (!open) return null;

  return (
    <Container>
      <Overlay>
        <Modal>
          <button
            type="button"
            className={`closeBtn ${closeBtnStyle}`}
            onClick={hideModal}
          >
            X
          </button>
          <div className="modalImg">
            <img src={img} alt="" />
          </div>
          <div className={styledContent}>{children}</div>
        </Modal>
      </Overlay>
    </Container>
  );
}
