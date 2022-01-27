import React from "react";
import "./style.css";
import Arrow from "../Assets/arrow.svg";
// import BannerImg from "../Assets/main-banner.png";

const Header = () => {
  return (
    <>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container banner'>
          <div className='mobile-content'>
            <div className='d-grid d-flex justify-content-end py-3'>
              <img src={Arrow} alt='arrow' className='me-auto' />
              <button className='banner-btn me-md-2' type='button'>
                Join Group
              </button>
            </div>
          </div>
          <span className='banner-text'>
            <h1>Computer Engineering</h1>
            <p>142,765 Computer Engineers follow this</p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
