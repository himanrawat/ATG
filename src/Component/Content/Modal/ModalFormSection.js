import React from "react";
import Fb from "../../Assets/fb.png";
import Google from "../../Assets/google.png";

const ModalFormSection = () => {
  return (
    <>
      <form className='modalForm mb-3'>
        <div>
          <div className='input-group'>
            <input
              type='text'
              aria-label='First name'
              className='form-control modalFormControl'
              placeholder='First Name'
            />
            <input
              type='text'
              aria-label='Last name'
              className='form-control modalFormControl'
              placeholder='Last Name'
            />
          </div>
          <div>
            <input
              type='email'
              className='form-control modalFormControl'
              id='exampleFormControlInput1'
              placeholder='Email'
            />
          </div>
          <div>
            <input
              type='password'
              className='form-control modalFormControl'
              id='exampleFormControlInput1'
              placeholder='Password'
            />
          </div>
          <div>
            <input
              type='password'
              className='form-control modalFormControl'
              id='exampleFormControlInput1'
              placeholder='Confirm Password'
            />
          </div>
        </div>
      </form>
      <div className='d-grid gap-2'>
        <button className='btn modalButton' type='button'>
          Create Account
        </button>
      </div>
      <div className='d-grid gap-2 my-3'>
        <button className='btn socialBtn' type='button'>
          <img src={Fb} alt='fb' />
          <span className='mx-2'>Sign up with Facebook</span>
        </button>
        <button className='btn socialBtn' type='button'>
          <img src={Google} alt='fb' />
          <span className='mx-2'>Sign up with Google</span>
        </button>
      </div>
    </>
  );
};

export default ModalFormSection;
