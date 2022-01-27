import React from "react";

const ModalHead = () => {
  return (
    <>
      <div className='modalHeader '>
        <p className='modalHeader-p'>
          Let's learn, share &amp; inspire each other with our passion for
          computer engineering. Sign up now 🤘🏼
        </p>
      </div>
      <div className='heading-content px-4 my-3'>
        <h3>Create Account</h3>
        <p className='heading-content-p ms-auto'>
          Already have an Account? <a className='modalBtn'>Sign In</a>
        </p>
      </div>
    </>
  );
};

export default ModalHead;
