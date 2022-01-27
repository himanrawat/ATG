import React from "react";
import "./style.css";
import Logo from "../Assets/logo.svg";
import Search from "../Assets/search.svg";
import Modal from "../Content/Modal/Modal";

const PreLogin = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg'>
        <div className='container-lg'>
          <a className='navbar-brand' href='/'>
            <img src={Logo} alt='Logo' width={162.57} height={24} />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <span className='d-flex mx-auto search-box px-2'>
              <img src={Search} alt='search' className='search-icon' />
              <input
                className='input-search form-control custom-form-control me-2'
                type='search'
                placeholder='Search for your favorite groups in ATG'
                aria-label='Search'
              />
            </span>
            <span className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <div>
                Create account.
                <a
                  className='modalBtn'
                  type='button'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                >
                  It's free!
                </a>
                <div
                  className='modal fade'
                  id='exampleModal'
                  tabindex='-1'
                  aria-labelledby='exampleModalLabel'
                  aria-hidden='true'
                >
                  <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                      <Modal />
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default PreLogin;
