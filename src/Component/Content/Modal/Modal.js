import React from "react";
import ModalFormSection from "./ModalFormSection";
import ModalHead from "./ModalHead";
import ModalIllustration from "./ModalIllustration";
import "./style.css";

const Modal = () => {
  return (
    <>
      <div className='modalBox'>
        <ModalHead />
        <div className='container px-4'>
          <div className='row'>
            <div className='col-6'>
              <ModalFormSection />
            </div>
            <div className='col-6'>
              <ModalIllustration />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
