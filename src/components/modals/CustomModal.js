import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

function CustomModal({
  isOpen,
  toggle,
  saveContents,
  deleteContents,
  title,
  children,
}) {
  //   모달 외부 닫기 버튼
  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      style={{ position: 'absolute', top: '15px', right: '670px' }}
      onClick={toggle}
    >
      &times;
    </button>
  );
  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      backdrop="static"
      zIndex="310"
      className="custom-modal"
      contentClassName="modal-wrapper"
      external={externalCloseBtn}
    >
      <ModalHeader className="p-top">
        {title}
        <div className="btn-pop-area">
          <button
            type="button"
            className="btn btn-popup-save"
            onClick={saveContents}
          >
            <span className="material-icons">add</span>저장
          </button>
          <button
            type="button"
            className="btn btn-popup-del"
            onClick={deleteContents}
          >
            <span className="material-icons">close</span>삭제
          </button>
        </div>
      </ModalHeader>
      <ModalBody className="p-con">{children}</ModalBody>
    </Modal>
  );
}

export default CustomModal;
