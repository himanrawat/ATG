import React from "react";

const CardTimeline = (props) => {
  return (
    <>
      <div className='timeline-location'>
        <div className='timeline'>
          <span>
            <img src={props.timeline} alt='calender' />
          </span>
          <span>
            <p className='fw-bold my-auto mx-2'>{props.time}</p>
          </span>
        </div>
        <div className='location mx-auto'>
          <span>
            <img src={props.locationImg} alt='Location' />
          </span>
          <span>
            <p className='fw-bold my-auto mx-2'>{props.locationText}</p>
          </span>
        </div>
      </div>
      <div className='d-grid gap-2 my-3'>
        <button className='btn customBtn' type='button' style={props.style}>
          {props.btnText}
        </button>
      </div>
    </>
  );
};

export default CardTimeline;
