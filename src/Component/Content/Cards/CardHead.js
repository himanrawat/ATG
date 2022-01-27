import React from "react";

const CardHead = (props) => {
  return (
    <div className='card-heading'>
      <span>
        <h5 className='card-title'>{props.heading}</h5>
      </span>
      <span className='ms-auto'>
        <div className='btn-group' role='group'>
          <button
            id='btnGroupDrop1'
            type='button'
            className=' dropdownToggle'
            data-bs-toggle='dropdown'
            aria-expanded='false'
          >
            <img src={props.threeDots} alt='Three Dots' />
          </button>
          <ul className='dropdown-menu' aria-labelledby='btnGroupDrop1'>
            <li>
              <a className='dropdown-item'>Edit</a>
            </li>
            <li>
              <a className='dropdown-item'>Report</a>
            </li>
            <li>
              <a className='dropdown-item'>Option 3</a>
            </li>
          </ul>
        </div>
      </span>
    </div>
  );
};

export default CardHead;
