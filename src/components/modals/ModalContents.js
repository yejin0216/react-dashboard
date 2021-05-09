import React from 'react';
import { ModalHeader, ModalBody } from 'reactstrap';

function ModalContents({ toggle, title, children }) {
  return (
    <>
      <ModalHeader toggle={toggle} className="p-top">
        {title}
      </ModalHeader>
      <ModalBody className="p-con">{children}</ModalBody>
    </>
  );
}

export default ModalContents;
