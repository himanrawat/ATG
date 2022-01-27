import React from "react";
import Illustration from "../../Assets/illustration.png";

const ModalIllustration = () => {
  return (
    <>
      <div>
        <img src={Illustration} alt='illustration' />
        <p className='modalIllustration'>
          By signing up, you agree to our Terms &amp; conditions, Privacy policy
        </p>
      </div>
    </>
  );
};

export default ModalIllustration;
