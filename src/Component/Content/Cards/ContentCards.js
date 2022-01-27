import React from "react";

const ContentCards = (props) => {
  return (
    <>
      <div className='card-footer px-0'>
        <span className='profile'>
          <img src={props.profileImg} alt='Sarthak' />
          <p className='my-auto mx-2 fw-bold'>{props.profile}</p>
        </span>
        <span className='views-share ms-auto'>
          <img src={props.views} alt='views' className='me-5' />
          <button className='share'>
            <img src={props.share} alt='share' />
          </button>
        </span>
      </div>
    </>
  );
};

export default ContentCards;
