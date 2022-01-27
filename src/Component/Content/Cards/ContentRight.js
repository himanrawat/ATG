import React, { useState } from "react";
import LocationImg from "../../Assets/location.svg";
import Pen from "../../Assets/pen.svg";
import Caution from "../../Assets/caution.svg";

const ContentRight = () => {
  const [inputText, setInputText] = useState("Noida, India");
  return (
    <>
      <div className='p-5'>
        <div className='input-group my-4 pb-2 inputField'>
          <span className='my-auto'>
            <img src={LocationImg} alt='location Img' />
          </span>
          <input
            value={inputText}
            type='text'
            className='form-control formInput'
            placeholder='Enter your location'
            aria-label="Recipient's username"
            aria-describedby='button-addon2'
          />
          <button className='formBtn' type='button' id='button-addon2'>
            <img src={Pen} alt='pen' />
          </button>
        </div>
        <div className='textGroup'>
          <span>
            <img src={Caution} alt='caution' />
          </span>
          <span className='ms-2'>
            Your location will help us serve better and extend a personalised
            experience.
          </span>
        </div>
      </div>
    </>
  );
};

export default ContentRight;
